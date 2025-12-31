import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!formData.name.trim()) return "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return "Invalid email address";
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
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again.');
    }
  };

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
        <label className="text-sm font-medium">
          Name
        </label>
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
        <label className="text-sm font-medium">
          Email
        </label>
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

      <div>
        <label className="text-sm font-medium">
          Message
        </label>
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
