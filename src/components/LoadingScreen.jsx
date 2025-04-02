import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LoadingScreen = ({ onComplete }) => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
      onComplete();
    }, 2500);
    
    return () => clearTimeout(timer);
  }, [onComplete]);

  // Particles for the loading animation
  const particles = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    size: Math.random() * 5 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 2 + 1,
    delay: Math.random() * 2,
  }));

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          <div className="relative w-28 h-28">
            {/* Glowing circle background */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{ 
                boxShadow: [
                  '0 0 20px 10px rgba(79, 70, 229, 0.3), 0 0 40px 20px rgba(79, 70, 229, 0.1)',
                  '0 0 30px 15px rgba(147, 51, 234, 0.3), 0 0 60px 25px rgba(147, 51, 234, 0.1)',
                  '0 0 20px 10px rgba(59, 130, 246, 0.3), 0 0 40px 20px rgba(59, 130, 246, 0.1)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Animated circles */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute top-0 left-0 w-full h-full rounded-full border-2"
                style={{ borderColor: i % 2 === 0 ? '#4F46E5' : '#8B5CF6' }}
                initial={{ scale: 0, opacity: 0.8 }}
                animate={{ 
                  scale: [0, 1.8],
                  opacity: [0.8, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeOut"
                }}
              />
            ))}

            {/* Morphing blob */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
              animate={{
                background: [
                  'radial-gradient(circle at 30% 30%, rgba(79, 70, 229, 0.8) 0%, rgba(147, 51, 234, 0.4) 70%)',
                  'radial-gradient(circle at 70% 70%, rgba(59, 130, 246, 0.4) 0%, rgba(147, 51, 234, 0.8) 70%)',
                  'radial-gradient(circle at 30% 70%, rgba(79, 70, 229, 0.8) 0%, rgba(59, 130, 246, 0.4) 70%)',
                  'radial-gradient(circle at 70% 30%, rgba(147, 51, 234, 0.4) 0%, rgba(79, 70, 229, 0.8) 70%)',
                ],
                borderRadius: [
                  '60% 40% 30% 70% / 60% 30% 70% 40%',
                  '30% 60% 70% 40% / 50% 60% 30% 60%',
                  '60% 40% 30% 70% / 60% 30% 70% 40%',
                ],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                filter: 'blur(8px)',
                opacity: 0.7,
              }}
            />

            {/* Floating particles */}
            {particles.map(particle => (
              <motion.div
                key={particle.id}
                className="absolute rounded-full bg-white"
                style={{
                  width: particle.size,
                  height: particle.size,
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  delay: particle.delay,
                  ease: "easeInOut"
                }}
              />
            ))}

            {/* Logo rotation */}
            <motion.div 
              className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
              initial={{ scale: 0, rotate: -30 }}
              animate={{ 
                scale: 1, 
                rotate: 0,
                filter: ['drop-shadow(0 0 12px rgba(79, 70, 229, 0.8))', 'drop-shadow(0 0 12px rgba(147, 51, 234, 0.8))', 'drop-shadow(0 0 12px rgba(59, 130, 246, 0.8))']
              }}
              transition={{ 
                delay: 0.2, 
                duration: 0.8,
                filter: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4F46E5] to-[#8B5CF6] relative">
                <span className="relative z-10">P</span>
                
                {/* Glowing hexagon behind the letter */}
                <svg 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 -z-10" 
                  viewBox="0 0 24 24" 
                  fill="none"
                >
                  <motion.path 
                    d="M12 2L4 6V18L12 22L20 18V6L12 2Z" 
                    stroke="url(#gradientStroke)" 
                    strokeWidth="0.5"
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ 
                      pathLength: 1, 
                      opacity: [0.2, 0.8, 0.2],
                    }}
                    transition={{ 
                      duration: 3, 
                      ease: "easeInOut", 
                      repeat: Infinity,
                      opacity: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                  />
                  <defs>
                    <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4F46E5" />
                      <stop offset="50%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="absolute bottom-12 left-0 right-0 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="text-sm text-muted-foreground flex items-center justify-center">
              <span>Welcome</span>
              <motion.span
                className="inline-flex ml-1 overflow-hidden"
                animate={{ width: [0, 30, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <span className="whitespace-nowrap">...</span>
              </motion.span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;