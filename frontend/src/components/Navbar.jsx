import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1
            className="text-white text-2xl font-bold cursor-pointer"
            onClick={() => navigate("/")}
          >
            MyApp
          </h1>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={() => navigate("/login")}
            className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition duration-300"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition duration-300"
          >
            Signup
          </button>
        </div>
      </div>
    </nav>
  );
}
