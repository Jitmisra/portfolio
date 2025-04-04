import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import agnikImage from '../assets/agnik.png'; // Import the profile image

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          About Me
        </motion.h2>
        
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p>
              I'm a <strong>Computer Science & AI student</strong> with a deep passion for web & app development, 
              technology, and problem-solving. I specialize in crafting innovative and scalable 
              solutions that deliver exceptional user experiences.
            </p>
            <p>
              Currently studying at <strong>Newton School of Technology</strong>, I balance my academic pursuits with 
              hands-on project development and participation in hackathons and tech competitions.
            </p>
            <p>
              My journey in tech has led me to co-found <strong>Inculcate</strong>, a knowledge-sharing platform focused on 
              presenting Indian knowledge in an engaging, concise manner. As the Frontend Lead, I built the 
              entire front-end using React Native.
            </p>
            <p>
              I'm constantly exploring new technologies and methodologies to enhance my skills and create 
              meaningful solutions that address real-world challenges.
            </p>
          </motion.div>
          
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.img 
              src={agnikImage}
              alt="About Agnik"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
