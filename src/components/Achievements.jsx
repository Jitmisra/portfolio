import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const achievements = [
    {
      title: "Smart India Hackathon (SIH) - Travel Sutra",
      description: "Qualified for the SIH Intercollege Round with the project Travel Sutra. The project aimed to provide an all-in-one travel solution with AI chatbot assistance, booking system, and travel scam awareness section. Designed the Figma prototype for the website."
    },
    {
      title: "Scratch Hackathon - College's First Hackathon Win",
      description: "Won the first-ever hackathon in college with the innovative project 'Got Earbuds'.",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7256915214338543616/",
      linkText: "Go Earbuds Hackathon"
    },
    {
      title: "Startup - Inculcate (Co-founder & Frontend Lead)",
      description: "Co-founded Inculcate, a knowledge-sharing platform focusing on Indian knowledge. Built the entire front-end using React Native, conducted 15+ interviews for user insights, and presented at Bharat Mandapam to CEOs, journalists, and politicians.",
      links: [
        { url: "https://www.linkedin.com/feed/update/urn:li:activity:7274348272658345984/", text: "Bharat Mandapam" },
        { url: "https://www.linkedin.com/posts/shobhitmathur_rediscoverbharat-startupjourney-inculcate-ugcPost-7273968464816431104-thCx/", text: "VC's Appreciation" },
        { url: "https://www.linkedin.com/feed/update/urn:li:activity:7270663284964372480/", text: "CFO Appreciation" },
        { url: "https://www.linkedin.com/posts/agnikmisra_designthinking-btech-bdes-activity-7267415354207793152-GO2x/", text: "Mentor's Support" },
        { url: "https://inculcate.in/", text: "Website" }
      ]
    },
    {
      title: "React Native Full-Stack App Development",
      description: "Developed three full-stack React Native apps: Quiz App with Firebase Firestore, Weather App with real-time updates, and YouTube Clone with sleek UI design.",
      link: "https://www.linkedin.com/posts/agnikmisra_reactnative-appdevelopment-tailwindcss-activity-7284600913179086849-AATg",
      linkText: "React Native Projects"
    },
    {
      title: "Website Development - Criti AI",
      description: "Built Criti AI, a personalized AI chatbot with features like chat history and context-aware responses using Gemini 2.0 API.",
      links: [
        { url: "https://www.linkedin.com/in/agnikmisra/recent-activity/all/", text: "Project Post" },
        { url: "https://gimini-mu.vercel.app/", text: "Live Website" }
      ]
    },
    {
      title: "Open Source Contributions",
      description: "Active contributor to the Apache Software Foundation with 8+ merged pull requests, including redesigning the Apache KV Rocks Website from scratch in Next.js.",
      links: [
        { url: "https://www.linkedin.com/posts/agnikmisra_opensource-gsoc-apache-activity-7313474785638825985-N9Cy", text: "Open Source Post" },
        { url: "https://github.com/apache/kvrocks-controller/pull/281", text: "Apache PR" }
      ]
    },
    {
      title: "HackTheHunt Competition",
      description: "Placed 3rd in HackTheHunt Hackathon, demonstrating problem-solving skills and technical expertise under time constraints.",
      link: "https://www.linkedin.com/posts/dev-club-nstru_devclubs-society-of-cyber-security-successfully-activity-7291685984788795392--cYr/",
      linkText: "HackTheHunt"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="achievements" className="achievements" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Achievements
        </motion.h2>
        
        <motion.div 
          className="achievements-container"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {achievements.map((achievement, index) => (
            <motion.div 
              className="achievement-card" 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="achievement-title">
                <i className="fas fa-trophy"></i>
                <h3>{achievement.title}</h3>
              </div>
              <p>{achievement.description}</p>
              
              {achievement.link && (
                <div className="achievement-link">
                  <motion.a 
                    href={achievement.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="link-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="fas fa-external-link-alt"></i> {achievement.linkText || "Learn More"}
                  </motion.a>
                </div>
              )}
              
              {achievement.links && (
                <div className="achievement-links">
                  {achievement.links.map((link, i) => (
                    <motion.a 
                      key={i}
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="link-btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className="fas fa-external-link-alt"></i> {link.text}
                    </motion.a>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Achievements;
