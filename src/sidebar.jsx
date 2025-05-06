import React from "react";
import {
  FiHome,
  FiCompass,
  FiMessageSquare,
  FiUser,
  FiSettings,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 fixed top-[72px] bottom-0 bg-gradient-to-b from-[#e5c1ea] via-[#d3c6fd] to-[#a796c9] dark:from-[#1e1e2f] dark:via-[#2d2f4a] dark:to-[#3a3c5f] px-6 py-8 flex flex-col justify-between transition-all duration-300">
      {/* Navigation Links */}
      <div className="flex flex-col gap-6 text-xl text-[#6c5887] dark:text-gray-300">
        <Link
          to="/"
          className="flex items-center gap-4 cursor-pointer px-2 py-1 rounded-md hover:bg-white/30 dark:hover:bg-white/10 hover:text-black dark:hover:text-white transition-all duration-200"
        >
          <FiHome />
          <span>Home</span>
        </Link>

        <Link
          to="/explore"
          className="flex items-center gap-4 cursor-pointer px-2 py-1 rounded-md hover:bg-white/30 dark:hover:bg-white/10 hover:text-black dark:hover:text-white transition-all duration-200"
        >
          <FiCompass />
          <span>Explore</span>
        </Link>

        <Link
          to="/messages"
          className="flex items-center gap-4 cursor-pointer px-2 py-1 rounded-md hover:bg-white/30 dark:hover:bg-white/10 hover:text-black dark:hover:text-white transition-all duration-200"
        >
          <FiMessageSquare />
          <span>Messages</span>
        </Link>

        <Link
          to="/settings"
          className="flex items-center gap-4 cursor-pointer px-2 py-1 rounded-md hover:bg-white/30 dark:hover:bg-white/10 hover:text-black dark:hover:text-white transition-all duration-200"
        >
          <FiSettings />
          <span>Settings</span>
        </Link>
        
        <Link
          to="/profile"
          className="flex items-center gap-4 cursor-pointer px-2 py-1 rounded-md hover:bg-white/30 dark:hover:bg-white/10 hover:text-black dark:hover:text-white transition-all duration-200"
        >
          <FiUser />
          <span>Profile</span>
        </Link>
      </div>

      {/* Profile Section */}
      <Link
        to="/profile"
        className="flex items-center gap-4 border-t border-gray-300 dark:border-gray-600 pt-6"
      >
        <div className="w-12 h-12 rounded-full overflow-hidden shadow-md">
          <img
            className="w-full h-full object-cover"
            src="./images/dp.webp"
            alt="dp"
          />
        </div>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white">
            Vijeta Nehra
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            @vijeta_nehra
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
