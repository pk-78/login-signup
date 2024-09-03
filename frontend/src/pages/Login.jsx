import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [disable, setDisable] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.email && user.password) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [user]);

  const submitHandler = async () => {
    try {
      // API call to check if user exists with provided email
      const response = await axios.get(
        `http://localhost:3215/api/v1/getLoginbyEmail/${user.email}`
      );

      console.log(response);

      // Extract the user data from the response
      const userData = response.data.data[0];

      // Validate the response with the user's password
      if (userData && userData.password === user.password) {
        toast.success("Login successful!");
        navigate("/"); // Redirect to home page or dashboard
      } else {
        toast.error("Invalid credentials. Please try again.");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Login failed. Please try again."
      );
    }
  };

  return (
    <div>
      {/* <Navbar /> */}
      <div className="flex min-h-screen bg-gray-100 justify-center items-center">
        <div className="bg-white p-10 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-4">Login</h1>
          <div className="flex flex-col mb-4">
            <label className="text-gray-700">Email</label>
            <input
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="border-2 p-2 rounded-md"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-gray-700">Password</label>
            <input
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="border-2 p-2 rounded-md"
            />
          </div>
          <button
            onClick={submitHandler}
            disabled={disable}
            className={`${
              disable ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500"
            } text-white w-full py-2 rounded-md hover:bg-blue-600 transition`}
          >
            Login
          </button>
          <p className="mt-4 text-center">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-500 font-bold">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
