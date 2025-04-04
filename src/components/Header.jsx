import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

function Header({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  // Throttle function to limit resize event firing
  const throttle = (callback, delay) => {
    let lastCall = 0;
    return function(...args) {
      const now = new Date().getTime();
      if (now - lastCall < delay) {
        return;
      }
      lastCall = now;
      return callback(...args);
    }
  };
  
  const handleResize = useCallback(throttle(() => {
    setWindowWidth(window.innerWidth);
    if (window.innerWidth > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, 100), [menuOpen]);
  
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize, menuOpen]);
  
  // Close menu when clicking outside
  useEffect(() => {
    if (menuOpen) {
      const closeMenu = (e) => {
        if (!e.target.closest('.nav-links') && !e.target.closest('.hamburger')) {
          setMenuOpen(false);
        }
      };
      document.addEventListener('click', closeMenu);
      return () => document.removeEventListener('click', closeMenu);
    }
  }, [menuOpen]);
  
  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (menuOpen && windowWidth <= 768) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen, windowWidth]);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <motion.header 
      className={`header ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 50, damping: 15 }}
    >
      <div className="container navbar">
        <a href="#" className="logo" onClick={() => setMenuOpen(false)}>
          <motion.div 
            className="logo-icon"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            A
          </motion.div>
          {windowWidth > 480 && <span>Agnik Misra</span>}
        </a>
        
        <motion.button 
          className="hamburger" 
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </motion.button>
        
        <motion.ul 
          className={`nav-links ${menuOpen ? 'active' : ''}`}
          animate={menuOpen && windowWidth <= 768 ? { opacity: 1, y: 0 } : {}}
        >
          {['Home', 'About', 'Skills', 'Projects', 'Achievements', 'Contact'].map((item, index) => (
            <motion.li 
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <a 
                href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.header>
  );
}

export default Header;
