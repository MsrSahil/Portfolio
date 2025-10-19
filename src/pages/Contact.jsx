import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiSend, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    reason: "",
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
        setFormData({ name: "", email: "", phone: "", company: "", website: "", reason: "", message: "" });
      })
      .catch((error) => {
        toast.error("Failed to send message. Please try again.");
        console.error("EmailJS Error:", error);
      })
      .finally(() => setIsSending(false));
  };

  const contactInfo = [
    { icon: <FiMapPin />, title: "Location", content: "Bhopal, MP, India" },
    { icon: <FiPhone />, title: "Phone", content: "+91 9532696691", link: "tel:+919532696691" },
    { icon: <FiMail />, title: "Email", content: "mohammadswahil021@gmail.com", link: "mailto:mohammadswahil021@gmail.com" },
  ];
  
  const socialLinks = [
    { icon: <FaGithub />, link: "https://github.com/MsrSahil", name: "GitHub" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/swahil-mohd-5543a5259/", name: "LinkedIn" },
    { icon: <SiLeetcode />, link: "https://leetcode.com/u/Mohd_Swahil/", name: "LeetCode" },
  ];

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen py-20 px-6 
      bg-gradient-to-bl from-[#1B2025] via-[#222831] to-[#2C313A] 
      overflow-hidden flex flex-col justify-center"
    >
      {/* Background gradient blobs like Hero */}
      <div className="absolute inset-0 z-0" aria-hidden>
        <div className="absolute top-6 left-6 w-40 h-40 sm:w-72 sm:h-72 bg-[#00ADB5]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-6 right-6 w-64 h-64 sm:w-96 sm:h-96 bg-[#EEEEEE]/5 rounded-full blur-3xl animate-pulse animation-delay-3000" />
      </div>
      <div className="max-w-7xl mx-auto z-10 w-full relative">
        <motion.div
          initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-[#EEEEEE] font-heading">Let's Connect</h1>
          <div className="w-32 h-1 bg-[#00ADB5] rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 bg-[#393E46]/80 border border-emerald-500/30 px-4 py-2 rounded-full">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </div>
              <span className="text-sm text-emerald-400 font-semibold">Available for Opportunities</span>
            </div>
            
            <div className="space-y-8 pt-4">
              {contactInfo.map((info, i) => (
                <div key={i} className="flex items-center gap-5">
                  <div className="p-4 bg-[#393E46] rounded-xl border border-[#00ADB5]/30 shadow-lg text-2xl text-[#00ADB5]">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#EEEEEE]">{info.title}</h3>
                    {info.link ? (
                      <a href={info.link} className="text-gray-400 hover:text-[#00ADB5] transition-colors break-all">
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-400">{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* === SOCIAL LINKS ADDED HERE === */}
            <div className="pt-4">
                <h3 className="text-lg font-bold text-[#EEEEEE] mb-4">Find me on</h3>
                <div className="flex space-x-4">
                    {socialLinks.map((item, index) => (
                        <motion.a 
                            key={index}
                            href={item.link} target="_blank" rel="noopener noreferrer" 
                            className="p-3 bg-[#393E46] rounded-xl text-white shadow-lg border border-transparent hover:border-[#00ADB5]/50 transition-all"
                            whileHover={{ scale: 1.1, y: -2 }}
                            title={item.name}
                        >
                            <div className="text-xl">{item.icon}</div>
                        </motion.a>
                    ))}
                </div>
            </div>

          </motion.div>
          
          <div className="lg:col-span-2 relative flex justify-center items-center py-16">
            <motion.div
              className="absolute w-full h-full" style={{ minWidth: '650px', minHeight: '650px' }}
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            >
              {socialLinks.map((item, index) => {
                const angle = (index / socialLinks.length) * 2 * Math.PI;
                const radius = window.innerWidth > 1024 ? 320 : 240;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.a
                    key={index} href={item.link} target="_blank" rel="noopener noreferrer"
                    className="absolute top-1/2 left-1/2 p-4 bg-[#393E46] text-[#EEEEEE] rounded-full shadow-lg border border-[#00ADB5]/30"
                    style={{ x: "-50%", y: "-50%" }}
                    initial={{ x: "-50%", y: "-50%" }}
                    animate={{ x: `calc(-50% + ${x}px)`, y: `calc(-50% + ${y}px)` }}
                    whileHover={{ scale: 1.2, backgroundColor: "#00ADB5", boxShadow: "0px 0px 20px rgba(0, 173, 181, 0.5)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className="text-2xl"
                      animate={{ y: [0, -6, 0] }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.8,
                      }}
                    >
                      {item.icon}
                    </motion.div>
                  </motion.a>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="w-full max-w-lg bg-[#393E46]/80 backdrop-blur-sm p-8 rounded-2xl border border-[#00ADB5]/30 shadow-2xl z-10"
            >
              <h2 className="text-2xl font-bold text-white mb-6 font-heading text-center">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full p-3 bg-[#222831] border-2 border-transparent rounded-xl text-white focus:outline-none focus:border-[#00ADB5] transition-all" placeholder="Your Name*" />
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-3 bg-[#222831] border-2 border-transparent rounded-xl text-white focus:outline-none focus:border-[#00ADB5] transition-all" placeholder="Your Email*" />
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-3 bg-[#222831] border-2 border-transparent rounded-xl text-white focus:outline-none focus:border-[#00ADB5] transition-all" placeholder="Phone" />
                  <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full p-3 bg-[#222831] border-2 border-transparent rounded-xl text-white focus:outline-none focus:border-[#00ADB5] transition-all" placeholder="Company" />
                  <input type="text" name="website" value={formData.website} onChange={handleChange} className="w-full p-3 bg-[#222831] border-2 border-transparent rounded-xl text-white focus:outline-none focus:border-[#00ADB5] transition-all" placeholder="Website" />
                  <select name="reason" value={formData.reason} onChange={handleChange} required className="w-full p-3 bg-[#222831] border-2 border-transparent rounded-xl text-white focus:outline-none focus:border-[#00ADB5] transition-all">
                    <option value="" disabled>Reason for Contact*</option>
                    <option value="Project Inquiry">Project Inquiry</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="Job Offer">Job Offer</option>
                    <option value="Freelance Work">Freelance Work</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows="5" className="w-full p-3 bg-[#222831] border-2 border-transparent rounded-xl text-white focus:outline-none focus:border-[#00ADB5] resize-none transition-all" placeholder="Your Message*"></textarea>
                </div>
                <motion.button
                  type="submit" whileHover={{ scale: 1.05, y: -2, boxShadow: "0px 10px 20px rgba(0, 173, 181, 0.3)" }} whileTap={{ scale: 0.95 }}
                  className="w-full bg-[#00ADB5] text-[#222831] font-bold py-3 px-8 rounded-xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all"
                  disabled={isSending}
                >
                  {isSending ? "Sending..." : <> <FiSend/> Send Message</>}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;