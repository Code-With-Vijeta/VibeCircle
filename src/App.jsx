import React, { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import MainContent from "./mainContent";
import RightSidebar from "./rightSidebar";
import ExplorePage from "./explorePage";
import SettingsPage from "./settingsPage";
import MessagesPage from "./messagePage";
import NotificationsPage from "./notification";
import ProfilePage from "./profile"; 
import Loader from './loader';

const ScrollToTop = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true); // State for loader

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    document.body.className = darkMode
      ? "bg-gray-900 text-white"
      : "bg-white text-gray-800";
  }, [darkMode]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Hide loader after 5 seconds
    }, 5000);

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  if (loading) {
    return <Loader />; // Show the loader while loading
  }

  return (
    <Router>
      <div className="min-h-screen w-full transition-colors duration-300">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="flex pt-[72px]">
          <div className="hidden lg:flex">
            <Sidebar />
          </div>

          <div className="flex-1 lg:ml-64 flex flex-col lg:flex-row">
            <ScrollToTop />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <MainContent />
                    <RightSidebar />
                  </>
                }
              />
              <Route path="/explore" element={<ExplorePage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/messages" element={<MessagesPage darkMode={darkMode} />} />
              <Route path="/notifications" element={<NotificationsPage darkMode={darkMode} />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;