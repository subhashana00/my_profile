import { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

// Import project images - kept same as original
import gallerycafe1 from "../../assets/gallerycafe1.png";
import gallerycafe2 from "../../assets/gallerycafe2.png";
import gallerycafe3 from "../../assets/gallerycafe3.png";
import coffee1 from "../../assets/coffee1.jpg";
import coffee2 from "../../assets/coffee2.jpg";
import coffee3 from "../../assets/coffee3.jpg";
import shoeapp1 from "../../assets/shoeapp1.jpg";
import shoeapp2 from "../../assets/shoeapp2.jpg";
import shoeapp3 from "../../assets/shoeapp3.jpg";
import gaming1 from "../../assets/gaming1.jpg";
import gaming2 from "../../assets/gaming2.jpg";
import gaming3 from "../../assets/gaming3.jpg";
import chairs1 from "../../assets/chairs1.jpg";
import chairs2 from "../../assets/chairs2.jpg";
import chairs3 from "../../assets/chairs3.jpg";
import vton1 from "../../assets/vton1.png";
import vton2 from "../../assets/vton2.png";
import vton3 from "../../assets/vton3.png";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const projectsRef = useRef(null);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  // Project data
  const projects = [
    {
      id: 1,
      title: "Virtual Try-On Platform",
      category: "web",
      description:
        "An innovative e-commerce platform featuring virtual try-on technology. Built with MERN stack, this application allows users to visualize clothing items on themselves before purchase, significantly improving the online shopping experience.",
      features: [
        "AI-powered virtual clothing try-on",
        "Secure user authentication & profiles",
        "Responsive product catalog with filtering",
        "Shopping cart & checkout process",
      ],
      images: [vton1, vton2, vton3],
      technologies: ["React", "Node.js", "MongoDB", "Express", "TensorFlow.js"],
      github: "https://github.com/username/virtual-tryon",
      live: "https://virtual-tryon-demo.com",
      featured: true,
    },
    {
      id: 2,
      title: "The Gallery Café",
      category: "web",
      description:
        "A full-featured restaurant website with online table reservations, food ordering, and user registration. The admin panel provides tools for managing menus, reservations, and customer interactions.",
      features: [
        "Table reservation system",
        "Online menu & ordering",
        "Admin dashboard for restaurant management",
        "Customer reviews & feedback",
      ],
      images: [gallerycafe1, gallerycafe2, gallerycafe3],
      technologies: ["ASP.NET MVC", "MSSQL", "Entity Framework", "JavaScript"],
      github: "https://github.com/username/gallery-cafe",
      live: "https://gallery-cafe-demo.com",
      featured: true,
    },
    {
      id: 3,
      title: "Brew Mobile App",
      category: "uiux",
      description:
        "A mobile app UI design for a premium coffee shop chain, focused on creating a seamless ordering experience with elegant visuals and intuitive navigation.",
      features: [
        "User-friendly ordering flow",
        "Loyalty program integration",
        "Store locator with map views",
        "Personalized recommendations",
      ],
      images: [coffee1, coffee2, coffee3],
      technologies: ["Figma", "Adobe Photoshop", "Prototype Testing"],
      github: "https://github.com/username/brew-app-ui",
      live: "https://figma.com/file/brew-app-prototype",
      featured: true,
    },
    {
      id: 4,
      title: "Footwear Hub",
      category: "uiux",
      description:
        "A clean, modern mobile app UI design for a shoe store focusing on product visualization and simplified purchasing process.",
      features: [
        "3D product visualization",
        "Size recommendation tool",
        "Wishlist functionality",
        "Social sharing features",
      ],
      images: [shoeapp1, shoeapp2, shoeapp3],
      technologies: ["Figma", "Adobe Illustrator", "User Testing"],
      github: "https://github.com/username/footwear-hub",
      live: "https://figma.com/file/footwear-prototype",
      featured: false,
    },
    {
      id: 5,
      title: "GameVerse",
      category: "uiux",
      description:
        "A gaming platform UI design with features like user profiles, game library, leaderboards, and social integration for gamers.",
      features: [
        "Game discovery algorithm",
        "Real-time multiplayer lobbies",
        "Achievement tracking",
        "Game statistics visualization",
      ],
      images: [gaming1, gaming2, gaming3],
      technologies: ["Figma", "Adobe XD", "Protopie"],
      github: "https://github.com/username/gameverse",
      live: "https://figma.com/file/gameverse-prototype",
      featured: false,
    },
    {
      id: 6,
      title: "ModernSit",
      category: "uiux",
      description:
        "A minimalist mobile app UI for an e-commerce platform specializing in designer chairs, focusing on product details and visualization.",
      features: [
        "AR furniture visualization",
        "Space measurement tool",
        "Custom color options",
        "Designer biographies",
      ],
      images: [chairs1, chairs2, chairs3],
      technologies: ["Figma", "Adobe Photoshop", "InVision"],
      github: "https://github.com/username/modernsit",
      live: "https://figma.com/file/modernsit-prototype",
      featured: false,
    },
  ];

  // Filter projects
  const getFilteredProjects = () => {
    if (filter === "all") return projects;
    return projects.filter((project) => project.category === filter);
  };

  const filteredProjects = getFilteredProjects();

  // Navigate through projects in mobile view
  const handleNextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredProjects.length);
  };

  const handlePrevProject = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + filteredProjects.length) % filteredProjects.length
    );
  };

  // Handle project selection
  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentSlide(0);
    document.body.style.overflow = "hidden";
  };

  // Close project modal
  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  // Navigation functions for modal
  const handleNext = () => {
    const currentProjectIndex = filteredProjects.findIndex(
      (p) => p.id === selectedProject.id
    );
    const nextIndex = (currentProjectIndex + 1) % filteredProjects.length;
    setSelectedProject(filteredProjects[nextIndex]);
    setCurrentSlide(0);
  };

  const handlePrev = () => {
    const currentProjectIndex = filteredProjects.findIndex(
      (p) => p.id === selectedProject.id
    );
    const prevIndex =
      (currentProjectIndex - 1 + filteredProjects.length) %
      filteredProjects.length;
    setSelectedProject(filteredProjects[prevIndex]);
    setCurrentSlide(0);
  };

  // Handle image navigation
  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % selectedProject.images.length);
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide(
      (prev) =>
        (prev - 1 + selectedProject.images.length) %
        selectedProject.images.length
    );
  };

  // Project Card Component
  const ProjectCard = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef(null);

    return (
      <motion.div
        ref={cardRef}
        className="group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/80 transition-all duration-500"
        initial={fadeInUp.hidden}
        whileInView={fadeInUp.visible}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        whileHover={{
          y: -5,
          boxShadow: "0 10px 30px -10px rgba(2, 12, 27, 0.7)",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => openProject(project)}
      >
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover object-center"
            initial={{ scale: 1 }}
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"
            animate={{ opacity: isHovered ? 0.9 : 0.7 }}
            transition={{ duration: 0.3 }}
          />

          {/* Category Badge */}
          <span className="absolute top-3 right-3 bg-blue-500/80 text-white text-xs px-2 py-1 rounded-full">
            {project.category === "web" ? "Web Development" : "UI/UX Design"}
          </span>

          {/* Featured Badge */}
          {project.featured && (
            <span className="absolute top-3 left-3 bg-purple-500/80 text-white text-xs px-2 py-1 rounded-full">
              Featured
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-5 space-y-3">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>

          <p className="text-gray-400 text-sm line-clamp-2">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.slice(0, 3).map((tech, idx) => (
              <span
                key={idx}
                className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-colors"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs px-2 py-1 rounded-full bg-gray-700/50 text-gray-400">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* View Project Button */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
            animate={{ y: isHovered ? 0 : "100%" }}
            transition={{ duration: 0.3 }}
          >
            <button className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors text-sm font-medium">
              View Project
            </button>
          </motion.div>
        </div>
      </motion.div>
    );
  };

  // Mobile Carousel Navigation Controls
  const MobileNavigation = () => (
    <div className="flex justify-between items-center mt-8 mb-4">
      <button
        onClick={handlePrevProject}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
      >
        <FaChevronLeft size={16} />
      </button>

      <div className="flex items-center">
        <span className="text-blue-400 font-medium">{currentIndex + 1}</span>
        <span className="text-gray-500 mx-1">/</span>
        <span className="text-gray-500">{filteredProjects.length}</span>
      </div>

      <button
        onClick={handleNextProject}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
      >
        <FaChevronRight size={16} />
      </button>
    </div>
  );

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative py-20 bg-gray-900 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(59,130,246,0.05) 50%, rgba(59,130,246,0) 70%)",
          }}
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.1) 0%, rgba(139,92,246,0.05) 50%, rgba(139,92,246,0) 70%)",
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            delay: 5,
          }}
        />

        <svg
          className="absolute bottom-0 left-0 right-0 text-gray-800/30"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,181.3C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        style={{ opacity, y }}
      >
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 mb-3"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            My Portfolio
          </motion.span>

          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Featured Projects
          </motion.h2>

          <motion.p
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Showcasing my work in web development and UI/UX design. Each project
            represents a unique challenge and creative solution.
          </motion.p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.button
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              filter === "all"
                ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                : "bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-gray-300"
            }`}
            onClick={() => {
              setFilter("all");
              setCurrentIndex(0);
            }}
            variants={fadeInUp}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            All Projects
          </motion.button>

          <motion.button
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              filter === "web"
                ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                : "bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-gray-300"
            }`}
            onClick={() => {
              setFilter("web");
              setCurrentIndex(0);
            }}
            variants={fadeInUp}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            Web Development
          </motion.button>

          <motion.button
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              filter === "uiux"
                ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                : "bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-gray-300"
            }`}
            onClick={() => {
              setFilter("uiux");
              setCurrentIndex(0);
            }}
            variants={fadeInUp}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            UI/UX Design
          </motion.button>

          <motion.button
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              filter === "app"
                ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                : "bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-gray-300"
            }`}
            onClick={() => {
              setFilter("app");
              setCurrentIndex(0);
            }}
            variants={fadeInUp}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            Mobile App
          </motion.button>
        </motion.div>

        

        {/* Mobile Navigation (only visible on mobile) */}
        {isMobile && filteredProjects.length > 0 && <MobileNavigation />}

        {/* Project Grid - Different display for mobile and desktop */}
        {filteredProjects.length > 0 ? (
          <motion.div
            ref={projectsRef}
            className={
              isMobile
                ? "w-full"
                : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            }
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {isMobile ? (
              // Mobile view - Only show one project
              <AnimatePresence mode="wait">
                <motion.div
                  key={filteredProjects[currentIndex]?.id || "no-projects"}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard project={filteredProjects[currentIndex]} />
                </motion.div>
              </AnimatePresence>
            ) : (
              // Desktop grid view - Show all projects
              filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))
            )}
          </motion.div>
        ) : (
          // Empty state
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl text-gray-400 mb-4">
              No projects in this category yet
            </h3>
            <button
              onClick={() => {
                setFilter("all");
                setCurrentIndex(0);
              }}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white transition-colors"
            >
              View All Projects
            </button>
          </motion.div>
        )}

        {/* Mobile Navigation (bottom) */}
        {isMobile && filteredProjects.length > 0 && (
          <div className="flex justify-center mt-8">
            {filteredProjects.map((_, idx) => (
              <button
                key={idx}
                className={`w-2 h-2 mx-1 rounded-full transition-all ${
                  idx === currentIndex ? "w-6 bg-blue-500" : "bg-gray-500/50"
                }`}
                onClick={() => setCurrentIndex(idx)}
              />
            ))}
          </div>
        )}
      </motion.div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeProject}
          >
            <motion.div
              className="relative bg-gray-900 rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto no-scrollbar"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-800/50 backdrop-blur-sm text-gray-400 hover:text-white transition-colors"
                onClick={closeProject}
              >
                <FaTimes size={20} />
              </button>

              {/* Image Gallery */}
              <div className="relative h-72 md:h-96 bg-gray-800">
                {/* Main Image */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={selectedProject.images[currentSlide]}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                  </motion.div>
                </AnimatePresence>

                {/* Image Navigation */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4">
                  <button
                    className="p-2 rounded-full bg-gray-800/50 backdrop-blur-sm text-white hover:bg-gray-800 transition-colors"
                    onClick={prevSlide}
                  >
                    <FaChevronLeft size={16} />
                  </button>
                  <button
                    className="p-2 rounded-full bg-gray-800/50 backdrop-blur-sm text-white hover:bg-gray-800 transition-colors"
                    onClick={nextSlide}
                  >
                    <FaChevronRight size={16} />
                  </button>
                </div>

                {/* Image Pagination */}
                <div className="absolute bottom-4 inset-x-0 flex justify-center gap-2">
                  {selectedProject.images.map((_, idx) => (
                    <button
                      key={idx}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === currentSlide
                          ? "w-6 bg-blue-500"
                          : "bg-gray-500/50"
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentSlide(idx);
                      }}
                    />
                  ))}
                </div>

                {/* Category Badge */}
                <span className="absolute top-4 left-4 bg-blue-500/80 text-white text-xs px-3 py-1 rounded-full">
                  {selectedProject.category === "web"
                    ? "Web Development"
                    : "UI/UX Design"}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {selectedProject.title}
                  </h3>

                  {/* Project Links */}
                  <div className="flex gap-3">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-colors"
                    >
                      <FaGithub size={20} />
                    </a>
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-colors"
                    >
                      <FaExternalLinkAlt size={18} />
                    </a>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-gray-400 mb-8 leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Key Features
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-gray-400"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm hover:bg-blue-500/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Navigation */}
                <div className="mt-12 pt-6 border-t border-gray-800 flex justify-between">
                  <button
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    onClick={handlePrev}
                  >
                    <FaChevronLeft size={14} />
                    <span>Previous Project</span>
                  </button>

                  <button
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    onClick={handleNext}
                  >
                    <span>Next Project</span>
                    <FaChevronRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
