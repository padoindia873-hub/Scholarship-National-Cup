import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../../assets/logo_w.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHouse, 
  faCalendar, 
  faFileAlt, 
  faUsers, 
  faAddressCard, 
  faEnvelope,
  faEye,
  faCogs,
  faSignInAlt
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 left-0 w-full z-50" style={{ height: '80px' }}>
      <div className="container mx-auto h-full px-6 flex justify-between items-center">

        {/* Logo - Fixed height container with overflow hidden */}
        <Link to="/" className="flex items-center h-full">
          <div className="h-full flex items-center overflow-hidden">
            <img 
              src={logo} 
              alt="Logo" 
              className="object-contain"
              style={{ height: '170px', width: 'auto', maxWidth: 'none' }}
            />
          </div>
        </Link>

        {/* Mobile Menu Icon */}
        <button onClick={() => setIsOpen(true)} className="md:hidden text-white focus:outline-none">
          <Menu size={28} />
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12 text-[17px] font-medium relative">
          <Link to="/" className="group transition flex flex-col items-center text-purple-600 hover:text-[#09b3f7] gap-2">
            <FontAwesomeIcon icon={faHouse} className="text-2xl transition group-hover:text-[#09b3f7]" />
            <span>Home</span>
          </Link>

          <Link to="/events" className="group transition flex flex-col items-center text-purple-600 hover:text-[#09b3f7] gap-2">
            <FontAwesomeIcon icon={faCalendar} className="text-2xl transition group-hover:text-[#09b3f7]" />
            <span>Events</span>
          </Link>

          <Link to="/BuyRoll" className="group transition flex flex-col items-center text-purple-600 hover:text-[#09b3f7] gap-2">
            <FontAwesomeIcon icon={faFileAlt} className="text-2xl transition group-hover:text-[#09b3f7]" />
            <span>Get Exam</span>
          </Link>

          <Link to="/about" className="group transition flex flex-col items-center text-purple-600 hover:text-[#09b3f7] gap-2">
            <FontAwesomeIcon icon={faUsers} className="text-2xl transition group-hover:text-[#09b3f7]" />
            <span>About</span>
          </Link>

          <Link to="/contact" className="group transition flex flex-col items-center text-purple-600 hover:text-[#09b3f7] gap-2">
            <FontAwesomeIcon icon={faEnvelope} className="text-2xl transition group-hover:text-[#09b3f7]" />
            <span>Contact Us</span>
          </Link>

          <Link to="/Member" className="group transition flex flex-col items-center text-purple-600 hover:text-[#09b3f7] gap-2">
            <FontAwesomeIcon icon={faAddressCard} className="text-2xl transition group-hover:text-[#09b3f7]" />
            <span>Committee Members</span>
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative flex flex-col items-center"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-xs text-white bg-green-600 hover:bg-green-700 rounded-lg px-3 py-1.5 transition-all duration-300 group/btn">
              Services <ChevronDown size={16} className="ml-1" />
            </button> 
            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white border rounded shadow-lg z-20">
                <Link to="/SuperAdminLogin" className="block px-4 py-2 hover:bg-gray-100">Super Admin</Link>
                <Link to="/LiveStream" className="block px-4 py-2 hover:bg-gray-100">Live Stream</Link>
                <Link to="/services/prize-list" className="block px-4 py-2 hover:bg-gray-100">Prize List</Link>
                <Link to="/BuyRoll" className="block px-4 py-2 hover:bg-gray-100">Get Exam</Link>
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
            className="bg-purple-600 hover:bg-[#09b3f7] text-white px-8 py-2 rounded-lg transition" 
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
        <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-600 transition-colors">
          <X size={28} />
        </button>
      </div>

        <div className="flex flex-col space-y-4 px-8 text-[17px] font-medium">
          {/* Home with icon */}
          <Link 
            to="/" 
            className="flex items-center gap-3 hover:bg-gray-100 px-4 py-2 rounded transition text-purple-600 hover:text-[#09b3f7]"
            onClick={() => setIsOpen(false)}
          >
            <FontAwesomeIcon icon={faHouse} className="text-xl" />
            <span>Home</span>
          </Link>

          {/* Get Exam with icon */}
          <Link 
            to="/BuyRoll" 
            className="flex items-center gap-3 hover:bg-gray-100 px-4 py-2 rounded transition text-purple-600 hover:text-[#09b3f7]"
            onClick={() => setIsOpen(false)}
          >
            <FontAwesomeIcon icon={faFileAlt} className="text-xl" />
            <span>Get Exam</span>
          </Link>

          {/* Events with icon */}
          <Link 
            to="/events" 
            className="flex items-center gap-3 hover:bg-gray-100 px-4 py-2 rounded transition text-purple-600 hover:text-[#09b3f7]"
            onClick={() => setIsOpen(false)}
          >
            <FontAwesomeIcon icon={faCalendar} className="text-xl" />
            <span>Events</span>
          </Link>

          {/* About with icon */}
          <Link 
            to="/about" 
            className="flex items-center gap-3 hover:bg-gray-100 px-4 py-2 rounded transition text-purple-600 hover:text-[#09b3f7]"
            onClick={() => setIsOpen(false)}
          >
            <FontAwesomeIcon icon={faUsers} className="text-xl" />
            <span>About</span>
          </Link>

          {/* Contact Us with icon */}
          <Link 
            to="/contact" 
            className="flex items-center gap-3 hover:bg-gray-100 px-4 py-2 rounded transition text-purple-600 hover:text-[#09b3f7]"
            onClick={() => setIsOpen(false)}
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
            <span>Contact Us</span>
          </Link>

           
          
          {/* Committee Members with icon */}
          <Link 
            to="/Member" 
            className="flex items-center gap-3 hover:bg-gray-100 px-4 py-2 rounded transition text-purple-600 hover:text-[#09b3f7]"
            onClick={() => setIsOpen(false)}
          >
            <FontAwesomeIcon icon={faAddressCard} className="text-xl" />
            <span>Committee Members</span>
          </Link>

          {/* Mobile Services Dropdown with icon */}
          <button
            onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
            className="flex items-center justify-between w-full px-4 py-3 text-white hover:bg-green/10 transition-colors"
          >
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faCogs} className="text-xl" />
              <span>Services</span>
            </div>
            <ChevronDown size={16} className={`transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isMobileServicesOpen && (
            <div className="ml-8 space-y-2">
              <Link to="/SuperAdminLogin" className="block px-4 py-2 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)}>Super Admin</Link>
              <Link to="/LiveStream" className="block px-4 py-2 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)}>Live Stream</Link>
              <Link to="/services/prize-list" className="block px-4 py-2 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)}>Prize List</Link>
              <Link to="/services/exam-system" className="block px-4 py-2 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)}>Scholarship Exam System</Link>
              <Link to="/services/qar" className="block px-4 py-2 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)}>QAR</Link>
              <Link to="/services/raksha-kavach" className="block px-4 py-2 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)}>KK Raksha Kavach</Link>
              <Link to="/services/membership-card" className="block px-4 py-2 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)}>KK Membership Card</Link>
            </div>
          )}

          {/* Login Button Mobile with icon */}
          <Link 
            to="/login" 
            className="bg-purple-600 hover:bg-[#09b3f7] text-white text-center py-3 px-8 rounded-lg transition flex items-center justify-center gap-2 mt-4" 
            onClick={() => setIsOpen(false)}
          >
            <FontAwesomeIcon icon={faSignInAlt} className="text-xl" />
            <span>Login</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;