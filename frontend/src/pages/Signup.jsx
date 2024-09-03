// import { useState } from "react";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

// export default function Signup() {
//   const [user, setUser] = useState({ username: "", email: "", password: "" });
//   const [disable, setDisable] = useState(true);
//   const navigate = useNavigate();

//   const submitHandler = async () => {
//     try {
//       // Handle signup logic here

//       toast.success("Signup successful!");
//       navigate("/login");
//     } catch (error) {
//       toast.error("Signup failed. Please try again.");
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100 justify-center items-center">
//       <div className="bg-white p-10 rounded-lg shadow-lg">
//         <h1 className="text-3xl font-bold text-center mb-4">Sign Up</h1>
//         <div className="flex flex-col mb-4">
//           <label className="text-gray-700">Username</label>
//           <input
//             type="text"
//             value={user.username}
//             onChange={(e) => setUser({ ...user, username: e.target.value })}
//             className="border-2 p-2 rounded-md"
//           />
//         </div>
//         <div className="flex flex-col mb-4">
//           <label className="text-gray-700">Email</label>
//           <input
//             type="email"
//             value={user.email}
//             onChange={(e) => setUser({ ...user, email: e.target.value })}
//             className="border-2 p-2 rounded-md"
//           />
//         </div>
//         <div className="flex flex-col mb-4">
//           <label className="text-gray-700">Password</label>
//           <input
//             type="password"
//             value={user.password}
//             onChange={(e) => setUser({ ...user, password: e.target.value })}
//             className="border-2 p-2 rounded-md"
//           />
//         </div>
//         <button
//           onClick={submitHandler}
//           className="bg-green-500 text-white w-full py-2 rounded-md hover:bg-green-600 transition"
//         >
//           Sign Up
//         </button>
//         <p className="mt-4 text-center">
//           Already have an account?{" "}
//           <a href="/login" className="text-green-500 font-bold">
//             Login
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }

import axios from "axios";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Signup() {
  const [user, setUser] = useState({ username: "", email: "", password: "" });
  const [disable, setDisable] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.username && user.email && user.password) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [user]);

  const submitHandler = async () => {
    try {
      // Send POST request to the API
      const response = await axios.post(
        "http://localhost:3215/api/v1/createSignups",
        user
      );

      // Handle success response
      toast.success(response.data.message || "Signup successful!");
      navigate("/login");
    } catch (error) {
      // Handle error response
      toast.error(
        error.response?.data?.message || "Signup failed. Please try again."
      );
    }
  };

  return (
    <div>
      {/* <Navbar /> */}
      <div className="flex min-h-screen bg-gray-100 justify-center items-center">
        <div className="bg-white p-10 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-4">Sign Up</h1>
          <div className="flex flex-col mb-4">
            <label className="text-gray-700">Username</label>
            <input
              type="text"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className="border-2 p-2 rounded-md"
            />
          </div>
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
            className={`${
              disable ? "bg-gray-500 cursor-not-allowed" : "bg-green-500"
            } text-white w-full py-2 rounded-md hover:bg-green-600 transition`}
            disabled={disable}
          >
            Sign Up
          </button>
          <p className="mt-4 text-center">
            Already have an account?{" "}
            <a href="/login" className="text-green-500 font-bold">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
