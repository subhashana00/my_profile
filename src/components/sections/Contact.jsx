import { useState, useRef } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import contactImage from "../../assets/5124556.jpg"; 
import toast from "react-hot-toast";
import { CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const Contact = () => {
  const formRef = useRef(null);
  const [currentField, setCurrentField] = useState(null);
  const [hoveringPulse, setHoveringPulse] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const SERVICE_ID = "service_o4t2jbe";
  const TEMPLATE_ID = "template_3w9nmqj";
  const PUBLIC_KEY = "JjZ4RiVAm-flMX0_n";

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");

    // Validate form
    const errors = {
      name: !formData.name ? 'Name is required' : '',
      email: !formData.email ? 'Email is required' : !validateEmail(formData.email) ? 'Invalid email format' : '',
      message: !formData.message ? 'Message is required' : '',
    };
    
    setFormErrors(errors);
    
    // If there are any errors, stop submission
    if (errors.name || errors.email || errors.message) {
      return;
    }

    setIsSubmitting(true);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        console.log("Email sent successfully:", result);
        toast.success("Message Sent!", {
          style: {
            background: "#9333ea",
            color: "#fff",
          },
        });
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast.error("Oops! Something went wrong. Please try again.", {
          style: {
            background: "#FF5252",
            color: "#fff",
          },
        });
        setIsSubmitting(false);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-12 sm:py-20 relative overflow-hidden"
      style={{
        backgroundImage: `url(${contactImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Blurred Overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md"></div>

      {/* Dynamic background effects */}
      <div className="absolute w-full h-full inset-0 z-0">
        <motion.div 
          className="absolute w-96 h-96 rounded-full"
          style={{ 
            background: 'radial-gradient(circle, rgba(155, 135, 245, 0.12) 0%, rgba(249, 115, 22, 0.06) 70%, transparent 100%)',
            filter: 'blur(40px)',
            top: '10%',
            right: '5%'
          }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.6, 0.8, 0.6]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute w-80 h-80 rounded-full"
          style={{ 
            background: 'radial-gradient(circle, rgba(249, 115, 22, 0.1) 0%, rgba(155, 135, 245, 0.05) 70%, transparent 100%)',
            filter: 'blur(40px)',
            bottom: '10%',
            left: '5%'
          }}
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-blue-500"></span>
              <span className="py-1 px-3 rounded-full text-xs font-medium bg-blue-500/10 text-blue-500">
                Get In Touch
              </span>
              <span className="h-px w-6 bg-blue-500"></span>
            </div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-bg">
              Contact Me
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            {/* Contact Form with modern design */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div 
                className="relative"
                animate={{ 
                  rotateX: hoveringPulse ? 2 : 0,
                  rotateY: hoveringPulse ? 2 : 0,
                }}
                transition={{ type: "spring", stiffness: 100 }}
                onMouseEnter={() => setHoveringPulse(true)}
                onMouseLeave={() => setHoveringPulse(false)}
              >
                <div 
                  className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-30 blur"
                  style={{ 
                    transformStyle: 'preserve-3d',
                    transform: 'translateZ(-10px)',
                    animation: hoveringPulse ? 'pulse-glow 2s ease-in-out infinite' : 'none'
                  }}
                />
                <form 
                  className="bg-white/5 p-6 sm:p-8 rounded-lg border border-white/10 backdrop-blur-sm relative overflow-hidden"
                  onSubmit={handleSubmit}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 pointer-events-none" />
                  
                  <div className="space-y-6 relative">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="form-group">
                        <label htmlFor="name" className="text-sm font-medium mb-2 flex items-center gap-2 text-white">
                          <span>Name</span>
                          {formData.name && !formErrors.name && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          className={`w-full bg-white/5 border rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 focus:ring-2 focus:ring-blue-500/50 ${
                            formErrors.name ? 'border-red-500' : 'border-white/10'
                          } ${currentField === 'name' ? 'shadow-lg scale-101' : ''}`}
                          placeholder="Name*"
                          onChange={handleChange}
                          onFocus={() => setCurrentField('name')}
                        />
                        {formErrors.name && (
                          <motion.div 
                            className="flex items-center gap-1 mt-1 text-red-500 text-xs"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <AlertCircle className="w-3 h-3" />
                            <span>{formErrors.name}</span>
                          </motion.div>
                        )}
                      </div>
                      <div className="form-group">
                        <label htmlFor="email" className="text-sm font-medium mb-2 flex items-center gap-2 text-white">
                          <span>Email</span>
                          {formData.email && !formErrors.email && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          className={`w-full bg-white/5 border rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 focus:ring-2 focus:ring-blue-500/50 ${
                            formErrors.email ? 'border-red-500' : 'border-white/10'
                          } ${currentField === 'email' ? 'shadow-lg scale-101' : ''}`}
                          placeholder="Email*"
                          onChange={handleChange}
                          onFocus={() => setCurrentField('email')}
                        />
                        {formErrors.email && (
                          <motion.div 
                            className="flex items-center gap-1 mt-1 text-red-500 text-xs"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <AlertCircle className="w-3 h-3" />
                            <span>{formErrors.email}</span>
                          </motion.div>
                        )}
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="message" className="text-sm font-medium mb-2 flex items-center gap-2 text-white">
                        <span>Message</span>
                        {formData.message && !formErrors.message && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        className={`w-full bg-white/5 border rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 focus:ring-2 focus:ring-blue-500/50 ${
                          formErrors.message ? 'border-red-500' : 'border-white/10'
                        } ${currentField === 'message' ? 'shadow-lg scale-101' : ''}`}
                        placeholder="Message*"
                        onChange={handleChange}
                        onFocus={() => setCurrentField('message')}
                      />
                      {formErrors.message && (
                        <motion.div 
                          className="flex items-center gap-1 mt-1 text-red-500 text-xs"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <AlertCircle className="w-3 h-3" />
                          <span>{formErrors.message}</span>
                        </motion.div>
                      )}
                    </div>
                    <div className="form-group flex justify-center">
                      <motion.button 
                        type="submit" 
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg transition relative overflow-hidden group"
                        whileHover={{ scale: 1.01, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}
                        whileTap={{ scale: 0.98 }}
                        disabled={isSubmitting}
                      >
                        <span className="flex items-center justify-center gap-2 relative z-10">
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24">
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                              Sending...
                            </>
                          ) : (
                            <>
                              Submit
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </span>
                        <motion.div 
                          className="absolute inset-0 bg-white/10"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '100%' }}
                          transition={{ duration: 0.6, ease: "easeInOut" }}
                        />
                      </motion.button>
                    </div>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};