import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, MapPin, Calendar, Code, Lightbulb, MonitorSmartphone, Palette } from 'lucide-react';
import { RevealOnScroll } from "../RevealOnScroll";
import aboutGif from "../../assets/1709674661110-1.gif"; 

export const About = () => {
  return (
    <section id="about" className="min-h-screen py-24 relative overflow-hidden">
      {/* Background Animation from TSX */}
      <div className="absolute w-full h-full inset-0 z-0">
        <div className="absolute top-1/2 right-0 w-1/3 h-1/3 bg-accent/50 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/2" />
      </div>

      {/* 3D animated floating shapes from TSX */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-[10%] w-32 h-32 bg-[#9b87f5]/10 rounded-xl"
          animate={{ 
            y: [0, -30, 0],
            rotateZ: [0, 10, 0],
            rotateX: [0, 10, 0],
          }}
          transition={{ 
            duration: 8, 
            ease: "easeInOut", 
            repeat: Infinity,
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-[15%] w-40 h-40 bg-[#F97316]/10 rounded-full"
          animate={{ 
            y: [0, 40, 0],
            rotateZ: [0, -15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 10, 
            ease: "easeInOut", 
            repeat: Infinity,
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-[60%] w-24 h-24 bg-[#D946EF]/10 rounded-lg rotate-45"
          animate={{ 
            x: [0, 30, 0],
            rotateZ: [45, 65, 45],
          }}
          transition={{ 
            duration: 12, 
            ease: "easeInOut", 
            repeat: Infinity,
          }}
        />
      </div>

      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section header with TSX styling */}
          <motion.div
            className="text-center max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-200 to-blue-300 bg-clip-text text-transparent animate-gradient-bg text-center">
              About Me
            </h2>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Left Side: GIF (preserved from original) */}
            <motion.div 
              className="w-full lg:w-1/2 flex justify-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative group">
                <img
                  src={aboutGif}
                  alt="About Me GIF"
                  className="w-full max-w-md rounded-2xl shadow-lg transform transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>

            {/* Right Side: Content (preserved from original but with TSX styling) */}
            <motion.div 
              className="w-full lg:w-1/2 space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* About Me Card */}
              <div className="glass rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-[#9b87f5]/50 hover:shadow-[0_4px_20px_rgba(155,135,245,0.2)] transition-all duration-300">
                <h3 className="text-xl font-bold mb-6 relative">
                  About Me
                  <span className="absolute bottom-0 left-0 w-10 h-1 bg-[#9b87f5]"></span>
                </h3>
                <p className="text-muted-foreground">
                  I am a BSc (Hons) Software Engineering Undergraduate with a passion for front-end development and UI/UX design. I am currently pursuing a Higher Diploma in Computing and Software Engineering to enhance my expertise in programming and software development. My goal is to become a proficient full-stack developer while delivering innovative and user-focused solutions.
                </p>
              </div>

              {/* Education Card */}
              <div className="glass rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-[#F97316]/50 hover:shadow-[0_4px_20px_rgba(249,115,22,0.2)] transition-all duration-300">
                <h3 className="text-xl font-bold mb-6 relative">
                  Education
                  <span className="absolute bottom-0 left-0 w-10 h-1 bg-[#F97316]"></span>
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-[#F97316]/10">
                      <Calendar className="w-5 h-5 text-[#F97316]" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">BSc (Hons) Software Engineering</h4>
                      <p className="text-muted-foreground">ICBT Campus (Awarded by Cardiff Metropolitan University) - Expected Completion: Aug 2027</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-[#9b87f5]/10">
                      <Code className="w-5 h-5 text-[#9b87f5]" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Relevant Coursework</h4>
                      <p className="text-muted-foreground">Software Development, Web Development, Database Management, UI/UX Design</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};