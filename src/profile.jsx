import React from "react";

const ProfilePage = () => {
  const posts = Array.from({ length: 12 });

  return (
    <div className="w-full min-h-screen px-4 py-20 lg:px-16 dark:bg-gray-900 dark:text-white transition-all">
      {/* Profile Header */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mb-10">
        <img
          src="./images/dp.webp"
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-[#a796c9] dark:border-[#5e638d] object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
            <h1 className="text-2xl font-bold">vijeta_nehra</h1>
            <button className="bg-[#a796c9] hover:bg-[#909cce] text-white px-4 py-1 rounded-md text-sm transition">
              Edit Profile
            </button>
            <button className="bg-[#e2e6f8] hover:bg-[#d3c6fd] dark:bg-[#3a3c5f] dark:hover:bg-[#4a4d73] text-[#6c5887] dark:text-white px-3 py-1 rounded-md text-sm transition">
              Share Profile
            </button>
          </div>
          <div className="flex justify-center lg:justify-start gap-8 text-sm lg:text-base mb-4">
            <div><span className="font-bold">12</span> posts</div>
            <div><span className="font-bold">1.2M</span> followers</div>
            <div><span className="font-bold">1</span> following</div>
          </div>
          <div className="text-center lg:text-left">
            <p className="font-semibold">Vijeta Nehra</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Aspiring Web Developer | Designer | Dreamer ✨</p>
            <p className="text-sm text-blue-500">@vijeta_nehra</p>
          </div>
        </div>
      </div>

      {/* Highlights */}
      <div className="flex gap-4 overflow-x-auto py-4 mb-8 scrollbar-hide">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border-2 border-[#a796c9] dark:border-[#5e638d] overflow-hidden">
              <img
                src={`./images/highlight${(i % 6) + 1}.jpg`}
                alt="highlight"
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-sm mt-2">Highlight {i + 1}</p>
          </div>
        ))}
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4">
        {posts.map((_, i) => (
          <div key={i} className="aspect-square overflow-hidden rounded-md shadow-md hover:scale-105 transition">
            <img
              src={`./images/post${(i % 12) + 1}.jpg`}
              alt="Post"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
