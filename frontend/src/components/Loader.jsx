import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="relative animate-bounce">
        {/* Body */}
        <div className="w-16 h-20 bg-red-600 rounded-t-full rounded-b-md relative">
          {/* Visor */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-3 w-10 h-6 bg-blue-300 rounded-full border-2 border-blue-500"></div>

          {/* Backpack */}
          <div className="absolute -left-4 top-4 w-4 h-10 bg-red-700 rounded-lg"></div>
        </div>

        {/* Shadow */}
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-14 h-2 bg-black opacity-30 rounded-full blur-sm animate-pulse"></div>
      </div>
    </div>
  );
};

export default Loader;
