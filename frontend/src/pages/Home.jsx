import React from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Platform</h1>
          <p className="text-lg mb-8">
            We provide top-notch services for managing your tasks efficiently.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition">
            Get Started
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Feature One</h2>
          <p className="text-gray-700 mb-4">
            Description of the first feature. Highlight what makes this feature
            stand out.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Feature Two</h2>
          <p className="text-gray-700 mb-4">
            Description of the second feature. Explain why users would love
            this.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Feature Three</h2>
          <p className="text-gray-700 mb-4">
            Description of the third feature. Detail how it can benefit users.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto text-center">
          <p> Made with love by pk78</p>
          <div className="mt-4">
            <a href="#" className="text-gray-400 hover:text-white mx-2">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white mx-2">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white mx-2">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
