import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  return (
    <nav className="bg-white py-4 px-6 sticky top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        </Link>

        {/* Mobile Menu Icon */}
        <button onClick={() => setIsOpen(true)} className="md:hidden text-blue-600 focus:outline-none">
          <Menu size={28} />
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-[17px] font-medium relative">
          <Link to="/" className="hover:text-blue-500 transition">Home</Link>
          <Link to="/scholarship" className="hover:text-blue-500 transition">Scholarship</Link>
          <Link to="/events" className="hover:text-blue-500 transition">Events</Link>
          <Link to="/about" className="hover:text-blue-500 transition">About</Link>
          <Link to="/contact" className="hover:text-blue-500 transition">Contact Us</Link>
           <Link to="/Member" className="hover:text-blue-500 transition">Committee Members</Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="flex items-center hover:text-blue-500 transition">
              Services <ChevronDown size={16} className="ml-1" />
            </button>
            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white border rounded shadow-lg z-20">
                <Link to="/services/live-stream" className="block px-4 py-2 hover:bg-gray-100">Live Stream</Link>
                <Link to="/services/prize-list" className="block px-4 py-2 hover:bg-gray-100">Prize List</Link>
                <Link to="/services/exam-system" className="block px-4 py-2 hover:bg-gray-100">Scholarship Exam System</Link>
                <Link to="/services/qar" className="block px-4 py-2 hover:bg-gray-100">QAR</Link>
                <Link to="/Vision" className="block px-4 py-2 hover:bg-gray-100">Vision & Mission</Link>
                <Link to="/services/raksha-kavach" className="block px-4 py-2 hover:bg-gray-100">KK Raksha Kavach</Link>
                <Link to="/services/membership-card" className="block px-4 py-2 hover:bg-gray-100">KK Membership Card</Link>
              </div>
            )}
          </div>
        </div>

        {/* Desktop Login */}
        <div className="hidden md:block">
          <Link 
            to="/login" 
            className="bg-blue-600 text-white px-8 py-2 rounded-lg hover:bg-blue-700 transition" 
          >
            Login
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-full bg-white transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`} style={{ zIndex: 1000 }}>
        
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)} className="text-blue-600">
            <X size={28} />
          </button>
        </div>

        <div className="flex flex-col space-y-4 px-8 text-[17px] font-medium">
          <Link to="/" className="hover:bg-gray-100 px-4 py-2 rounded" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/scholarship" className="hover:bg-gray-100 px-4 py-2 rounded" onClick={() => setIsOpen(false)}>Scholarship</Link>
          <Link to="/events" className="hover:bg-gray-100 px-4 py-2 rounded" onClick={() => setIsOpen(false)}>Events</Link>
          <Link to="/about" className="hover:bg-gray-100 px-4 py-2 rounded" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" className="hover:bg-gray-100 px-4 py-2 rounded" onClick={() => setIsOpen(false)}>Contact Us</Link>
          <Link to="/Vision" className="hover:bg-gray-100 px-4 py-2 rounded" onClick={() => setIsOpen(false)}>Vision & Mission</Link>
          <Link to="/Member" className="hover:bg-gray-100 px-4 py-2 rounded" onClick={() => setIsOpen(false)}>Committee Members</Link>

          {/* Mobile Services Dropdown */}
          <button
            onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
            className="hover:bg-gray-100 px-4 py-2 rounded flex justify-between items-center"
          >
            Services <ChevronDown size={16} />
          </button>
          {isMobileServicesOpen && (
            <div className="ml-4 space-y-2">
              <Link to="/services/live-stream" className="block px-4 py-1 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Live Stream</Link>
              <Link to="/services/prize-list" className="block px-4 py-1 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Prize List</Link>
              <Link to="/services/exam-system" className="block px-4 py-1 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Scholarship Exam System</Link>
              <Link to="/services/qar" className="block px-4 py-1 hover:bg-gray-100" onClick={() => setIsOpen(false)}>QAR</Link>
              <Link to="/services/raksha-kavach" className="block px-4 py-1 hover:bg-gray-100" onClick={() => setIsOpen(false)}>KK Raksha Kavach</Link>
              <Link to="/services/membership-card" className="block px-4 py-1 hover:bg-gray-100" onClick={() => setIsOpen(false)}>KK Membership Card</Link>
            </div>
          )}

          {/* Login Button Mobile */}
          <Link 
            to="/login" 
            className="bg-blue-600 text-white text-center py-3 px-8 rounded-lg hover:bg-blue-700 transition" 
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
