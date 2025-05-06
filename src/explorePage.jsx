import React, { useState } from "react";
import { ZoomIn } from "lucide-react";

const mediaItems = [
  { type: "image", src: "./images/explore1.webp", span: "col-span-1 row-span-1 md:col-span-1 md:row-span-2" },
  { type: "image", src: "./images/explore2.webp", span: "col-span-1 row-span-2 md:col-span-3 md:row-span-2" },
  { type: "video", src: "./images/explore3.mp4", span: "col-span-1 row-span-1 md:col-span-3 md:row-span-3" },
  { type: "image", src: "./images/explore4.jpeg", span: "col-span-2 row-span-1 md:col-span-1 md:row-span-2" },
  { type: "image", src: "./images/explore5.jpeg", span: "col-span-1 row-span-1 md:col-span-1 md:row-span-1" },
  { type: "video", src: "./images/explore6.mp4", span: "col-span-1 row-span-3 md:col-span-2 md:row-span-2" },
  { type: "image", src: "./images/explore7.webp", span: "col-span-1 row-span-2 md:col-span-2 md:row-span-3" },
  { type: "video", src: "./images/explore8.mp4", span: "col-span-2 row-span-2 md:col-span-2 md:row-span-3" },
  { type: "image", src: "./images/explore9.jpeg", span: "col-span-1 row-span-1 md:col-span-2 md:row-span-3" },
  { type: "video", src: "./images/explore10.mp4", span: "col-span-1 row-span-2 md:col-span-2 md:row-span-2" },
  { type: "video", src: "./images/explore11.mp4", span: "col-span-1 row-span-1 md:col-span-2 md:row-span-1" },
  { type: "image", src: "./images/explore12.webp", span: "col-span-1 row-span-2 md:col-span-1 md:row-span-1" },
  { type: "video", src: "./images/explore13.mp4", span: "col-span-1 row-span-1 md:col-span-1 md:row-span-1" },
  { type: "image", src: "./images/explore14.webp", span: "col-span-1 row-span-3 md:col-span-2 md:row-span-2" },
  { type: "image", src: "./images/explore15.jpeg", span: "col-span-1 row-span-2 md:col-span-2 md:row-span-1" },
];


const ExplorePage = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const openModal = (item) => setSelectedMedia(item);
  const closeModal = () => setSelectedMedia(null);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen pl-4 pt-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Explore</h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4  gap-2 auto-rows-[200px] sm:auto-rows-[250px]">
        {mediaItems.map((item, index) => (
          <div key={index} className={`group relative overflow-hidden rounded-lg ${item.span}`}>
            {item.type === "image" ? (
              <img
                src={item.src}
                alt="explore"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 group-hover:brightness-75"
              />
            ) : (
              <video
                src={item.src}
                muted
                autoPlay
                loop
                playsInline
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 group-hover:brightness-75"
              />
            )}
            {/* Zoom Icon Overlay */}
            <div
              onClick={() => openModal(item)}
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            >
              <div className="bg-black bg-opacity-50 rounded-full p-3">
                <ZoomIn className="text-white w-6 h-6" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedMedia && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={closeModal}
        >
          <div className="max-w-5xl w-full p-4" onClick={(e) => e.stopPropagation()}>
            {selectedMedia.type === "image" ? (
              <img src={selectedMedia.src} alt="zoomed" className="w-full h-auto rounded-lg" />
            ) : (
              <video
                src={selectedMedia.src}
                controls
                autoPlay
                className="w-full h-auto rounded-lg"
              />
            )}
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 text-white text-2xl font-bold"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExplorePage;
