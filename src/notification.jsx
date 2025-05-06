import React, { useState } from "react";
import {
  FiHeart,
  FiMessageCircle,
  FiUserPlus,
  FiAtSign,
  FiTrash2,
  FiCheckCircle,
  FiFilter,
} from "react-icons/fi";
import { motion } from "framer-motion";

const sampleNotifications = [
  {
    id: 1,
    type: "like",
    user: "Diana",
    message: "liked your post",
    time: "2h ago",
    read: false,
  },
  {
    id: 2,
    type: "comment",
    user: "Ayaan",
    message: "commented: Beautiful shot!",
    time: "3h ago",
    read: false,
  },
  {
    id: 3,
    type: "follow",
    user: "Tannu",
    message: "started following you",
    time: "5h ago",
    read: true,
  },
  {
    id: 4,
    type: "mention",
    user: "Mira",
    message: "mentioned you in a story",
    time: "6h ago",
    read: false,
  },
  {
    id: 5,
    type: "like",
    user: "Sophia",
    message: "liked your reel",
    time: "8h ago",
    read: false,
  },
];

const iconMap = {
  like: <FiHeart className="text-pink-500" />,
  comment: <FiMessageCircle className="text-blue-500" />,
  follow: <FiUserPlus className="text-green-500" />,
  mention: <FiAtSign className="text-yellow-500" />,
};

const NotificationsPage = ({ darkMode }) => {
  const [notifications, setNotifications] = useState(sampleNotifications);
  const [filter, setFilter] = useState("all");

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const toggleReadStatus = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: !n.read } : n))
    );
  };

  const clearAll = () => setNotifications([]);

  const filtered = filter === "all"
    ? notifications
    : notifications.filter((n) => n.type === filter);

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className={`min-h-screen w-full p-6 transition-all duration-300 dark:text-white dark:bg-gray-900`}>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-1">Notifications</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">{unreadCount} unread</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={markAllRead}
            className="flex items-center gap-1 text-sm bg-green-100 dark:bg-green-700 hover:bg-green-200 dark:hover:bg-green-600 px-3 py-1 rounded-full transition"
          >
            <FiCheckCircle />
            Mark all as read
          </button>
          <button
            onClick={clearAll}
            className="flex items-center gap-1 text-sm bg-red-100 dark:bg-red-700 hover:bg-red-200 dark:hover:bg-red-600 px-3 py-1 rounded-full transition"
          >
            <FiTrash2 />
            Clear all
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 flex-wrap mb-6">
        {["all", "like", "comment", "follow", "mention"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-1.5 text-sm rounded-full border transition ${
              filter === type
                ? "bg-[#a796c9] text-white border-[#a796c9]"
                : "border-gray-300 dark:border-gray-600"
            }`}
          >
            <div className="flex items-center gap-2 capitalize">
              {type === "all" ? <FiFilter /> : iconMap[type]}
              {type}
            </div>
          </button>
        ))}
      </div>

      {/* Notifications */}
      {filtered.length === 0 ? (
        <p className="text-center text-gray-400 mt-20 text-lg">No notifications found</p>
      ) : (
        <div className="space-y-4">
          {filtered.map((n) => (
            <motion.div
              key={n.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex justify-between items-center p-4 rounded-xl shadow-md border hover:shadow-lg transition dark:bg-[#1f1f2e] dark:border-gray-700" ${n.read ? "opacity-60" : ""}`}
            >
              <div className="flex items-center gap-3">
                <div className="text-xl">{iconMap[n.type]}</div>
                <div>
                  <p className="text-sm">
                    <span className="font-semibold">{n.user}</span> {n.message}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{n.time}</p>
                </div>
              </div>
              <button
                onClick={() => toggleReadStatus(n.id)}
                className="text-xs px-3 py-1 rounded-full border border-[#a796c9] hover:bg-[#a796c9] hover:text-white transition"
              >
                {n.read ? "Mark as Unread" : "Mark as Read"}
              </button>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NotificationsPage;
