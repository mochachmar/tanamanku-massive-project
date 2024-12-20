import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Make sure this path is correct

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer style={{ backgroundColor: '#F5F5F5' }} className="text-black py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Logo dan Copyright */}
        <div className="flex items-center mb-4 md:mb-0">
          <Link to="/beranda-login">
            <img src={logo} alt="Logo" className="h-10 w-auto mr-3" />
          </Link>
          <span className="text-xl font-semibold"></span>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-sm hidden md:block">TanamanKu ©{currentYear}. All rights reserved.</p>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-4 mb-4 md:mb-0">
          <li>
            <Link to="/beranda-login" className="hover:text-gray-600">
              Beranda
            </Link>
          </li>
          <li>
            <Link to="/panduan-login" className="hover:text-gray-600">
              Blog/Artikel
            </Link>
          </li>
          <li>
            <Link to="/deteksi-penyakit" className="hover:text-gray-600">
              Perawatan
            </Link>
          </li>
          <li>
            <Link to="/tentang-kami-login" className="hover:text-gray-600">
              Tentang Kami
            </Link>
          </li>
        </ul>

        {/* Responsive Copyright Text */}
        <p className="text-sm text-center md:hidden">TanamanKu ©{currentYear}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
