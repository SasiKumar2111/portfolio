import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          // Replace this string with the key emailed to you
          access_key: '3ba1d686-cd7c-4be6-83c8-810cc11a835c', 
          name: formState.name,
          email: formState.email,
          message: formState.message,
          subject: 'New Portfolio Transmission from ' + formState.name,
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' }); // Clear the form on success
      } else {
        console.error('Transmission failed:', result);
        setStatus('idle'); // Revert UI so they can try again
      }
    } catch (error) {
      console.error('Network Error:', error);
      setStatus('idle');
    } finally {
      // Revert the success message back to the default button state after 3 seconds
      setTimeout(() => {
        setStatus((current) => current === 'success' ? 'idle' : current);
      }, 3000);
    }
  };

  return (
    <section className="py-32 border-t border-gray-900" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Column: Direct Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8">
          <div>
            <h3 className="text-3xl font-bold mb-4 flex items-center gap-4">
              Initialize Connection
            </h3>
            <p className="text-gray-400 max-w-md leading-relaxed">
              Whether you are looking to architect scalable AI solutions,
              integrate LLMs, or build high-performance web applications, my
              inbox is always open.
            </p>
          </div>

          <div className="space-y-6">
            <div className="group">
              <p className="text-sm font-mono text-gray-500 mb-1">Email</p>
              <a
                href="mailto:sasishankar2001@gmail.com"
                className="text-xl text-white group-hover:text-cyan-400 transition-colors">
                sasishankar2001@gmail.com {/**/}
              </a>
            </div>

            <div className="group">
              <p className="text-sm font-mono text-gray-500 mb-1">Phone</p>
              <a
                href="tel:+917358381196"
                className="text-xl text-white group-hover:text-cyan-400 transition-colors">
                +91-7358381196 {/**/}
              </a>
            </div>

            <div className="group">
              <p className="text-sm font-mono text-gray-500 mb-1">Location</p>
              <p className="text-xl text-white">Chennai - 600042 {/**/}</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-gray-900/30 p-8 rounded-3xl border border-gray-800 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-mono text-gray-400 block">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                className="w-full bg-black/50 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-mono text-gray-400 block">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                className="w-full bg-black/50 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-mono text-gray-400 block">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                className="w-full bg-black/50 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status !== "idle"}
              className="w-full h-14 bg-white text-black font-semibold rounded-lg relative flex justify-center items-center overflow-hidden transition-colors disabled:opacity-80 disabled:cursor-wait">
              <AnimatePresence mode="wait">
                {status === "idle" && (
                  <motion.span
                    key="idle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="hover:text-cyan-600 transition-colors">
                    Send Message
                  </motion.span>
                )}

                {status === "submitting" && (
                  <motion.span
                    key="loading"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="flex items-center gap-2 text-gray-600">
                    <svg
                      className="animate-spin h-5 w-5 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Transmitting...
                  </motion.span>
                )}

                {status === "success" && (
                  <motion.span
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="text-green-600 flex items-center gap-2">
                    ✓ Message Delivered
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
