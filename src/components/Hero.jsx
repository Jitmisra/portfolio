import { motion } from 'framer-motion';
import agnikImage from '../assets/agnik.png'; // Import the profile image

function Hero() {
  return (
    <section className="hero" id="home" style={{ paddingTop: "4rem" }}> {/* Reduced from default 5rem */}
      <div className="container hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ textAlign: 'left' }}  /* Add left alignment */
        >
          <motion.span
            className="hero-badge"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <i className="fas fa-code" style={{ marginRight: '0.5rem' }}></i>
            Developer & AI Student
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Hi, I'm <motion.span
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >Agnik Misra</motion.span>
          </motion.h1>
          
          <motion.h3
            className="hero-sub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Creating digital experiences with code
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            I specialize in web & app development, building innovative solutions with modern technologies.
            Passionate about solving real-world problems through clean, efficient, and scalable code.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            style={{ justifyContent: 'flex-start' }} /* Align buttons to the left */
          >
            <motion.a 
              href="#contact" 
              className="btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
            <motion.a 
              href="#projects" 
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.img 
            src={agnikImage} 
            alt="Agnik Misra"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
