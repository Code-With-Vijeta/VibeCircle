import React, { useState } from "react";

const RightSidebar = () => {
  const [requests, setRequests] = useState([
    { name: "Meena", dp: "./images/req1.webp" },
    { name: "Rahul", dp: "./images/req2.jpg" },
    { name: "Simran", dp: "./images/req3.webp" },
    { name: "Karan", dp: "./images/req4.webp" },
    { name: "Neha", dp: "./images/req5.webp" },
  ]);

  const [suggestions, setSuggestions] = useState([
    { name: "Arya", dp: "./images/sug1.webp" },
    { name: "Tara", dp: "./images/sug2.webp" },
    { name: "Kabir", dp: "./images/sug3.webp" },
    { name: "Ishaan", dp: "./images/sug4.webp" },
    { name: "Riya", dp: "./images/sug5.webp" },
    { name: "Zoya", dp: "./images/sug6.webp" },
  ]);

  const [followed, setFollowed] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAccept = (name) => {
    setRequests(requests.filter((r) => r.name !== name));
  };

  const handleDeleteRequest = (name) => {
    setRequests(requests.filter((r) => r.name !== name));
  };

  const toggleFollow = (name) => {
    setFollowed((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  const filteredSuggestions = suggestions.filter((s) =>
    s.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-64 hidden xl:block px-4 py-6 text-gray-800 dark:text-white">
      <input
        type="text"
        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg mb-4 text-sm bg-white dark:bg-gray-800 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search suggestions..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-3">Friend Requests</h3>
        {requests.length === 0 ? (
          <p className="text-sm text-gray-500 dark:text-gray-400">No requests</p>
        ) : (
          requests.map((req, idx) => (
            <div
              key={idx}
              className="p-3 mb-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition"
            >
              <div className="flex items-center gap-3">
                <img src={req.dp} alt="request" className="w-10 h-10 rounded-full" />
                <span className="text-sm font-medium">{req.name}</span>
              </div>
              <div className="flex gap-2 mt-3">
                <button
                  className="text-xs bg-green-600 hover:bg-green-500 text-white rounded-full px-3 py-1 transition"
                  onClick={() => handleAccept(req.name)}
                >
                  Accept
                </button>
                <button
                  className="text-xs bg-red-600 hover:bg-red-500 text-white rounded-full px-3 py-1 transition"
                  onClick={() => handleDeleteRequest(req.name)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Suggestions</h3>
        {filteredSuggestions.length === 0 ? (
          <p className="text-sm text-gray-500 dark:text-gray-400">
            No suggestions found
          </p>
        ) : (
          filteredSuggestions.map((sugg, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-3 mb-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition"
            >
              <div className="flex items-center gap-3">
                <img src={sugg.dp} alt="suggestion" className="w-10 h-10 rounded-full" />
                <span className="text-sm font-medium">{sugg.name}</span>
              </div>
              <button
                className={`text-xs px-3 py-1 rounded-full transition ${
                  followed.includes(sugg.name)
                    ? "bg-gray-400 cursor-not-allowed text-white"
                    : "bg-[#6c5887] hover:bg-[#909cce] text-white"
                }`}
                onClick={() => toggleFollow(sugg.name)}
                disabled={followed.includes(sugg.name)}
              >
                {followed.includes(sugg.name) ? "Unfollow" : "Follow"}
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RightSidebar;
