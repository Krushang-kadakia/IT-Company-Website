import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as HeroIcons from "@heroicons/react/24/outline";
import {
    TrashIcon,
    PencilSquareIcon,
    PlusIcon,
    XMarkIcon,
    ArrowRightStartOnRectangleIcon
} from "@heroicons/react/24/outline";

export default function Admin() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("services");
    const [services, setServices] = useState([]);
    const [products, setProducts] = useState([]);
    const [contacts, setContacts] = useState([]);

    // UI State
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState(null);
    const [formData, setFormData] = useState({});

    // Auth Check & Fetch
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            return;
        }
        fetchServices();
        fetchProducts();
        fetchContacts();
    }, [navigate]);

    const getAuthHeaders = () => {
        const token = localStorage.getItem('token');
        return token ? { 'Authorization': `Bearer ${token}` } : {};
    };

    const fetchServices = () => {
        fetch('/api/services', { headers: getAuthHeaders() })
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(() => alert('Failed to fetch services'));
    };

    const fetchProducts = () => {
        fetch('/api/products', { headers: getAuthHeaders() })
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(() => alert('Failed to fetch products'));
    };

    const fetchContacts = () => {
        fetch('/api/contact', { headers: getAuthHeaders() })
            .then(res => res.json())
            .then(data => setContacts(data))
            .catch(() => console.error('Failed to fetch messages'));
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
    };

    // Form Handling
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.type !== 'image/png') {
                alert('Only PNG files are allowed');
                e.target.value = ''; // Reset input
                return;
            }
            setFormData(prev => ({ ...prev, image: file }));
        }
    };

    const openModal = (item = null) => {
        setEditingItem(item);
        if (item) {
            // Pre-fill form (handle features/useCases array for products)
            const initialData = { ...item };
            if (activeTab === 'products') {
                initialData.features = Array.isArray(item.features) ? item.features.join('\n') : item.features;
                initialData.useCases = Array.isArray(item.useCases) ? item.useCases.join('\n') : item.useCases;
            }
            setFormData(initialData);
        } else {
            setFormData({});
        }
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingItem(null);
        setFormData({});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();

        // Append all text fields
        Object.keys(formData).forEach(key => {
            if (key !== 'image') {
                let value = formData[key];
                // Convert arrays back to JSON strings for products
                if (activeTab === 'products' && (key === 'features' || key === 'useCases')) {
                    value = JSON.stringify(value.split('\n').filter(line => line.trim() !== ''));
                }
                data.append(key, value);
            }
        });

        // Append image if new one selected
        if (formData.image instanceof File) {
            data.append('image', formData.image);
            // Explicitly set type for backend storage logic
            data.append('type', activeTab === 'services' ? 'service' : 'product');
        }

        const endpoint = activeTab === 'services' ? '/api/services' : '/api/products';
        const method = editingItem ? 'PUT' : 'POST';
        const url = editingItem ? `${endpoint}/${editingItem.id}` : endpoint;

        try {
            const res = await fetch(url, {
                method: method,
                headers: getAuthHeaders(),
                body: data
            });

            if (res.ok) {
                closeModal();
                if (activeTab === 'services') fetchServices();
                else fetchProducts();
            } else if (res.status === 401) {
                handleLogout();
            } else {
                alert('Failed to save');
            }
        } catch (error) {
            console.error(error);
            alert('Error saving data');
        }
    };

    const handleDelete = async (id) => {
        if (!confirm('Are you sure you want to delete this item?')) return;

        let endpoint;
        if (activeTab === 'services') endpoint = `/api/services/${id}`;
        else if (activeTab === 'products') endpoint = `/api/products/${id}`;
        else endpoint = `/api/contact/${id}`;

        try {
            const res = await fetch(endpoint, {
                method: 'DELETE',
                headers: getAuthHeaders()
            });
            if (res.ok) {
                if (activeTab === 'services') fetchServices();
                else if (activeTab === 'products') fetchProducts();
                else fetchContacts();
            } else if (res.status === 401) {
                handleLogout();
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <section className="py-24 bg-gray-50 dark:bg-brand-dark min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center mb-10">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        Admin Dashboard
                    </h1>
                    <div className="flex gap-4">
                        <button
                            onClick={handleLogout}
                            className="px-4 py-2 text-sm font-semibold text-gray-600 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400 transition-colors flex items-center gap-2"
                        >
                            <ArrowRightStartOnRectangleIcon className="w-5 h-5" />
                            Logout
                        </button>
                        {activeTab !== 'messages' && (
                            <button
                                onClick={() => openModal()}
                                className="btn-primary flex items-center gap-2"
                            >
                                <PlusIcon className="w-5 h-5" />
                                Add New
                            </button>
                        )}
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex gap-4 mb-8 border-b border-gray-200 dark:border-gray-700">
                    <button
                        className={`pb-4 px-2 font-semibold ${activeTab === 'services' ? 'text-brand-primary border-b-2 border-brand-primary' : 'text-gray-500'}`}
                        onClick={() => setActiveTab('services')}
                    >
                        Services
                    </button>
                    <button
                        className={`pb-4 px-2 font-semibold ${activeTab === 'products' ? 'text-brand-primary border-b-2 border-brand-primary' : 'text-gray-500'}`}
                        onClick={() => setActiveTab('products')}
                    >
                        Products
                    </button>
                    <button
                        className={`pb-4 px-2 font-semibold ${activeTab === 'messages' ? 'text-brand-primary border-b-2 border-brand-primary' : 'text-gray-500'}`}
                        onClick={() => setActiveTab('messages')}
                    >
                        Messages
                    </button>
                </div>

                {/* Content List */}
                <div className="grid gap-4">
                    {activeTab === 'messages' ? (
                        contacts.length === 0 ? (
                            <p className="text-gray-500 text-center py-8">No messages yet.</p>
                        ) : (
                            contacts.map(msg => {
                                const products = (() => {
                                    try {
                                        return Array.isArray(msg.product) ? msg.product : JSON.parse(msg.product || '[]');
                                    } catch {
                                        return [msg.product].filter(Boolean);
                                    }
                                })();
                                const services = (() => {
                                    try {
                                        return Array.isArray(msg.services) ? msg.services : JSON.parse(msg.services || '[]');
                                    } catch {
                                        return msg.services ? [msg.services] : [];
                                    }
                                })();

                                return (
                                    <div key={msg.id} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h3 className="font-bold text-gray-900 dark:text-gray-100">{msg.name}</h3>
                                                <p className="text-sm text-brand-primary">{msg.email}</p>
                                                <p className="text-xs text-gray-400 mt-1">{new Date(msg.createdAt).toLocaleString()}</p>

                                                <div className="mt-2 text-sm">
                                                    <p><span className="font-semibold text-gray-700 dark:text-gray-300">Product:</span> {products.join(', ')}</p>
                                                    {services.length > 0 && (
                                                        <p><span className="font-semibold text-gray-700 dark:text-gray-300">Services:</span> {services.join(', ')}</p>
                                                    )}
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => handleDelete(msg.id)}
                                                className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                                            >
                                                <TrashIcon className="w-5 h-5" />
                                            </button>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-300 whitespace-pre-wrap">{msg.message}</p>
                                    </div>
                                );
                            })
                        )
                    ) : (
                        (activeTab === 'services' ? services : products).map(item => (
                            <div
                                key={item.id}
                                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm flex items-center justify-between"
                            >
                                <div className="flex items-center gap-4">
                                    <img
                                        src={item.image}
                                        alt={item.title || item.name}
                                        className="w-16 h-16 object-contain bg-gray-50 rounded-lg p-2"
                                    />
                                    <div>
                                        <h3 className="font-bold text-gray-900 dark:text-gray-100">
                                            {item.title || item.name}
                                        </h3>
                                        <p className="text-sm text-gray-500 line-clamp-1">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => openModal(item)}
                                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                                    >
                                        <PencilSquareIcon className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                                    >
                                        <TrashIcon className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 shadow-2xl">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                                    {editingItem ? 'Edit' : 'Add'} {activeTab === 'services' ? 'Service' : 'Product'}
                                </h2>
                                <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                                    <XMarkIcon className="w-6 h-6" />
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Common Fields */}
                                <div>
                                    <label className="block text-sm font-medium mb-1">Image (PNG Only)</label>
                                    <input
                                        type="file"
                                        accept="image/png"
                                        onChange={handleFileChange}
                                        className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-primary/10 file:text-brand-primary hover:file:bg-brand-primary/20"
                                    />
                                    <p className="text-xs text-gray-400 mt-1">
                                        The image must be in PNG format with a transparent background.
                                    </p>
                                    {editingItem && !formData.image && (
                                        <p className="text-xs text-brand-primary mt-1">Current: {editingItem.image}</p>
                                    )}
                                </div>

                                {activeTab === 'services' ? (
                                    <>
                                        <input
                                            name="title"
                                            placeholder="Title"
                                            value={formData.title || ''}
                                            onChange={handleInputChange}
                                            className="w-full p-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
                                            required
                                        />
                                        <textarea
                                            name="description"
                                            placeholder="Description"
                                            value={formData.description || ''}
                                            onChange={handleInputChange}
                                            className="w-full p-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
                                            rows="3"
                                            required
                                        />

                                        <div>
                                            <label className="block text-sm font-medium mb-2">Select Icon</label>
                                            <input
                                                placeholder="Search icons (e.g. cloud, user, code)..."
                                                className="w-full p-2 mb-2 text-sm rounded-lg border dark:bg-gray-700 dark:border-gray-600"
                                                onChange={(e) => {
                                                    // Simple client-side search
                                                    const term = e.target.value.toLowerCase();
                                                    // This will be handled in the render
                                                    setFormData(prev => ({ ...prev, searchTerm: term }));
                                                }}
                                            />
                                            <div className="grid grid-cols-6 gap-2 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg border border-gray-200 dark:border-gray-600 max-h-48 overflow-y-auto">
                                                {Object.keys(HeroIcons)
                                                    .filter(key => key.endsWith('Icon')) // Only actual icons
                                                    .filter(iconName => {
                                                        if (!formData.searchTerm) return true;
                                                        return iconName.toLowerCase().includes(formData.searchTerm);
                                                    })
                                                    .map((iconName) => {
                                                        const Icon = HeroIcons[iconName];
                                                        return (
                                                            <button
                                                                key={iconName}
                                                                type="button"
                                                                onClick={() => setFormData(prev => ({ ...prev, icon: iconName }))}
                                                                className={`p-2 rounded-lg flex items-center justify-center transition-all ${formData.icon === iconName
                                                                    ? 'bg-brand-primary text-white shadow-md'
                                                                    : 'bg-white dark:bg-gray-700 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-600'
                                                                    }`}
                                                                title={iconName}
                                                            >
                                                                <Icon className="w-6 h-6" />
                                                            </button>
                                                        );
                                                    })}
                                            </div>
                                            {formData.icon && (
                                                <p className="text-xs text-gray-500 mt-1">Selected: {formData.icon}</p>
                                            )}
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <input
                                            name="name"
                                            placeholder="Product Name"
                                            value={formData.name || ''}
                                            onChange={handleInputChange}
                                            className="w-full p-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
                                            required
                                        />
                                        <select
                                            name="status"
                                            value={formData.status || 'Coming Soon'}
                                            onChange={handleInputChange}
                                            className="w-full p-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
                                        >
                                            <option>Live</option>
                                            <option>Beta</option>
                                            <option>Coming Soon</option>
                                        </select>
                                        <textarea
                                            name="description"
                                            placeholder="Description"
                                            value={formData.description || ''}
                                            onChange={handleInputChange}
                                            className="w-full p-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
                                            rows="3"
                                            required
                                        />
                                        <textarea
                                            name="features"
                                            placeholder="Features (one per line)"
                                            value={formData.features || ''}
                                            onChange={handleInputChange}
                                            className="w-full p-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
                                            rows="4"
                                        />
                                        <textarea
                                            name="useCases"
                                            placeholder="Use Cases (one per line)"
                                            value={formData.useCases || ''}
                                            onChange={handleInputChange}
                                            className="w-full p-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
                                            rows="3"
                                        />
                                    </>
                                )}

                                <button
                                    type="submit"
                                    className="w-full btn-primary py-3 mt-4"
                                >
                                    {editingItem ? 'Update' : 'Create'}
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
