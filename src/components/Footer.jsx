import { motion } from 'framer-motion';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: "fab fa-github", url: "https://github.com/agnikmisra" },
    { icon: "fab fa-linkedin", url: "https://linkedin.com/in/agnikmisra" },
    { icon: "fab fa-twitter", url: "https://twitter.com/agnikmisra" },
    { icon: "fas fa-envelope", url: "mailto:agnik.misra@example.com" }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <motion.div 
          className="social-links"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {socialLinks.map((link, index) => (
            <motion.a 
              key={index}
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5, backgroundColor: "#5553ff" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <i className={link.icon}></i>
            </motion.a>
          ))}
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          &copy; {currentYear} Agnik Misra. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}

export default Footer;
