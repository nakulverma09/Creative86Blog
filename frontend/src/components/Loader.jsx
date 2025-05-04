import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-900">
      <div className="w-3/5 h-4 relative overflow-hidden bg-gray-800 rounded-full shadow-lg">
        {/* Animated bar */}
        <div className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-loading-bar rounded-full" />
      </div>
    </div>
  );
};

export default Loader;
