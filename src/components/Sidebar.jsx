import React, { useState } from "react";
import { FaHome, FaChartBar, FaUser, FaCog, FaBars, FaSignOutAlt, FaCloud, FaBook } from "react-icons/fa";
import Logo from "../assets/logo.svg";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {/* Navbar for small screens */}
      <div className="md:hidden">
        <div className="bg-white shadow-md flex items-center justify-between px-4 py-3 w-full">
          {/* Logo */}
          <div className="flex items-center">
            <img src={Logo} alt="CodeAnt Labs" className="h-8" />
          </div>

          {/* Hamburger Icon */}
          <button
            className="text-blue-700 text-2xl focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaBars />
          </button>
        </div>

        {/* Collapsible Menu */}
        {isMenuOpen && (
          <div className="bg-white shadow-lg w-full absolute left-0 top-[64px] z-10">
            <ul className="flex flex-col items-start p-4 space-y-3">
              <li className="flex items-center gap-3 p-2 rounded hover:bg-[#1570EF] hover:text-white cursor-pointer w-full">
                <FaHome /> Repositories
              </li>
              <li className="flex items-center gap-3 p-2 rounded hover:bg-blue-700 hover:text-white cursor-pointer w-full">
                <FaChartBar /> AI Code Review
              </li>
              <li className="flex items-center gap-3 p-2 rounded hover:bg-blue-700 hover:text-white cursor-pointer w-full">
                <FaCloud /> Cloud Security
              </li>
              <li className="flex items-center gap-3 p-2 rounded hover:bg-blue-700 hover:text-white cursor-pointer w-full">
                <FaBook /> How to Use
              </li>
              <li className="flex items-center gap-3 p-2 rounded hover:bg-blue-700 hover:text-white cursor-pointer w-full">
                <FaCog /> Settings
              </li>
              <li className="flex items-center gap-3 p-2 rounded hover:bg-blue-700 hover:text-white cursor-pointer w-full">
                <FaSignOutAlt /> Logout
              </li>
            </ul>
            {/* Close button for menu */}
            <button
              className="text-blue-700 text-2xl focus:outline-none px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              ✕
            </button>
          </div>
        )}
      </div>

      {/* Sidebar for large screens */}
      <div className="hidden h-screen md:flex w-64 bg-white flex-col shadow-lg">
        {/* Logo */}
        <div className="text-2xl font-bold p-4 border-blue-700 mb-3">
          <img src={Logo} alt="CodeAnt Labs" className="h-8" />
        </div>

        {/* Menu */}
        <nav className="flex-1 p-4">
          <ul>
            <li className="flex items-center gap-3 p-2 rounded hover:bg-[#1570EF] hover:text-white cursor-pointer">
              <FaHome /> Repositories
            </li>
            <li className="flex items-center gap-3 p-2 rounded hover:bg-blue-700 hover:text-white cursor-pointer">
              <FaChartBar /> AI Code Review
            </li>
            <li className="flex items-center gap-3 p-2 rounded hover:bg-blue-700 hover:text-white cursor-pointer">
              <FaCloud /> Cloud Security
            </li>
            <li className="flex items-center gap-3 p-2 rounded hover:bg-blue-700 hover:text-white cursor-pointer">
              <FaBook /> How to Use
            </li>
            <li className="flex items-center gap-3 p-2 rounded hover:bg-blue-700 hover:text-white cursor-pointer">
              <FaCog /> Settings
            </li>
            <li className="flex items-center gap-3 p-2 rounded hover:bg-blue-700 hover:text-white cursor-pointer">
              <FaSignOutAlt /> Logout
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
