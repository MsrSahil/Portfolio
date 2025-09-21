import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiSend, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const SERVICE_ID = "service_4uuukwe";
    const TEMPLATE_ID = "template_umnsgs9";
    const USER_ID = "CgK6iFhJXjLO5tSZ2";

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
      .then(() => {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        toast.error("Failed to send message. Please try again.");
        console.error("EmailJS Error:", error);
      })
      .finally(() => setIsSending(false));
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const contactInfo = [
    {
      icon: <FiMapPin className="text-3xl text-[#00ADB5]" />,
      title: "Location",
      content: "Bhopal, Madhya Pradesh, India",
      link: null,
    },
    {
      icon: <FiPhone className="text-3xl text-[#00ADB5]" />,
      title: "Phone",
      content: "+91 9532696691",
      link: "tel:+919532696691",
    },
    {
      icon: <FiMail className="text-3xl text-[#00ADB5]" />,
      title: "Email",
      content: "mohammadswahil021@gmail.com",
      link: "mailto:mohammadswahil021@gmail.com",
    },
  ];

  return (
    <section
      id="contact"
      // === GRADIENT DIRECTION CHANGED (br -> bl) ===
      className="relative w-full min-h-screen py-20 px-6 
      bg-gradient-to-bl from-[#1B2025] via-[#222831] to-[#2C313A] 
      overflow-hidden border-t border-[#00ADB5]/20"
    >
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-[#EEEEEE]">
            Get In Touch
          </h1>
          <div className="w-32 h-1 bg-[#00ADB5] rounded-full mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Let's connect and create something amazing together.
          </p>
        </motion.div>

        {/* Info Cards + Form Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Info Cards & Socials */}
          <motion.div 
            variants={container} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            className="space-y-8"
          >
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                variants={item}
                className="flex items-center gap-6"
              >
                <div className="p-4 bg-[#393E46] rounded-xl border border-[#00ADB5]/30 shadow-lg">
                  {info.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#EEEEEE]">{info.title}</h3>
                  {info.link ? (
                    <a href={info.link} className="text-gray-300 hover:text-[#00ADB5] transition-colors">
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-gray-300">{info.content}</p>
                  )}
                </div>
              </motion.div>
            ))}
             {/* Socials */}
             <motion.div variants={item}>
                <h3 className="text-xl font-bold text-[#EEEEEE] mb-4 mt-12">Connect With Me</h3>
                <div className="flex space-x-4">
                    <motion.a whileHover={{ scale: 1.1, y: -2 }} href="https://github.com/MsrSahil" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#393E46] rounded-xl text-white shadow-lg border border-transparent hover:border-[#00ADB5]/50 transition-all">
                        <FaGithub className="text-xl" />
                    </motion.a>
                    <motion.a whileHover={{ scale: 1.1, y: -2 }} href="https://www.linkedin.com/in/swahil-mohd-5543a5259/" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#393E46] rounded-xl text-white shadow-lg border border-transparent hover:border-[#00ADB5]/50 transition-all">
                        <FaLinkedin className="text-xl" />
                    </motion.a>
                </div>
             </motion.div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#393E46]/80 backdrop-blur-sm p-8 rounded-2xl border border-[#00ADB5]/30 shadow-2xl"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-5 py-3 bg-[#222831] border-2 border-transparent rounded-xl 
                           focus:outline-none focus:border-[#00ADB5] text-white placeholder-gray-400 transition-all"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-5 py-3 bg-[#222831] border-2 border-transparent rounded-xl 
                           focus:outline-none focus:border-[#00ADB5] text-white placeholder-gray-400 transition-all"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                className="w-full px-5 py-3 bg-[#222831] border-2 border-transparent rounded-xl 
                           focus:outline-none focus:border-[#00ADB5] text-white placeholder-gray-400 resize-none transition-all"
                required
              ></textarea>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-[#00ADB5] text-[#222831] font-bold py-4 px-8 rounded-xl shadow-lg shadow-[#00ADB5]/30 
                           disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all"
                disabled={isSending}
              >
                {isSending ? "Sending..." : <> <FiSend/> Send Message</>}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;