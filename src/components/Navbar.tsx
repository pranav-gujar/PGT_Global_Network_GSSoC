import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, User, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import AuthModal from '../components/AuthModal';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
       await signOut();
       navigate('/'); // 👈 send user back to home after logout
      } catch (error) {
        console.error('Error signing out:', error);
    }
  };


  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside or scrolling
  useEffect(() => {
    const handleClickOutside = () => {
      setDropdownOpen(false);
      setUserDropdownOpen(false);
    };

    const handleScroll = () => {
      setDropdownOpen(false);
      setUserDropdownOpen(false);
    };

    document.addEventListener('click', handleClickOutside);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Timeline', path: '/timeline' },
    { name: 'Impact', path: '/impact' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  const moreItems = [
    { name: 'FAQ', path: '/faq' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms & Conditions', path: '/terms' },
  ];

  const isActive = (path: string) => {
    if (path === location.pathname) return true;
    // Check if current path is in moreItems
    return moreItems.some(item => item.path === location.pathname && item.path === path);
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-white shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${
          scrolled ? 'h-14' : 'h-16'
        }`}>
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/PGT New Logo Transparent.png" 
                alt="PGT Logo" 
                className={`transition-all duration-300 filter drop-shadow-md ${
                  scrolled ? 'w-8 h-8' : 'w-10 h-10'
                }`}
                style={{
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                }}
              />
              <span className={`font-bold text-gray-900 transition-all duration-300 ${
                scrolled ? 'text-lg' : 'text-xl'
              }`}>
                <span className="hidden sm:inline">PGT Global Network</span>
                <span className="sm:hidden">PGT</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 rounded-md font-medium transition-all duration-200 hover:scale-105 ${
                    scrolled ? 'text-xs' : 'text-sm'
                  } ${
                    isActive(item.path)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* More Dropdown */}
              <div className="relative">
                <button
                  // onClick={() => setDropdownOpen(!dropdownOpen)}
                  onClick={(e) => {
                    e.stopPropagation();
                    setDropdownOpen(!dropdownOpen);
                  }}
                  className={`flex items-center px-3 py-2 rounded-md font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-200 ${
                    scrolled ? 'text-xs' : 'text-sm'
                  }`}
                >
                  More
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200">
                    {moreItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className={`block px-4 py-2 text-sm hover:bg-gray-50 ${isActive(item.path) ? 'text-blue-600 bg-blue-50' : 'text-gray-700'}`}
                        onClick={() => setDropdownOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Auth Section */}
              {user ? (
                <div className="relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setUserDropdownOpen(!userDropdownOpen);
                    }}
                    className={`flex items-center px-3 py-2 rounded-md font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-200 ${
                      scrolled ? 'text-xs' : 'text-sm'
                    }`}
                  >
                    <User className="h-4 w-4 mr-1" />
                    Account
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  
                  {userDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200">
                      <Link
                        to="/dashboard"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        onClick={() => setUserDropdownOpen(false)}
                      >
                        Dashboard
                      </Link>
                      <button
                        onClick={() => {
                          handleLogout();
                          setUserDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center"
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => setShowAuthModal(true)}
                  className={`bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-all duration-200 hover:scale-105 ${
                    scrolled ? 'text-xs' : 'text-sm'
                  }`}
                >
                  Sign In
                </button>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {moreItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium hover:text-blue-600 hover:bg-gray-50 transition-all duration-200 ${isActive(item.path) ? 'text-blue-600 bg-blue-50' : 'text-gray-700'}`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Auth */}
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-200"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  setShowAuthModal(true);
                  setIsOpen(false);
                }}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      )}
      
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
      />
    </nav>
  );
};

export default Navbar;