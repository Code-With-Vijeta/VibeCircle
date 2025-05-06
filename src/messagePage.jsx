import React, { useState, useEffect, useRef } from "react";
import { FiSend } from "react-icons/fi";
import { useLocation } from "react-router-dom";

// Dummy user list
const usersList = [
  {
    id: 1,
    name: "Tannu",
    profilePic: "./images/tannu_dp.jpg",
    status: "Active",
  },
  {
    id: 2,
    name: "Aria",
    profilePic: "./images/aria_dp.jpg",
    status: "Last seen 2 hours ago",
  },
  {
    id: 3,
    name: "Diana",
    profilePic: "./images/diana_dp.jpg",
    status: "Active",
  },
  { id: 4, name: "Mira", profilePic: "./images/mira_dp.jpg", status: "Active" },
  {
    id: 5,
    name: "Ayaan",
    profilePic: "./images/ayan_dp.jpg",
    status: "Last seen 5 mins ago",
  },
  {
    id: 6,
    name: "Sophia",
    profilePic: "./images/sophia_dp.jpg",
    status: "Busy",
  },
];

// Default messages with longer conversations
const getDefaultMessages = () => ({
  1: [
    {
      id: 1,
      user: "Tannu",
      text: "Hey, how’s your day going?",
      time: "10:30 AM",
    },
    {
      id: 2,
      user: "You",
      text: "Pretty good! Just finished some work. You?",
      time: "10:31 AM",
    },
    {
      id: 3,
      user: "Tannu",
      text: "Same here. Finally getting a break 😅",
      time: "10:32 AM",
    },
    {
      id: 4,
      user: "You",
      text: "Nice! Planning to chill or still got stuff left?",
      time: "10:33 AM",
    },
    {
      id: 5,
      user: "Tannu",
      text: "I might go for a walk later. Need some air 😌",
      time: "10:34 AM",
    },
    {
      id: 6,
      user: "You",
      text: "That sounds peaceful. Enjoy!",
      time: "10:35 AM",
    },
  ],
  2: [
    {
      id: 1,
      user: "Aria",
      text: "What’s up? Missed our late-night talks 😄",
      time: "11:00 AM",
    },
    {
      id: 2,
      user: "You",
      text: "Aww same! We need a catch-up call soon.",
      time: "11:01 AM",
    },
    {
      id: 3,
      user: "Aria",
      text: "Totally! Let’s plan something this weekend?",
      time: "11:03 AM",
    },
    {
      id: 4,
      user: "You",
      text: "Saturday night? I’m mostly free.",
      time: "11:05 AM",
    },
    {
      id: 5,
      user: "Aria",
      text: "Works for me. Let’s do pizza + movie night 🍕🎬",
      time: "11:06 AM",
    },
    { id: 6, user: "You", text: "Yesss, I’m in!", time: "11:07 AM" },
  ],
  3: [
    {
      id: 1,
      user: "Diana",
      text: "Long time no see! Let’s meet this weekend?",
      time: "09:30 AM",
    },
    {
      id: 2,
      user: "You",
      text: "Absolutely! Saturday works for me.",
      time: "09:32 AM",
    },
    { id: 3, user: "Diana", text: "Perfect, can’t wait! ☕", time: "09:33 AM" },
    {
      id: 4,
      user: "You",
      text: "Also, I have some updates to share!",
      time: "09:34 AM",
    },
    {
      id: 5,
      user: "Diana",
      text: "Ooh interesting 👀 Now I’m even more excited!",
      time: "09:35 AM",
    },
    { id: 6, user: "You", text: "Haha, teaser alert 😁", time: "09:36 AM" },
  ],
  4: [
    { id: 1, user: "Mira", text: "Good morning! 🌞", time: "08:15 AM" },
    {
      id: 2,
      user: "You",
      text: "Morning! Hope today’s a chill one 😌",
      time: "08:16 AM",
    },
    {
      id: 3,
      user: "Mira",
      text: "Fingers crossed 🤞 Got back-to-back meetings!",
      time: "08:17 AM",
    },
    {
      id: 4,
      user: "You",
      text: "Ugh, sending strength your way!",
      time: "08:18 AM",
    },
    {
      id: 5,
      user: "Mira",
      text: "Thanks haha! Coffee's my savior today ☕",
      time: "08:19 AM",
    },
    {
      id: 6,
      user: "You",
      text: "You got this! Catch up later?",
      time: "08:20 AM",
    },
  ],
  5: [
    {
      id: 1,
      user: "Ayaan",
      text: "Bro, let’s catch up soon! Beach plan? 🌊",
      time: "12:45 PM",
    },
    {
      id: 2,
      user: "You",
      text: "100%! Sunday morning ride?",
      time: "12:46 PM",
    },
    {
      id: 3,
      user: "Ayaan",
      text: "Done. Bringing the speaker 🔊",
      time: "12:47 PM",
    },
    {
      id: 4,
      user: "You",
      text: "Awesome! Let’s hit the chai point after.",
      time: "12:48 PM",
    },
    { id: 5, user: "Ayaan", text: "Vibe 🔥 Can’t wait", time: "12:49 PM" },
    {
      id: 6,
      user: "You",
      text: "Same here. Finally, a proper break!",
      time: "12:50 PM",
    },
  ],
  6: [
    {
      id: 1,
      user: "Sophia",
      text: "Hey! Free for a quick chat?",
      time: "02:20 PM",
    },
    { id: 2, user: "You", text: "Sure! What’s up?", time: "02:21 PM" },
    {
      id: 3,
      user: "Sophia",
      text: "Need your opinion on my portfolio revamp 💻",
      time: "02:22 PM",
    },
    {
      id: 4,
      user: "You",
      text: "Send it over. Happy to help!",
      time: "02:23 PM",
    },
    {
      id: 5,
      user: "Sophia",
      text: "Thanks! You always give solid feedback 😄",
      time: "02:24 PM",
    },
    {
      id: 6,
      user: "You",
      text: "Haha I try! Let’s make it awesome 😎",
      time: "02:25 PM",
    },
  ],
});

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};


const MessagePage = ({ darkMode }) => {
  const [selectedUser, setSelectedUser] = useState(usersList[0]);
  const [newMessage, setNewMessage] = useState("");
  const [messagesByUser, setMessagesByUser] = useState(getDefaultMessages);
  const [isTyping, setIsTyping] = useState(false);
  const messageEndRef = useRef(null);

  const userMessages = messagesByUser[selectedUser.id] || [];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg = {
        id: Date.now(),
        user: "You",
        text: newMessage,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessagesByUser((prev) => ({
        ...prev,
        [selectedUser.id]: [...(prev[selectedUser.id] || []), newMsg],
      }));

      setNewMessage("");
    }
  };

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  const handleEditMessage = (messageId, newText) => {
    setMessagesByUser((prev) => {
      const updatedMessages = prev[selectedUser.id].map((msg) =>
        msg.id === messageId ? { ...msg, text: newText } : msg
      );
      return { ...prev, [selectedUser.id]: updatedMessages };
    });
  };

  const handleDeleteMessage = (messageId) => {
    setMessagesByUser((prev) => {
      const updatedMessages = prev[selectedUser.id].filter(
        (msg) => msg.id !== messageId
      );
      return { ...prev, [selectedUser.id]: updatedMessages };
    });
  };

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [userMessages]);

  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      if (isTyping) {
        setIsTyping(false);
      }
    }, 2000);
    return () => clearTimeout(typingTimeout);
  }, [isTyping]);

  return (
    <div
      className={`min-h-screen w-full flex flex-col md:flex-row p-4 dark:bg-gray-900 dark:text-white `}
    >
      {/* Left Side: Users List */}
      <div className="w-full md:w-1/4 p-4 border-b md:border-b-0 md:border-r dark:border-gray-700">
        <h2 className="text-xl font-bold mb-4">Messages</h2>
        {usersList.map((user) => (
          <div
            key={user.id}
            onClick={() => handleUserSelect(user)}
            className={`flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer rounded-lg ${
              selectedUser.id === user.id
                ? "bg-purple-200 dark:bg-purple-400"
                : ""
            }`}
          >
            <img
              src={user.profilePic}
              alt={user.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="ml-3">
              <span className="font-semibold">{user.name}</span>
              <p className="text-xs text-gray-600 dark:text-gray-300">
                {user.status}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Side: Chat */}
      <div className="flex-1 flex flex-col w-full md:w-3/4">
        {/* Chat Header */}
        <header className="flex items-center justify-between p-4 border-b dark:border-gray-700">
          <div className="flex items-center">
            <img
              src={selectedUser.profilePic}
              alt={selectedUser.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <span className="ml-2 text-xl font-bold">{selectedUser.name}</span>
          </div>
        </header>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 pr-4">
          {userMessages.length === 0 ? (
            <p className="text-sm text-center text-gray-400 dark:text-gray-500">
              No messages yet. Start the conversation!
            </p>
          ) : (
            userMessages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.user === "You" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg ${
                    message.user === "You"
                      ? "bg-purple-400 text-white"
                      : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs text-right mt-1">{message.time}</p>
                  {message.user === "You" && (
                    <div className="flex justify-end gap-2 mt-1 text-xs text-gray-800">
                      <span
                        onClick={() =>
                          handleEditMessage(
                            message.id,
                            prompt("Edit your message:", message.text)
                          )
                        }
                        className="cursor-pointer"
                      >
                        Edit
                      </span>
                      <span
                        onClick={() => handleDeleteMessage(message.id)}
                        className="cursor-pointer"
                      >
                        Delete
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
          {isTyping && (
            <div className="text-sm text-gray-400 dark:text-gray-500">
              Typing...
            </div>
          )}
          <div ref={messageEndRef} />
        </div>

        {/* Chat Input */}
        <div className="p-4 border-t dark:border-gray-700 bg-white dark:bg-gray-900">
          <div className="flex items-center gap-2 w-full">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => {
                setNewMessage(e.target.value);
                setIsTyping(true);
              }}
              placeholder="Type a message"
              className="flex-1 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white"
            />
            <button
              onClick={handleSendMessage}
              className="text-xl text-blue-500"
            >
              <FiSend />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagePage;