import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { MapPin, Phone, Mail, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Timeline', path: '/timeline' },
    { name: 'Impact', path: '/impact' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
  ];

  const programLinks = [
    { name: 'D3 Program', path: '/programs#d3' },
    { name: 'VoA Initiative', path: '/programs#voa' },
    { name: 'Seminarix', path: '/programs#seminarix' },
    { name: 'MotivMinds', path: '/programs#motivminds' },
    { name: 'HED Program', path: '/programs#hed' },
  ];

  const supportLinks = [
    { name: 'Careers', path: '/careers' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms & Conditions', path: '/terms' },
  ];

  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/PGT New Logo Transparent.png"
                alt="PGT Logo"
                className="w-10 h-10 filter brightness-0 invert"
                style={{
                  filter: 'brightness(0) invert(1) drop-shadow(0 1px 2px rgba(255,255,255,0.1))'
                }}
              />
              <span className="text-xl font-bold">PGT Global Network</span>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering purpose-driven growth and transformation worldwide.
              Building tomorrow’s leaders, one step at a time.
            </p>

            <div className="flex space-x-3">
              <a
                href="https://www.linkedin.com/company/pgt-global-network/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our LinkedIn page"
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
              >
                <Linkedin className="h-5 w-5" />
              </a>

              <a
                href="https://www.instagram.com/pgt_global_network/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
              >
                <Instagram className="h-5 w-5" />
              </a>

              <a
                href="https://www.youtube.com/@PGTGlobalNetwork"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our YouTube channel"
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick Links">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm inline-block py-1 rounded-sm focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Programs */}
          <nav aria-label="Programs">
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              {programLinks.map((link) => (
                <li key={link.name}>
                  <HashLink
                    smooth
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm inline-block py-1 rounded-sm focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    {link.name}
                  </HashLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Support & Contact */}
          <nav aria-label="Support & Contact">
            <h3 className="text-lg font-semibold mb-4">Support & Contact</h3>
            <ul className="space-y-2 mb-4">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm inline-block py-1 rounded-sm focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Mail className="h-4 w-4 text-gray-400 mt-1" />
                <a
                  href="mailto:office@pgtglobalnetwork.com"
                  className="text-gray-400 text-sm hover:text-white transition-colors break-all focus:outline-none focus:ring-2 focus:ring-white rounded-sm"
                >
                  office@pgtglobalnetwork.com
                </a>
              </div>

              <div className="flex items-start space-x-2">
                <Phone className="h-4 w-4 text-gray-400 mt-1" />
                <a
                  href="tel:+918999902805"
                  className="text-gray-400 text-sm hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded-sm"
                >
                  +91 8999902805
                </a>
              </div>

              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-gray-400 mt-1" />
                <span className="text-gray-400 text-sm">
                  Daryapur, Maharashtra, India
                </span>
              </div>
            </div>
          </nav>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-2">
            <p className="text-gray-400 text-sm">
              © 2026 PGT Global Network. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm md:text-right">
              Designed & Developed with ❤️ by Technical Team.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
