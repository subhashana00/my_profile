import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RevealOnScroll } from "../RevealOnScroll";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaPython,
  FaJava,
  FaDatabase,
  FaMicrosoft,
} from "react-icons/fa";

// Custom hook to detect mobile device
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return isMobile;
};

const SkillCard = ({ skill, index, category }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useIsMobile();
  
  // Define colors based on category
  const colorMap = {
    frontend: '#0EA5E9', // blue
    backend: '#D946EF',  // purple
  };
  
  const color = colorMap[category];
  
  // Define skill proficiency (could be expanded later)
  const proficiency = 5;

  return (
    <motion.div
      className="perspective-800"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        className="relative overflow-hidden rounded-2xl border border-border/30 backdrop-blur-sm bg-background/50 h-full preserve-3d"
        whileHover={{ 
          translateY: -10,
          rotateX: !isMobile ? 5 : 0,
          rotateY: !isMobile ? 5 : 0,
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
          borderColor: color,
          scale: 1.02,
        }}
        transition={{ 
          duration: 0.3, 
          type: "spring", 
          stiffness: 400 
        }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br opacity-20" style={{ 
          backgroundImage: `linear-gradient(to bottom right, ${color}30, transparent)`,
        }} />
        
        {/* Content */}
        <div className="p-5 sm:p-6 relative z-10 flex flex-col h-full">
          <div className="flex justify-between items-start mb-5">
            <motion.div 
              className="p-3 rounded-xl flex items-center justify-center" 
              style={{ backgroundColor: `${color}20` }}
              whileHover={{ 
                scale: 1.1,
                rotate: [0, 5, -5, 0],
                backgroundColor: `${color}30`,
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                style={{ color }}
                animate={{ scale: isHovered ? [1, 1.2, 1] : 1 }}
                transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0, repeatType: "reverse" }}
              >
                <skill.icon className="w-5 h-5" />
              </motion.div>
            </motion.div>
            <motion.span 
              className="inline-block py-1 px-3 text-xs font-medium rounded-full opacity-80"
              style={{ backgroundColor: `${color}20`, color }}
              whileHover={{ scale: 1.05 }}
            >
              {category}
            </motion.span>
          </div>
          
          <h3 className="text-lg font-bold mb-2">{skill.name}</h3>
          
          {/* Proficiency indicator */}
          <div className="mt-auto">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Proficiency</span>
                <span className="text-xs font-medium" style={{ color }}>{proficiency}/5</span>
              </div>
              <div className="h-1.5 w-full bg-secondary/50 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full rounded-full" 
                  style={{ backgroundColor: color }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${proficiency * 20}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                />
              </div>
            </div>
          </div>
          
          {/* Hover overlay */}
          <motion.div 
            className="absolute inset-0 flex items-end justify-center p-6"
            style={{ 
              background: `linear-gradient(to top, ${color}95, transparent)`,
              opacity: 0,
              pointerEvents: 'none'
            }}
            animate={{ 
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-white text-center">
              <skill.icon className="w-8 h-8 mx-auto mb-2" />
              <p className="font-medium mb-1">{skill.name} Expert</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const skillsPerPage = 6;
  
  const frontendSkills = [
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt },
    { name: "JavaScript", icon: FaJs },
    { name: "ReactJS", icon: FaReact },
    { name: "Figma", icon: FaFigma },
  ];
  
  const backendSkills = [
    { name: "Node.js", icon: FaNodeJs },
    { name: "Python", icon: FaPython },
    { name: "Java", icon: FaJava },
    { name: "SQL", icon: FaDatabase },
    { name: ".NET MVC", icon: FaMicrosoft },
  ];
  
  const categories = ['all', 'frontend', 'backend'];
  const isMobile = useIsMobile();

  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return [
        ...frontendSkills.map(skill => ({ ...skill, category: 'frontend' })),
        ...backendSkills.map(skill => ({ ...skill, category: 'backend' }))
      ];
    } else if (activeCategory === 'frontend') {
      return frontendSkills.map(skill => ({ ...skill, category: 'frontend' }));
    } else {
      return backendSkills.map(skill => ({ ...skill, category: 'backend' }));
    }
  };

  const filteredSkills = getFilteredSkills();
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredSkills.length / skillsPerPage);
  const indexOfLastSkill = currentPage * skillsPerPage;
  const indexOfFirstSkill = indexOfLastSkill - skillsPerPage;
  const currentSkills = filteredSkills.slice(indexOfFirstSkill, indexOfLastSkill);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section id="skills" className="relative py-16 md:py-24 overflow-hidden min-h-screen flex items-center justify-center bg-gray-900">
      {/* Dynamic background */}
      <div className="absolute w-full h-full inset-0 z-0">
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl parallax"
          data-speed="0.1"
          animate={{ 
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 15, 
            ease: "easeInOut", 
            repeat: Infinity,
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl parallax"
          data-speed="0.15"
          animate={{ 
            x: [0, -70, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 18, 
            ease: "easeInOut", 
            repeat: Infinity,
            delay: 2,
          }}
        />
      </div>

      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-10 md:mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-primary"></span>
              <motion.span 
                className="py-1 px-3 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400"
                whileHover={{ scale: 1.05 }}
              >
                Skills & Expertise
              </motion.span>
              <span className="h-px w-8 bg-primary"></span>
            </div>
            <motion.h2 
              className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-bg"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Skills
            </motion.h2>
          </motion.div>

          {/* Skill Categories */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 md:mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className={`px-4 sm:px-6 py-2 rounded-full capitalize text-sm font-medium transition-all duration-300 transform perspective-800 ${
                  activeCategory === category 
                    ? 'bg-foreground text-background shadow-lg scale-105' 
                    : 'bg-secondary hover:bg-secondary/80'
                }`}
                onClick={() => {
                  setActiveCategory(category);
                  setCurrentPage(1); // Reset to first page when category changes
                }}
                whileHover={{ 
                  scale: activeCategory === category ? 1.05 : 1.08,
                  rotateX: !isMobile ? 5 : 0,
                  rotateY: !isMobile ? 10 : 0,
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 300
                }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-10">
            {currentSkills.map((skill, index) => (
              <SkillCard key={`${skill.name}-${index}`} skill={skill} index={index} category={skill.category} />
            ))}
          </div>

          {/* Pagination */}
          {filteredSkills.length > skillsPerPage && (
            <div className="flex justify-center items-center gap-2 mt-8">
              <motion.button
                onClick={() => paginate(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-full bg-secondary hover:bg-secondary/80 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Previous
              </motion.button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                <motion.button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    currentPage === number 
                      ? 'bg-primary text-white' 
                      : 'bg-secondary hover:bg-secondary/80'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {number}
                </motion.button>
              ))}
              
              <motion.button
                onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-full bg-secondary hover:bg-secondary/80 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Next
              </motion.button>
            </div>
          )}
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Skills;