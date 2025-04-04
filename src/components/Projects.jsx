import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const projects = [
    {
      title: "Inculcate App",
      description: "A knowledge-sharing platform focused on presenting Indian knowledge in an engaging, concise manner.",
      image: "https://via.placeholder.com/600x400",
      tags: ["React Native", "Firebase", "UX/UI"],
      liveLink: "https://inculcate.com",
      codeLink: "#"
    },
    {
      title: "Inculcate Website",
      description: "Redesigned and developed the official Inculcate website with modern UI, responsive design, and seamless user experience.",
      image: "https://via.placeholder.com/600x400",
      tags: ["React", "Responsive Design", "UI/UX", "Frontend"],
      liveLink: "https://inculcate.in/",
      codeLink: "#"
    },
    {
      title: "Criti AI",
      description: "A personalized AI chatbot built using React, Gemini 2.0 API, and Tailwind CSS.",
      image: "https://via.placeholder.com/600x400",
      tags: ["React", "Gemini 2.0 API", "Tailwind CSS", "Figma"],
      liveLink: "https://criti-ai.vercel.app/",
      codeLink: "#"
    },
    {
      title: "Travel Sutra",
      description: "An all-in-one travel solution with AI chatbot, booking system, and travel scam awareness.",
      image: "https://via.placeholder.com/600x400",
      tags: ["Figma", "UX/UI", "AI Integration"],
      liveLink: "#",
      codeLink: "#"
    },
    {
      title: "Quiz App",
      description: "React Native app featuring NCERT & General Knowledge MCQs with dynamic data fetching.",
      image: "https://via.placeholder.com/600x400",
      tags: ["React Native", "Firebase", "Async Storage"],
      liveLink: "#",
      codeLink: "#"
    },
    {
      title: "Weather App",
      description: "Real-time weather updates with 7-day forecast, humidity, wind speed, and search functionality.",
      image: "https://via.placeholder.com/600x400",
      tags: ["React Native", "WeatherAPI", "Tailwind CSS"],
      liveLink: "#",
      codeLink: "#"
    },
    {
      title: "YouTube Clone",
      description: "Frontend UI replication of YouTube with sleek design.",
      image: "https://via.placeholder.com/600x400",
      tags: ["React Native", "Tailwind CSS"],
      liveLink: "#",
      codeLink: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.1 : 0.15,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>
        
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div 
              className="project-card" 
              key={index}
              variants={itemVariants}
              whileHover={!isMobile ? { y: -10 } : {}}
            >
              <motion.div 
                className="project-image"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img src={project.image} alt={project.title} loading="lazy" />
              </motion.div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span className="project-tag" key={i}>{tag}</span>
                  ))}
                </div>
                <p>{project.description}</p>
                <div className="project-links">
                  <motion.a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </motion.a>
                  <motion.a 
                    href={project.codeLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="fab fa-github"></i> View Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
