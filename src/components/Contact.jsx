import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log(formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 } 
    }
  };

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        
        <div className="contact-container">
          <motion.div 
            className="contact-info"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <h3>Contact Information</h3>
            <p>Feel free to reach out to me. I'm always open to discussing new projects, opportunities, or partnerships.</p>
            
            <div className="contact-methods">
              <motion.div 
                className="contact-method"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <p>agnik.misra@example.com</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="contact-method"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <i className="fas fa-phone"></i>
                <div>
                  <h4>Phone</h4>
                  <p>+91 9641058218</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="contact-method"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>Location</h4>
                  <p>India</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.form 
            className="contact-form" 
            onSubmit={handleSubmit}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { duration: 0.6, delay: 0.2 } 
              }
            }}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <motion.input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                whileFocus={{ boxShadow: "0 0 0 3px rgba(85, 83, 255, 0.3)" }}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <motion.input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                whileFocus={{ boxShadow: "0 0 0 3px rgba(85, 83, 255, 0.3)" }}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <motion.textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                required
                whileFocus={{ boxShadow: "0 0 0 3px rgba(85, 83, 255, 0.3)" }}
              ></motion.textarea>
            </div>
            
            <motion.button 
              type="submit" 
              className="btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
