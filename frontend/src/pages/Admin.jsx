import { useState, useEffect } from "react";
import {
    TrashIcon,
    PencilSquareIcon,
    PlusIcon,
    XMarkIcon
} from "@heroicons/react/24/outline";

export default function Admin() {
    const [activeTab, setActiveTab] = useState("services");
    const [services, setServices] = useState([]);
    const [products, setProducts] = useState([]);

    // UI State
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState(null);
    const [formData, setFormData] = useState({});

    // Fetch Data
    useEffect(() => {
        fetchServices();
        fetchProducts();
    }, []);

    const fetchServices = () => {
        fetch('/api/services')
            .then(res => res.json())
            .then(data => setServices(data));
    };

    const fetchProducts = () => {
        fetch('/api/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    };

    // Form Handling
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFormData(prev => ({ ...prev, image: e.target.files[0] }));
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
        }

        const endpoint = activeTab === 'services' ? '/api/services' : '/api/products';
        const method = editingItem ? 'PUT' : 'POST';
        const url = editingItem ? `${endpoint}/${editingItem.id}` : endpoint;

        try {
            const res = await fetch(url, {
                method: method,
                body: data
            });

            if (res.ok) {
                closeModal();
                if (activeTab === 'services') fetchServices();
                else fetchProducts();
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

        const endpoint = activeTab === 'services' ? `/api/services/${id}` : `/api/products/${id}`;

        try {
            await fetch(endpoint, { method: 'DELETE' });
            if (activeTab === 'services') fetchServices();
            else fetchProducts();
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
                    <button
                        onClick={() => openModal()}
                        className="btn-primary flex items-center gap-2"
                    >
                        <PlusIcon className="w-5 h-5" />
                        Add New
                    </button>
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
                </div>

                {/* Content List */}
                <div className="grid gap-4">
                    {(activeTab === 'services' ? services : products).map(item => (
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
                    ))}
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
                                    <label className="block text-sm font-medium mb-1">Image</label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                        className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-primary/10 file:text-brand-primary hover:file:bg-brand-primary/20"
                                    />
                                    {editingItem && !formData.image && (
                                        <p className="text-xs text-gray-400 mt-1">Current: {editingItem.image}</p>
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
                                        <input
                                            name="icon"
                                            placeholder="Icon Name (e.g. CodeBracketIcon)"
                                            value={formData.icon || ''}
                                            onChange={handleInputChange}
                                            className="w-full p-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
                                        />
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
