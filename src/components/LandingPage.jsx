import React from "react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col">
      {/* Header Section */}
      <header className="flex justify-between items-center px-8 py-4">
        <h1 className="text-xl font-bold">Quantolio</h1>
        <div className="flex space-x-4">
          <button className="hover:text-orange-500">Login</button>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md">
            Contact
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Quantolio Insights -{" "}
          <span className="text-orange-500">Supercharge</span> your operations
        </h2>
        <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md text-lg">
          Get Started
        </button>

        {/* Search Bar */}
        <div className="mt-12 relative w-full max-w-lg">
          <input
            type="text"
            placeholder="How will regulatory changes affect..."
            className="w-full px-6 py-3 rounded-full border-2 border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full">
            ➝
          </button>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="text-center py-8">
        <p className="text-gray-400">Search in</p>
        <div className="flex justify-center space-x-6 mt-4">
          <button className="hover:text-orange-500">All Sources</button>
          <button className="hover:text-orange-500">Finance</button>
          <button className="hover:text-orange-500">Data</button>
          <button className="hover:text-orange-500">Tech</button>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
