import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, User, LogOut, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import AuthModal from '../components/AuthModal';


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const moreDropdownRef = useRef<HTMLDivElement>(null);
  const userDropdownRef = useRef<HTMLDivElement>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
       await signOut();
       navigate('/');
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

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setDropdownOpen(false);
    setUserDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (moreDropdownRef.current && !moreDropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
      if (userDropdownRef.current && !userDropdownRef.current.contains(e.target as Node)) {
        setUserDropdownOpen(false);
      }
    };
    const handleScroll = () => {
      setDropdownOpen(false);
      setUserDropdownOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
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
    return moreItems.some(item => item.path === location.pathname && item.path === path);
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-gray-100 dark:border-slate-700'
        : 'bg-white dark:bg-slate-900 shadow-lg'
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
                style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
              />
              <span className={`font-bold text-gray-900 dark:text-white transition-all duration-300 ${
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
                      ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/40 dark:text-blue-400'
                      : 'text-gray-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-slate-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* More Dropdown */}
              <div className="relative" ref={moreDropdownRef}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setDropdownOpen(!dropdownOpen);
                  }}
                  className={`flex items-center px-3 py-2 rounded-md font-medium
                    text-gray-700 dark:text-slate-300
                    hover:text-blue-600 dark:hover:text-blue-400
                    hover:bg-gray-50 dark:hover:bg-slate-700
                    transition-all duration-200 ${scrolled ? 'text-xs' : 'text-sm'}`}
                >
                  More
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-md shadow-lg border border-gray-200 dark:border-slate-700">
                    {moreItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className={`block px-4 py-2 text-sm
                          hover:bg-gray-50 dark:hover:bg-slate-700
                          ${isActive(item.path)
                            ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/40'
                            : 'text-gray-700 dark:text-slate-300'
                          }`}
                        onClick={() => setDropdownOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Dark Mode Toggle — Desktop */}
              <button
                onClick={toggleTheme}
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                className={`flex items-center justify-center w-9 h-9 rounded-md
                  text-gray-600 dark:text-slate-300
                  hover:bg-gray-100 dark:hover:bg-slate-700
                  transition-all duration-200 ${scrolled ? 'text-xs' : 'text-sm'}`}
              >
                {isDark
                  ? <Sun className="h-5 w-5 text-yellow-400" />
                  : <Moon className="h-5 w-5 text-slate-600" />
                }
              </button>

              {/* Auth Section */}
              {user ? (
                <div className="relative" ref={userDropdownRef}>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setUserDropdownOpen(!userDropdownOpen);
                    }}
                    className={`flex items-center px-3 py-2 rounded-md font-medium
                      text-gray-700 dark:text-slate-300
                      hover:text-blue-600 dark:hover:text-blue-400
                      hover:bg-gray-50 dark:hover:bg-slate-700
                      transition-all duration-200 ${scrolled ? 'text-xs' : 'text-sm'}`}
                  >
                    <User className="h-4 w-4 mr-1" />
                    Account
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${userDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {userDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-md shadow-lg border border-gray-200 dark:border-slate-700">
                      <Link
                        to="/dashboard"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-700"
                        onClick={() => setUserDropdownOpen(false)}
                      >
                        Dashboard
                      </Link>
                      <button
                        onClick={() => {
                          handleLogout();
                          setUserDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-700 flex items-center"
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
                  className={`bg-blue-600 text-white px-4 py-2 rounded-md font-medium
                    hover:bg-blue-700 transition-all duration-200 hover:scale-105
                    ${scrolled ? 'text-xs' : 'text-sm'}`}
                >
                  Sign In
                </button>
              )}
            </div>
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div className="lg:hidden flex items-center gap-1">
            <button
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="inline-flex items-center justify-center p-2 min-h-[44px] min-w-[44px] rounded-md
                text-gray-700 dark:text-slate-300
                hover:bg-gray-100 dark:hover:bg-slate-700
                transition-colors duration-200"
            >
              {isDark
                ? <Sun className="h-5 w-5 text-yellow-400" />
                : <Moon className="h-5 w-5 text-slate-600" />
              }
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="inline-flex items-center justify-center p-2 min-h-[44px] min-w-[44px] rounded-md
                text-gray-700 dark:text-slate-300
                hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-slate-700
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                transition-colors duration-200"
            >
              <span className="sr-only">
                {isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              </span>
              {isMobileMenuOpen
                ? <X className="h-6 w-6" aria-hidden="true" />
                : <Menu className="h-6 w-6" aria-hidden="true" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-menu"
        role="navigation"
        aria-label="Mobile navigation"
        className={`lg:hidden overflow-y-auto transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'max-h-[calc(100vh-4rem)] opacity-100'
            : 'max-h-0 opacity-0 pointer-events-none'
        }`}
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3
          bg-white/95 dark:bg-slate-900/95
          backdrop-blur-md border-t border-gray-100 dark:border-slate-700 shadow-lg">

          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 min-h-[44px] ${
                isActive(item.path)
                  ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/40 dark:text-blue-400'
                  : 'text-gray-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-slate-700'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <div className="border-t border-gray-100 dark:border-slate-700 my-2" />

          {moreItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 min-h-[44px] ${
                isActive(item.path)
                  ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/40 dark:text-blue-400'
                  : 'text-gray-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-slate-700'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <div className="border-t border-gray-100 dark:border-slate-700 my-2" />

          {/* Mobile Auth */}
          {user ? (
            <>
              <Link
                to="/dashboard"
                className="flex items-center px-4 py-3 rounded-lg text-base font-medium
                  text-gray-700 dark:text-slate-300
                  hover:text-blue-600 dark:hover:text-blue-400
                  hover:bg-gray-50 dark:hover:bg-slate-700
                  transition-all duration-200 min-h-[44px]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setIsMobileMenuOpen(false);
                }}
                className="flex w-full items-center text-left px-4 py-3 rounded-lg text-base font-medium
                  text-gray-700 dark:text-slate-300
                  hover:text-red-600 dark:hover:text-red-400
                  hover:bg-red-50 dark:hover:bg-red-900/20
                  active:bg-red-100 dark:active:bg-red-900/30
                  transition-all duration-200 min-h-[44px]"
              >
                Sign Out
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                setShowAuthModal(true);
                setIsMobileMenuOpen(false);
              }}
              className="flex w-full items-center justify-center px-4 py-3 rounded-lg text-base font-medium
                bg-blue-600 text-white hover:bg-blue-700
                transition-all duration-200 min-h-[44px] mt-2"
            >
              Sign In
            </button>
          )}
        </div>
      </div>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </nav>
  );
};

export default Navbar;