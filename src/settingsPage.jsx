import React, { useState } from "react";

const SettingsPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [language, setLanguage] = useState("English");
  const [username, setUsername] = useState("vijeta_nehra");
  const [email, setEmail] = useState("vijeta150@gmail.com");
  const [password, setPassword] = useState("");

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  const handleNotificationsToggle = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleSaveChanges = () => {
    alert("Settings updated successfully!");
  };

  return (
    <div className={`p-8 w-full bg-white dark:bg-gray-900 min-h-screen`}>
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-8">Settings</h2>

      <div className="space-y-12">
        {/* Account Settings Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Account Settings</h3>
          <div className="space-y-6">
            <div>
              <label className="text-lg text-gray-800 dark:text-white" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-2 w-full p-3 border-2 border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-lg text-gray-800 dark:text-white" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full p-3 border-2 border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-lg text-gray-800 dark:text-white" htmlFor="password">
                Change Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 w-full p-3 border-2 border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Privacy Settings Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Privacy Settings</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-lg text-gray-800 dark:text-white">Make Profile Private</span>
              <input
                type="checkbox"
                checked={false}
                onChange={() => {}}
                className="w-6 h-6 border-2 border-gray-300 dark:border-gray-600 rounded-full"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-lg text-gray-800 dark:text-white">Show Activity Status</span>
              <input
                type="checkbox"
                checked={true}
                onChange={() => {}}
                className="w-6 h-6 border-2 border-gray-300 dark:border-gray-600 rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Theme Settings Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Theme Settings</h3>
          <div className="flex items-center justify-between">
            <span className="text-lg text-gray-800 dark:text-white">Dark Mode</span>
            <button
              onClick={handleThemeToggle}
              className={`px-5 py-2 rounded-full border-2 ${darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"} transition-colors duration-200`}
            >
              {darkMode ? "Disable" : "Enable"}
            </button>
          </div>
        </div>

        {/* Notification Preferences Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Notification Preferences</h3>
          <div className="flex items-center justify-between">
            <span className="text-lg text-gray-800 dark:text-white">Enable Notifications</span>
            <button
              onClick={handleNotificationsToggle}
              className={`px-5 py-2 rounded-full border-2 ${notificationsEnabled ? "bg-green-500 text-white" : "bg-gray-200 text-black"} transition-colors duration-200`}
            >
              {notificationsEnabled ? "Disable" : "Enable"}
            </button>
          </div>
        </div>

        {/* Language Selection Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Language Settings</h3>
          <div>
            <label className="text-lg text-gray-800 dark:text-white" htmlFor="language">
              Select Language
            </label>
            <select
              id="language"
              value={language}
              onChange={handleLanguageChange}
              className="mt-2 w-full p-3 border-2 border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
              <option value="German">German</option>
            </select>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="text-center mt-12">
        <button
          onClick={handleSaveChanges}
          className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
