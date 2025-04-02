import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { RevealOnScroll } from "../RevealOnScroll";
import { FaLinkedin, FaGithub, FaDribbble, FaBehance, FaFolderOpen } from "react-icons/fa";
import { ArrowRight, Download } from "lucide-react";
import profileImage from "../../assets/profile.png";
import { socialLinks, resumeLink } from "../../../config";

export const Home = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const profileRef = useRef(null);
  const [profileHoverStrength, setProfileHoverStrength] = useState(0);
  const [profilePosition, setProfilePosition] = useState({ x: 0, y: 0 });

  const roles = [
    "UI/UX Designer",
    "Frontend Developer",
    "Web Developer",
    "Software Engineer",
  ];

  useEffect(() => {
    const handleType = () => {
      const currentRole = roles[loopNum % roles.length];
      const updatedText = isDeleting
        ? currentRole.substring(0, text.length - 1)
        : currentRole.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      } else {
        setTypingSpeed(isDeleting ? 75 : 150);
      }
    };

    const timer = setTimeout(() => handleType(), typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, roles, typingSpeed]);

  // Add hover effect handlers for profile image
  useEffect(() => {
    if (!profileRef.current) return;

    const handleMouseMove = (e) => {
      if (!profileRef.current) return;
      const rect = profileRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setProfilePosition({ x, y });
      setProfileHoverStrength(0.5);
    };

    const handleMouseLeave = () => {
      setProfileHoverStrength(0);
      setProfilePosition({ x: 0, y: 0 });
    };

    // Touch handling for mobile devices
    const handleTouchStart = () => {
      setProfileHoverStrength(0.3);
    };

    const handleTouchEnd = () => {
      setTimeout(() => {
        setProfileHoverStrength(0);
        setProfilePosition({ x: 0, y: 0 });
      }, 300);
    };

    const profileEl = profileRef.current;
    profileEl.addEventListener("mousemove", handleMouseMove);
    profileEl.addEventListener("mouseleave", handleMouseLeave);
    profileEl.addEventListener("touchstart", handleTouchStart);
    profileEl.addEventListener("touchend", handleTouchEnd);

    return () => {
      profileEl.removeEventListener("mousemove", handleMouseMove);
      profileEl.removeEventListener("mouseleave", handleMouseLeave);
      profileEl.removeEventListener("touchstart", handleTouchStart);
      profileEl.removeEventListener("touchend", handleTouchEnd);
    };
  }, [profileRef.current]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gray-900 p-4 sm:p-6 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute w-full h-full inset-0 z-0">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-500/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-purple-600/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      <RevealOnScroll>
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between z-10 relative">
          {/* Left Side: Content */}
          <div className="text-center lg:text-left lg:w-1/2 z-10 mb-12 lg:mb-0">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight animate-gradient-bg"
            >
              Hi, I'm Prabhath
              <br />
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-gray-400 font-mono">
                {text}
                <span className="animate-blink">|</span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-400 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0"
            >
              I'm a BSc (Hons) Software Engineering Undergraduate with a passion
              for front-end development and UI/UX design.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <a
                href={resumeLink}
                download="Prabhath_Resume.pdf"
                className="group flex items-center justify-center gap-2 bg-purple-600 text-white py-2 px-4 sm:py-3 sm:px-6 rounded font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:translate-y-0"
              >
                Download Resume
                <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center border border-purple-600/50 text-purple-600 py-2 px-4 sm:py-3 sm:px-6 rounded font-medium transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600/10 hover:shadow-lg active:translate-y-0"
              >
                Contact Me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex space-x-4 justify-center lg:justify-start mt-6 sm:mt-8"
            >
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:border-blue-500 hover:text-blue-500 transition-colors duration-300"
                >
                  <link.icon className="text-xl" />
                </a>
              ))}
              <a 
                href="#projects" 
                className="relative group w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:border-yellow-500 hover:text-yellow-500 transition-colors duration-300" 
                aria-label="View Projects"
              >
                <FaFolderOpen className="text-xl" />
                <span className="absolute top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-purple-600 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                  View Projects
                </span>
              </a>
            </motion.div>
          </div>

          {/* Right Side: Avatar Image with enhanced 3D effects */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div 
              ref={profileRef}
              className="relative perspective-800 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  rotateY: [-5, 5, -5],
                  transition: {
                    rotateY: {
                      repeat: Infinity,
                      duration: 6,
                      ease: "easeInOut",
                    }
                  }
                }}
                transition={{ duration: 0.7, delay: 0.5 }}
                style={{
                  transform: `perspective(1000px) rotateY(${profilePosition.x * 15}deg) rotateX(${-profilePosition.y * 15}deg) translateZ(${profileHoverStrength * 30}px)`,
                  transition: profileHoverStrength > 0.1 ? 'none' : 'transform 0.5s ease-out'
                }}
                className="relative w-full h-full"
              >
                {/* Mobile-only simplified effects */}
                <div className="md:hidden absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 border-b-purple-500 animate-spin-slow"></div>
                <div className="md:hidden absolute inset-2 rounded-full border-4 border-transparent border-l-purple-500 border-r-purple-500 animate-spin-reverse"></div>
                
                {/* Desktop orbit elements */}
                <motion.div 
                  className="hidden md:block absolute inset-0 w-full h-full rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  {[...Array(3)].map((_, i) => (
                    <motion.div 
                      key={i}
                      className="absolute w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                      style={{ 
                        left: `calc(50% + ${Math.cos(Math.PI * 2 / 3 * i) * 120}px)`,
                        top: `calc(50% + ${Math.sin(Math.PI * 2 / 3 * i) * 120}px)`,
                        transform: 'translate(-50%, -50%)'
                      }}
                      animate={{
                        boxShadow: ['0 0 10px rgba(59, 130, 246, 0.8)', '0 0 25px rgba(124, 58, 237, 0.8)', '0 0 10px rgba(59, 130, 246, 0.8)']
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                    />
                  ))}
                </motion.div>
                
                {/* Background glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/40 to-purple-600/40 blur-xl transform-gpu -z-10" 
                  style={{ 
                    transform: `translateZ(-30px) scale(1.1) rotate(${profilePosition.x * 2}deg)`,
                    opacity: 0.7 + profileHoverStrength * 0.3
                  }}
                />
                
                <div className="profile-3d-wrapper w-full h-full mx-auto">
                  <motion.div 
                    className="relative overflow-hidden rounded-full shadow-xl w-full h-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Ring effect */}
                    <motion.div 
                      className="absolute -inset-1 rounded-full z-0"
                      style={{ background: 'conic-gradient(from 0deg, #3b82f6, #9333ea, #3b82f6)' }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    />
                    
                    {/* Animated overlay gradients */}
                    <motion.div
                      className="hidden md:block absolute inset-0 z-10 rounded-full"
                      animate={{ 
                        background: [
                          'linear-gradient(120deg, rgba(59, 130, 246, 0.3) 0%, rgba(124, 58, 237, 0.1) 100%)',
                          'linear-gradient(240deg, rgba(59, 130, 246, 0.1) 0%, rgba(124, 58, 237, 0.3) 100%)',
                          'linear-gradient(360deg, rgba(59, 130, 246, 0.3) 0%, rgba(124, 58, 237, 0.1) 100%)'
                        ]
                      }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      style={{ 
                        opacity: 0.6 + profileHoverStrength * 0.4,
                        mixBlendMode: 'overlay'
                      }}
                    />
                    
                    {/* Border glow effect */}
                    <div className="absolute inset-1 rounded-full border-2 border-purple-500 z-20" style={{ 
                      boxShadow: `0 0 ${30 * profileHoverStrength}px ${8 * profileHoverStrength}px rgba(124, 58, 237, 0.5)`,
                      transition: 'box-shadow 0.2s ease'
                    }} />
                    
                    {/* Image */}
                    <div className="relative rounded-full w-full h-full p-1">
                      <div className="overflow-hidden rounded-full w-full h-full border-4 border-purple-500">
                        <motion.img 
                          src={profileImage} 
                          alt="Prabhath Subhashana" 
                          className="w-full h-full object-cover z-0"
                          loading="lazy"
                          animate={{ scale: [1, 1.03, 1] }}
                          transition={{ 
                            duration: 8, 
                            repeat: Infinity, 
                            ease: "easeInOut"
                          }}
                          style={{ 
                            filter: `brightness(${1 + profileHoverStrength * 0.1}) contrast(${1 + profileHoverStrength * 0.05})` 
                          }}
                        />
                      </div>
                    </div>
                    
                    {/* Floating particles overlay (desktop only) */}
                    <motion.div
                      className="hidden md:block absolute inset-0 z-10 overflow-hidden rounded-full"
                      style={{ 
                        opacity: profileHoverStrength * 0.7
                      }}
                    >
                      {[...Array(20)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-white rounded-full"
                          style={{ 
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            opacity: Math.random() * 0.5 + 0.3
                          }}
                          animate={{
                            y: [0, Math.random() * -30 - 10],
                            x: [0, (Math.random() - 0.5) * 20],
                            opacity: [0.7, 0]
                          }}
                          transition={{
                            duration: Math.random() * 2 + 1,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                            ease: "easeOut"
                          }}
                        />
                      ))}
                    </motion.div>
                  </motion.div>
                  
                  {/* Skill badges around the profile (desktop only) */}
                  {['UI/UX', 'React', 'Design'].map((skill, index) => (
                    <motion.div 
                      key={skill}
                      className="hidden md:block absolute bg-gray-800/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium shadow-lg z-20 text-white"
                      style={{
                        left: `${50 + Math.cos(Math.PI * 2 / 3 * index) * 50}%`,
                        top: `${50 + Math.sin(Math.PI * 2 / 3 * index) * 50}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8, repeat: Infinity, repeatType: "reverse" }}
      >
        <a href="#about" className="text-gray-400 flex flex-col items-center">
          <span className="text-xs sm:text-sm mb-1 sm:mb-2">Scroll down</span>
          <div className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border-2 border-gray-400 flex justify-center pt-1">
            <motion.div
              className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gray-400 rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
};