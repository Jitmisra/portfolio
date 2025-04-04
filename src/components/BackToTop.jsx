import { motion, AnimatePresence } from 'framer-motion';

function BackToTop({ visible }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          className="back-to-top"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Back to top"
          style={{
            position: 'fixed',
            bottom: 'clamp(1rem, 5vw, 2rem)',
            right: 'clamp(1rem, 5vw, 2rem)',
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            background: 'var(--primary-gradient)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: '99',
            boxShadow: '0 4px 15px rgba(85, 83, 255, 0.3)',
            border: 'none',
            outline: 'none'
          }}
        >
          <i className="fas fa-arrow-up"></i>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default BackToTop;
