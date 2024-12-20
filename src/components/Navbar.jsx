import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { SettingsOutline, PersonOutline, MenuOutline, ChevronDownOutline } from 'react-ionicons';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isPerawatanDropdownOpen, setIsPerawatanDropdownOpen] = useState(false);
  const [isMobilePerawatanDropdownOpen, setIsMobilePerawatanDropdownOpen] = useState(false);

  let dropdownTimeout; // Timeout untuk dropdown Blog/Artikel
  let perawatanTimeout; // Timeout untuk dropdown Perawatan

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsMobileDropdownOpen(false);
    setIsMobilePerawatanDropdownOpen(false);
  };

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  const togglePerawatanDropdown = () => {
    setIsMobilePerawatanDropdownOpen(!isMobilePerawatanDropdownOpen);
  };

  const closeDropdown = () => {
    setIsMobileDropdownOpen(false);
    setIsMobilePerawatanDropdownOpen(false);
  };

  const handleMouseEnterDropdown = () => {
    clearTimeout(dropdownTimeout);
    setIsDropdownOpen(true);
  };

  const handleMouseLeaveDropdown = () => {
    dropdownTimeout = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300); // Delay 300ms
  };

  const handleMouseEnterPerawatan = () => {
    clearTimeout(perawatanTimeout);
    setIsPerawatanDropdownOpen(true);
  };

  const handleMouseLeavePerawatan = () => {
    perawatanTimeout = setTimeout(() => {
      setIsPerawatanDropdownOpen(false);
    }, 300); // Delay 300ms
  };

  return (
    <nav className="bg-[#E7F0DC] shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/beranda">
            <img src={logo} alt="Logo" className="w-25 h-10" />
          </Link>
        </div>

        {/* Navbar links (Desktop) */}
        <div className="flex-grow flex items-center justify-center space-x-6">
          <div className="hidden lg:flex space-x-6">
            <Link to="/beranda" className="block px-4 py-2 text-gray-800 hover:bg-[#C5D9A4] rounded">
              Beranda
            </Link>

            <div className="relative" onMouseEnter={handleMouseEnterDropdown} onMouseLeave={handleMouseLeaveDropdown}>
              <button className="flex items-center px-4 py-2 text-gray-800 hover:bg-[#C5D9A4] rounded cursor-pointer focus:outline-none">
                Blog/Artikel
                <ChevronDownOutline color={'#000000'} height="24px" width="24px" className="ml-2" />
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-60 bg-white shadow-lg rounded-md border z-10">
                  <ul className="py-2">
                    <li>
                      <Link to="/panduan" className="block px-4 py-2 text-gray-800 hover:bg-[#E7F0DC] rounded">
                        Tips Perawatan Tanaman
                      </Link>
                    </li>
                    <li>
                      <Link to="/artikel-penyakit-tanaman" className="block px-4 py-2 text-gray-800 hover:bg-[#E7F0DC] rounded">
                        Artikel Penyakit dan Hama
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div className="relative" onMouseEnter={handleMouseEnterPerawatan} onMouseLeave={handleMouseLeavePerawatan}>
              <button className="flex items-center px-4 py-2 text-gray-800 hover:bg-[#C5D9A4] rounded cursor-pointer focus:outline-none">
                Perawatan
                <ChevronDownOutline color={'#000000'} height="24px" width="24px" className="ml-2" />
              </button>
              {isPerawatanDropdownOpen && (
                <div className="absolute left-0 mt-2 w-60 bg-white shadow-lg rounded-md border z-10">
                  <ul className="py-2">
                    <li>
                      <Link to="/sign-in" className="block px-4 py-2 text-gray-800 hover:bg-[#E7F0DC] rounded">
                        Deteksi Penyakit
                      </Link>
                    </li>
                    <li>
                      <Link to="/sign-in" className="block px-4 py-2 text-gray-800 hover:bg-[#E7F0DC] rounded">
                        History Tanaman
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <Link to="/tentang-kami" className="block px-4 py-2 text-gray-800 hover:bg-[#C5D9A4] rounded">
              Tentang Kami
            </Link>
          </div>
        </div>

        {/* Navbar icons for desktop */}
        <div className="hidden lg:flex items-center space-x-10">
          <Link to="/sign-in" className="text-gray-800">
            <PersonOutline color="#000000" height="24px" width="24px" />
          </Link>
        </div>

        {/* Mobile menu icon */}
        <div className="lg:hidden flex items-center space-x-4">
          <Link to="/sign-in" className="text-gray-800">
            <PersonOutline color="#000000" height="24px" width="24px" />
          </Link>
          <button className="text-gray-800 focus:outline-none" onClick={toggleMenu}>
            <MenuOutline color={'#000000'} height="24px" width="24px" />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#E7F0DC] p-4">
          <ul className="flex flex-col space-y-5">
            <li>
              <Link to="/beranda" className="block px-4 py-2 text-gray-800 hover:bg-[#C5D9A4] rounded">
                Beranda
              </Link>
            </li>
            <li>
              <button onClick={toggleMobileDropdown} className="flex justify-between w-full px-4 py-2 text-gray-800 hover:bg-[#C5D9A4] rounded focus:outline-none">
                Blog/Artikel
                <ChevronDownOutline color={'#000000'} height="24px" width="24px" />
              </button>
              {isMobileDropdownOpen && (
                <ul className="mt-2 space-y-2 ml-4">
                  <li>
                    <Link to="/panduan" className="block px-4 py-2 text-gray-800 hover:bg-[#C5D9A4] rounded" onClick={closeDropdown}>
                      Tips Perawatan Tanaman
                    </Link>
                  </li>
                  <li>
                    <Link to="/artikel-penyakit-tanaman" className="block px-4 py-2 text-gray-800 hover:bg-[#C5D9A4] rounded" onClick={closeDropdown}>
                      Artikel Penyakit dan Hama
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button onClick={togglePerawatanDropdown} className="flex justify-between w-full px-4 py-2 text-gray-800 hover:bg-[#C5D9A4] rounded">
                Perawatan
                <ChevronDownOutline color={'#000000'} height="24px" width="24px" />
              </button>
              {isMobilePerawatanDropdownOpen && (
                <ul className="mt-2 space-y-2 ml-4">
                  <li>
                    <Link to="/sign-in" className="block px-4 py-2 text-gray-800 hover:bg-[#C5D9A4] rounded" onClick={closeDropdown}>
                      Deteksi Penyakit
                    </Link>
                  </li>
                  <li>
                    <Link to="/sign-in" className="block px-4 py-2 text-gray-800 hover:bg-[#C5D9A4] rounded" onClick={closeDropdown}>
                      History Tanaman
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/tentang-kami" className="block px-4 py-2 text-gray-800 hover:bg-[#C5D9A4] rounded">
                Tentang Kami
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
