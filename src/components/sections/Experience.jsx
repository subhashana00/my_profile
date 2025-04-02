import React from 'react';
import { RevealOnScroll } from "../RevealOnScroll";
import { Calendar, MapPin, Briefcase, ArrowRight } from 'lucide-react';
import { socialLinks, resumeLink } from "../../../config";

export const Experience = () => {
  const experiences = [
    {
      period: "Aug 2022 – Dec 2024",
      title: "Pharmacy Regulatory & IT Assistant",
      company: "Pharma Associates",
      location: "Colombo, Sri Lanka",
      description:
        "Assisted the National Medicines Regulatory Authority (NMRA) with drug licensing, approval, and document submission, ensuring compliance with regulations. Supported the Regulatory Department as an IT assistant, streamlining workflows through technical solutions.",
      skills: ["Regulatory Affairs", "IT Support", "Documentation", "Compliance"],
      color: "#9b87f5"
    },
    {
      period: "Jan 2025 – Present",
      title: "UI/UX Designer",
      company: "Fiverr",
      location: "Sri Lanka",
      description:
        "Designed user interfaces and prototypes for web and mobile applications. Conducted user research and usability testing to improve product designs.",
      skills: ["UI Design", "UX Research", "Prototyping", "Usability Testing"],
      color: "#F97316"
    },
    {
      period: "Jan 2025 – Present",
      title: "Frontend Developer Intern",
      company: "StarLit Global",
      location: "Remote, Sri Lanka",
      description:
        "Developed responsive web applications using React, HTML, CSS, and JavaScript. Collaborated with the design team to implement user interfaces and improve user experience.",
      skills: ["React", "HTML", "CSS", "JavaScript"],
      color: "#D946EF"
    },
  ];

  // Convert single description string to array for consistent rendering
  const experiencesWithArrayDesc = experiences.map(exp => ({
    ...exp, 
    description: exp.description.split('. ').filter(sentence => sentence.trim() !== '')
  }));

  return (
    <section id="experience" className="relative py-24 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute w-full h-full inset-0 z-0">
        <div className="absolute top-1/2 left-0 w-1/3 h-1/3 bg-purple-500/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-blue-500/20 rounded-full blur-3xl transform translate-x-1/3 translate-y-1/3 animate-pulse" />
      </div>

      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <span className="inline-block py-1 px-3 mb-4 rounded-full text-xs font-medium bg-blue-500/20 text-blue-500">
              My Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 animate-gradient-bg">
              Professional Experience
            </h2>
            <p className="text-gray-400">
              My career path has equipped me with specialized skills in pharmaceutical regulation, UI/UX design, and frontend development.
            </p>
          </div>

          {/* Mobile View: Column Layout */}
          <div className="block sm:hidden space-y-8">
            {experiencesWithArrayDesc.map((exp, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-blue-500/10 border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ borderLeftColor: exp.color, borderLeftWidth: '4px' }}
              >
                <div className="flex flex-col space-y-4">
                  <div>
                    <h3 className="text-xl font-bold" style={{ color: exp.color }}>{exp.title}</h3>
                    <p className="text-lg font-medium text-gray-300">{exp.company}</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center text-gray-400 mb-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span 
                          className="inline-block w-1.5 h-1.5 rounded-full mt-2 mr-2"
                          style={{ backgroundColor: exp.color }} 
                        />
                        <span className="text-sm text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs rounded-full px-3 py-1 font-medium"
                        style={{ 
                          backgroundColor: `${exp.color}20`,
                          color: exp.color
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View: Timeline Layout */}
          <div className="hidden sm:block max-w-4xl mx-auto">
            <div className="relative">
              {experiencesWithArrayDesc.map((exp, index) => (
                <div key={index} className="relative flex items-start mb-10 last:mb-0">
                  {/* Timeline line */}
                  {index < experiencesWithArrayDesc.length - 1 && (
                    <div className="absolute left-5 top-5 bottom-0 w-0.5 bg-gray-700 z-0" />
                  )}
                  
                  {/* Timeline dot */}
                  <div 
                    className="relative flex items-center justify-center w-10 h-10 rounded-full z-10 mr-6 mt-1 shadow-lg"
                    style={{ backgroundColor: exp.color }}
                  >
                    <Briefcase className="w-5 h-5 text-white" />
                    <div className="absolute inset-0 rounded-full animate-ping" style={{ backgroundColor: exp.color, opacity: 0.3 }}></div>
                  </div>
                  
                  {/* Content */}
                  <div className={`flex-1 rounded-2xl p-6 border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                    index % 2 === 0
                      ? "bg-blue-500/10 border-l-4 border-blue-500"
                      : "bg-purple-500/10 border-r-4 border-purple-500"
                  }`}
                  style={{ borderColor: exp.color }}
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold" style={{ color: exp.color }}>{exp.title}</h3>
                        <p className="text-lg font-medium text-gray-300">{exp.company}</p>
                      </div>
                      <div className="mt-2 md:mt-0 md:text-right">
                        <div className="flex items-center md:justify-end text-gray-400 mb-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <div className="flex items-center md:justify-end text-gray-400">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="mb-4 space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span 
                            className="inline-block w-1.5 h-1.5 rounded-full mt-2 mr-2"
                            style={{ backgroundColor: exp.color }} 
                          />
                          <span className="text-sm text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <span 
                          key={idx} 
                          className="text-xs rounded-full px-3 py-1 font-medium"
                          style={{ 
                            backgroundColor: `${exp.color}20`,
                            color: exp.color
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="mt-10 text-center">
                <a
                  href={resumeLink}
                  download
                  className="group inline-flex items-center gap-2 text-gray-300 hover:text-purple-500 transition-colors duration-300 font-medium"
                >
                  View full resume
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};