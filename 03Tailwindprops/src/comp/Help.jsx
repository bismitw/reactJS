import React from "react";

function Help() {
  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center bg-linear-to-br from-gray-900 via-purple-900 to-gray-900 p-8">
      

      
      <div className="text-center mb-8">
        <div className="text-8xl md:text-9xl lg:text-[10rem] font-black bg-linear-to-r from-indigo-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent drop-shadow-2xl animate-pulse">
          404
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6 tracking-tight">
          Page Not Found
        </h1>
      </div>

      
      <p className="text-lg md:text-xl text-gray-300 max-w-md text-center mb-10 leading-relaxed opacity-90">
        The page you're looking for doesn't exist or has been moved.
      </p>

      
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <a
          href="/"
          className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg rounded-xl shadow-2xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-500"
        >
          ← Go Home
        </a>
        <a
          href="/contact"
          className="px-8 py-4 border-2 border-indigo-500 hover:bg-indigo-500 text-indigo-300 hover:text-white font-semibold text-lg rounded-xl transition-all duration-300 hover:shadow-lg"
        >
          Contact Support
        </a>
      </div>

      <p className="text-gray-500 text-sm mt-12 animate-pulse">
        Use the search bar or go back to the homepage
      </p>
    </div>
  );
}

export default Help;
