import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../../assets/CGL.png"; // Replace with your logo path

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-12 border-t border-blue-500">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Footer Layout */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Left Section: Larger Logo & Description */}
          <div className="flex items-center gap-4">
            <img src={logo} alt="Logo" className="h-24 w-24 object-contain" /> {/* Increased Logo Size */}
            <div>
              <p className="text-gray-600 mt-5 max-w-sm">
                Empowering students through <span className="text-blue-500 font-medium">free education</span> and exclusive scholarships.
              </p>
            </div>
          </div>

          {/* Right Section: Navigation, Contact Info & Socials */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            
            {/* Navigation Links */}
            <div className="flex flex-col gap-4">
              <div className="flex gap-6">
                <Link to="/" className="text-gray-600 hover:text-blue-500 transition-colors">
                  Home
                </Link>
                <Link to="/about" className="text-gray-600 hover:text-blue-500 transition-colors">
                  About
                </Link>
                <Link to="/scholarship" className="text-gray-600 hover:text-blue-500 transition-colors">
                  Scholarships
                </Link>
                <Link to="/contact" className="text-gray-600 hover:text-blue-500 transition-colors">
                  Contact
                </Link>
              </div>

              {/* Contact Info Below Navigation Links */}
              <div className="flex flex-col gap-2 mt-4 text-gray-600 text-sm">
                <div className="flex items-center gap-2">
                  <FaPhone className="text-blue-500" />
                  <span>+91 9123744290</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaEnvelope className="text-blue-500" />
                  <span>padoindia873@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-blue-500" />
                  <span>Kolkata, West Bengal, India, 700125</span>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="group bg-blue-100 rounded-full p-3 transition-transform duration-300 hover:scale-110 hover:bg-blue-500 shadow-lg">
                <FaFacebook className="text-blue-500 group-hover:text-white text-xl" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                className="group bg-blue-100 rounded-full p-3 transition-transform duration-300 hover:scale-110 hover:bg-blue-400 shadow-lg">
                <FaTwitter className="text-blue-400 group-hover:text-white text-xl" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="group bg-blue-100 rounded-full p-3 transition-transform duration-300 hover:scale-110 hover:bg-pink-500 shadow-lg">
                <FaInstagram className="text-pink-500 group-hover:text-white text-xl" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                className="group bg-blue-100 rounded-full p-3 transition-transform duration-300 hover:scale-110 hover:bg-blue-700 shadow-lg">
                <FaLinkedin className="text-blue-700 group-hover:text-white text-xl" />
              </a>
            </div>
            
          </div>
          
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
