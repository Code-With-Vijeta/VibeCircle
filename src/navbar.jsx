import React, { useState, useEffect } from "react";
import {
  FiSearch,
  FiMessageSquare,
  FiBell,
  FiUser,
  FiMoon,
  FiSun,
  FiHome,
  FiCompass,
  FiSettings,
  FiMenu,
  FiLogOut,
  FiX, // Close icon
} from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [unreadCount, setUnreadCount] = useState(3); // Example unread count
  const [menuOpen, setMenuOpen] = useState(false); // Toggle for menu

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Function to close the menu when an icon is clicked
  const handleIconClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full px-6 py-4 bg-gradient-to-r from-[#e5c1ea] via-[#d3c6fd] to-[#a796c9] dark:from-[#1e1e2f] dark:via-[#2d2f4a] dark:to-[#3a3c5f] flex items-center justify-between transition-all duration-300">
      {/* Logo */}
      <div className="text-3xl font-bold flex items-center gap-2 text-gray-900 dark:text-white tracking-wide">
        <img className="h-14" src="./images/logo.png" alt="logo" />
      </div>

      {/* Profile Picture and Hamburger Menu */}
      <div className="lg:hidden flex items-center ml-auto space-x-4">
        <div className="w-10 h-10 rounded-full overflow-hidden shadow-md">
          <img
            className="w-full h-full object-cover"
            src="./images/dp.webp"
            alt="profile-pic"
          />
        </div>

        {/* Hamburger Menu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-[#6c5887] dark:text-[#d3c6fd]">
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Popup Menu for Icons */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-gradient-to-r from-[#e5c1ea] via-[#d3c6fd] to-[#a796c9] dark:from-[#1e1e2f] dark:via-[#2d2f4a] dark:to-[#3a3c5f] flex flex-row items-center justify-evenly py-4 mt-2 z-50">
          <Link to="/" onClick={handleIconClick} className="text-[#6c5887] dark:text-[#d3c6fd] text-xl flex items-center justify-center">
            <FiHome className="cursor-pointer hover:text-[#a796c9] dark:hover:text-[#d3c6fd] transition" />
          </Link>

          <Link to="/explore" onClick={handleIconClick} className="text-[#6c5887] dark:text-[#d3c6fd] text-xl flex items-center justify-center">
            <FiCompass className="cursor-pointer hover:text-[#a796c9] dark:hover:text-[#d3c6fd] transition" />
          </Link>

          <Link to="/settings" onClick={handleIconClick} className="text-[#6c5887] dark:text-[#d3c6fd] text-xl flex items-center justify-center">
            <FiSettings className="cursor-pointer hover:text-[#a796c9] dark:hover:text-[#d3c6fd] transition" />
          </Link>

          <Link to="/messages" onClick={handleIconClick} className="relative text-[#6c5887] dark:text-[#d3c6fd] text-xl flex items-center justify-center">
            <FiMessageSquare className="cursor-pointer hover:text-[#a796c9] dark:hover:text-[#d3c6fd] transition" />
            {unreadCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full animate-pulse">
                {unreadCount}
              </span>
            )}
          </Link>

          <Link to="/profile" onClick={handleIconClick} className="text-[#6c5887] dark:text-[#d3c6fd] text-xl flex items-center justify-center">
            <FiUser className="cursor-pointer hover:text-[#a796c9] dark:hover:text-[#d3c6fd] transition" />
          </Link>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => { setDarkMode(!darkMode); handleIconClick(); }}
            className="text-xl p-2 rounded-full bg-[#a796c9] hover:bg-[#909cce] text-white dark:bg-[#484c75] dark:hover:bg-[#5d6393] transition">
            {darkMode ? <FiMoon /> : <FiSun />}
          </button>
        </div>
      )}

      {/* Right Side Icons (Large screens) */}
      <div className="hidden lg:flex items-center gap-6 text-[#6c5887] dark:text-[#c4c8f0] text-xl transition-all duration-300">
        <Link to="/messages" className="hidden md:flex">
          <FiMessageSquare className="cursor-pointer hover:text-[#a796c9] dark:hover:text-[#d3c6fd] transition" />
        </Link>

        <Link to="/notifications" className="relative hidden md:flex">
          <FiBell className="cursor-pointer hover:text-[#a796c9] dark:hover:text-[#d3c6fd] transition" />
          {unreadCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full animate-pulse">
              {unreadCount}
            </span>
          )}
        </Link>

        <Link to="/profile">
          <FiUser className="cursor-pointer hover:text-[#a796c9] dark:hover:text-[#d3c6fd] transition" />
        </Link>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-xl p-2 rounded-full bg-[#a796c9] hover:bg-[#909cce] text-white dark:bg-[#484c75] dark:hover:bg-[#5d6393] transition">
          {darkMode ? <FiMoon /> : <FiSun />}
        </button>

        {/* Log Out Button */}
        <button className="hidden md:flex items-center gap-2 text-sm bg-[#6c5887] hover:bg-[#909cce] dark:bg-[#3b3e5c] dark:hover:bg-[#4c4f70] text-white px-4 py-2 rounded-full transition shadow-md hover:scale-105">
          <FiLogOut className="text-base" />
          Log out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
