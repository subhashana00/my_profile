import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaBehance } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="relative border-t border-border py-12 overflow-hidden bg-gray-900 text-white">
      {/* Background effect from TSX design */}
      <div className="absolute w-full h-full inset-0 z-0">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-48 bg-[#9b87f5]/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] to-[#F97316]">
              Prabhath Subhashana
            </h3>
            <p className="text-sm text-gray-400">
              A passionate UI/UX Designer and Frontend Developer with a focus on creating seamless user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] to-[#F97316]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-[#9b87f5] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#9b87f5] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-[#9b87f5] transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-[#9b87f5] transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-[#9b87f5] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] to-[#F97316]">
              Follow Me
            </h3>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/share/1AwpAQesRR/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 text-gray-400 hover:bg-[#3b5998]/20 hover:text-[#3b5998] transition-all"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/PrabhathSu39413"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 text-gray-400 hover:bg-[#1DA1F2]/20 hover:text-[#1DA1F2] transition-all"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/prabhath-subhashana-6b694a20a"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 text-gray-400 hover:bg-[#0277b5]/20 hover:text-[#0277b5] transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/subhashana00"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 text-gray-400 hover:bg-[#333]/20 hover:text-white transition-all"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://behance.net/prabathsubasha"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 text-gray-400 hover:bg-[#1769ff]/20 hover:text-[#1769ff] transition-all"
                aria-label="Behance"
              >
                <FaBehance className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] to-[#F97316]">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <a href="mailto:prabathsubashana18@gmail.com" className="flex items-center hover:text-[#9b87f5] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2 text-[#9b87f5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  prabathsubashana18@gmail.com
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <a href="tel:+94716903566" className="flex items-center hover:text-[#F97316] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2 text-[#F97316]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  +94 71 690 3566
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <a href="https://maps.google.com/?q=Ganemulla,Sri+Lanka" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-[#D946EF] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2 text-[#D946EF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  Ganemulla, Sri Lanka
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Notice - Using the new design style */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 mt-8 border-t border-gray-800">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Prabhath Subhashana. All rights reserved.
          </p>
          <div className="flex space-x-3">
            <a
              href="https://www.facebook.com/share/1AwpAQesRR/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 text-gray-400 hover:bg-[#3b5998]/20 hover:text-[#3b5998] transition-all"
              aria-label="Facebook"
            >
              <FaFacebook className="w-4 h-4" />
            </a>
            <a
              href="https://x.com/PrabhathSu39413"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 text-gray-400 hover:bg-[#1DA1F2]/20 hover:text-[#1DA1F2] transition-all"
              aria-label="Twitter"
            >
              <FaTwitter className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/prabhath-subhashana-6b694a20a"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 text-gray-400 hover:bg-[#0277b5]/20 hover:text-[#0277b5] transition-all"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};