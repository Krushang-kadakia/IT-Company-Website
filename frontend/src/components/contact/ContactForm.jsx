import { useState, useEffect } from "react";


export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', product: [], services: [] });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMsg, setErrorMsg] = useState('');

  // Data for dropdowns
  const [availableProducts, setAvailableProducts] = useState([]);
  const [availableServices, setAvailableServices] = useState([]);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  // Fetch products and services
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsRes, servicesRes] = await Promise.all([
          fetch('/api/products'),
          fetch('/api/services')
        ]);

        if (productsRes.ok) {
          const products = await productsRes.json();
          setAvailableProducts(products);
        }

        if (servicesRes.ok) {
          const services = await servicesRes.json();
          setAvailableServices(services);
        }
      } catch (err) {
        console.error("Failed to fetch dropdown data", err);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceToggle = (serviceTitle) => {
    setFormData(prev => {
      const currentServices = prev.services;
      if (currentServices.includes(serviceTitle)) {
        return { ...prev, services: currentServices.filter(s => s !== serviceTitle) };
      } else {
        return { ...prev, services: [...currentServices, serviceTitle] };
      }
    });
  };

  const handleProductToggle = (productName) => {
    setFormData(prev => {
      const currentProducts = Array.isArray(prev.product) ? prev.product : [];
      if (currentProducts.includes(productName)) {
        return { ...prev, product: currentProducts.filter(p => p !== productName) };
      } else {
        return { ...prev, product: [...currentProducts, productName] };
      }
    });
  };

  const validate = () => {
    if (!formData.name.trim()) return "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return "Invalid email address";
    if (!formData.product || formData.product.length === 0) return "Please select at least one product";
    if (formData.message.length < 10) return "Message must be at least 10 characters";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validate();
    if (error) {
      setErrorMsg(error);
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '', product: [], services: [] });
        setIsServicesOpen(false);
        setIsProductsOpen(false);
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again.');
    }
  };

  // Close dropdown when clicking outside could be added here, 
  // but simplified for now: toggle on click.

  return (
    <form
      onSubmit={handleSubmit}
      className="
                bg-white dark:bg-brand-dark
                border border-gray-200 dark:border-gray-700
                p-8 rounded-2xl space-y-6
            "
    >
      <h2 className="text-xl font-semibold">
        Send us a message
      </h2>

      {status === 'success' && (
        <div className="bg-green-50 text-green-700 p-3 rounded-lg text-sm">
          Message sent successfully! We'll be in touch.
        </div>
      )}

      {errorMsg && (
        <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
          {errorMsg}
        </div>
      )}

      <div>
        <label className="text-sm font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
          className="
                        mt-2 w-full rounded-lg px-4 py-2
                        border border-gray-300 dark:border-gray-600
                        bg-white dark:bg-brand-dark
                        focus:outline-none focus:ring-2 focus:ring-brand-primary
                    "
        />
      </div>

      <div>
        <label className="text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className="
                        mt-2 w-full rounded-lg px-4 py-2
                        border border-gray-300 dark:border-gray-600
                        bg-white dark:bg-brand-dark
                        focus:outline-none focus:ring-2 focus:ring-brand-primary
                    "
        />
      </div>

      <div className="relative">
        <label className="text-sm font-medium">Product (Required, select at least one)</label>
        <div
          onClick={() => setIsProductsOpen(!isProductsOpen)}
          className="
                        mt-2 w-full rounded-lg px-4 py-2
                        border border-gray-300 dark:border-gray-600
                        bg-white dark:bg-brand-dark
                        focus:outline-none focus:ring-2 focus:ring-brand-primary
                        cursor-pointer flex justify-between items-center
                    "
        >
          <span className={formData.product.length === 0 ? 'text-gray-400' : ''}>
            {formData.product.length === 0
              ? 'Select products...'
              : `${formData.product.length} selected`}
          </span>
          <span className="text-xs">▼</span>
        </div>

        {isProductsOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg max-h-60 overflow-auto">
            {availableProducts.length === 0 ? (
              <div className="p-3 text-sm text-gray-500">No products available</div>
            ) : (
              availableProducts.map(p => (
                <div
                  key={p.id}
                  className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex items-center"
                  onClick={() => handleProductToggle(p.name)}
                >
                  <input
                    type="checkbox"
                    checked={formData.product.includes(p.name)}
                    onChange={() => { }} // Handled by parent div
                    className="mr-2"
                  />
                  <span className="text-sm">{p.name}</span>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      <div className="relative">
        <label className="text-sm font-medium">Services (Optional)</label>
        <div
          onClick={() => setIsServicesOpen(!isServicesOpen)}
          className="
                        mt-2 w-full rounded-lg px-4 py-2
                        border border-gray-300 dark:border-gray-600
                        bg-white dark:bg-brand-dark
                        focus:outline-none focus:ring-2 focus:ring-brand-primary
                        cursor-pointer flex justify-between items-center
                    "
        >
          <span className={formData.services.length === 0 ? 'text-gray-400' : ''}>
            {formData.services.length === 0
              ? 'Select services...'
              : `${formData.services.length} selected`}
          </span>
          <span className="text-xs">▼</span>
        </div>

        {isServicesOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg max-h-60 overflow-auto">
            {availableServices.length === 0 ? (
              <div className="p-3 text-sm text-gray-500">No services available</div>
            ) : (
              availableServices.map(s => (
                <div
                  key={s.id}
                  className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex items-center"
                  onClick={() => handleServiceToggle(s.title)}
                >
                  <input
                    type="checkbox"
                    checked={formData.services.includes(s.title)}
                    onChange={() => { }} // Handled by parent div
                    className="mr-2"
                  />
                  <span className="text-sm">{s.title}</span>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      <div>
        <label className="text-sm font-medium">Message</label>
        <textarea
          rows="4"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us briefly about your project"
          className="
                        mt-2 w-full rounded-lg px-4 py-2
                        border border-gray-300 dark:border-gray-600
                        bg-white dark:bg-brand-dark
                        focus:outline-none focus:ring-2 focus:ring-brand-primary
                    "
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="
                    w-full py-3 rounded-lg font-semibold
                    bg-brand-primary text-white
                    hover:bg-blue-700 transition
                    disabled:opacity-50 disabled:cursor-not-allowed
                "
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
