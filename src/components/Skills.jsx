import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const skills = [
    { 
      name: "Figma", 
      icon: "fab fa-figma", 
      color: "#F24E1E"  // Figma brand color
    },
    { 
      name: "Python", 
      icon: "fab fa-python", 
      color: "#3776AB"  // Python brand color
    },
    { 
      name: "JavaScript", 
      icon: "fab fa-js-square", 
      color: "#F7DF1E"  // JavaScript brand color
    },
    { 
      name: "Tailwind CSS", 
      icon: "fab fa-css3-alt", 
      color: "#06B6D4",  // Tailwind brand color
      customIcon: true,
      customText: "TW"
    },
    { 
      name: "Next.js", 
      icon: "fab fa-react", 
      color: "#000000",  // Next.js brand color
      customIcon: true,
      customText: "N"
    },
    { 
      name: "React", 
      icon: "fab fa-react", 
      color: "#61DAFB"  // React brand color
    },
    { 
      name: "React Native", 
      icon: "fab fa-react", 
      color: "#61DBFB"  // React Native brand color
    },
    { 
      name: "Node.js", 
      icon: "fab fa-node-js", 
      color: "#339933"  // Node.js brand color
    },
    { 
      name: "Express", 
      icon: "fas fa-server", 
      color: "#000000",  // Express brand color
      customIcon: true,
      customText: "Ex"
    },
    { 
      name: "MongoDB", 
      icon: "fas fa-database", 
      color: "#47A248"  // MongoDB brand color
    },
    { 
      name: "Golang", 
      icon: "fas fa-code", 
      color: "#00ADD8",  // Golang brand color
      customIcon: true,
      customText: "Go"
    },
    { 
      name: "Brain Storm", 
      icon: "fas fa-brain", 
      color: "#FF6B6B"  // Custom color for Brain Storm
    },
    { 
      name: "Build", 
      icon: "fas fa-hammer", 
      color: "#FFA500"  // Custom color for Build
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>
        
        <motion.div 
          className="skills-container"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div 
              className="skill-card" 
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: '0 15px 30px -10px rgba(85, 83, 255, 0.2)'
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15
              }}
            >
              {skill.customIcon ? (
                <motion.div
                  className="custom-skill-icon"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, 10, -10, 0],
                    transition: { duration: 0.5 }
                  }}
                  style={{
                    background: skill.color,
                    color: '#ffffff',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.4rem',
                    fontWeight: 'bold',
                    marginBottom: '1rem'
                  }}
                >
                  {skill.customText}
                </motion.div>
              ) : (
                <motion.i 
                  className={skill.icon}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, 10, -10, 0],
                    transition: { duration: 0.5 }
                  }}
                  style={{
                    fontSize: '2.5rem',
                    marginBottom: '1rem',
                    color: skill.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '50px'
                  }}
                />
              )}
              <h3>{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
