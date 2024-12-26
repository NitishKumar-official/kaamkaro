
import Poster from "../image/Poster.jpeg";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ RegUser }) => {


  const [user, setUser] = useState(RegUser || null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!RegUser) {
      // Fetch user details if not passed as prop
      fetch("/api/get-user") // Replace with your endpoint
        .then((res) => res.json())
        .then((data) => setUser(data))
        .catch(() => navigate("/home")); // Redirect if no user data
    }
  }, [RegUser, navigate]);

  console.log(RegUser);


  return (
    <div className="font-sans">

      <Header/>
      {/* Delivery Information */}
      <div className="bg-sky-100 text-white-100 text-sm py-3 px-2 pt-6 flex justify-between items-center">
        <span>Items Delivered to {user?.pincode || "Unknown Location"}</span>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {/* Categories */}
      <div className="p-4 bg-gray-100">
        <h2 className="font-semibold text-lg mb-2">Categories</h2>
        <div className="overflow-x-auto flex space-x-4 pb-2 justify-around">
          {/* Cement */}
          <div className="flex-shrink-0 w-32 h-24 bg-white rounded-lg shadow-sm flex flex-col justify-center items-center">
            <div className="w-28 h-28 rounded-full mb-2 overflow-hidden">
              <img
                src="https://static.vecteezy.com/system/resources/previews/047/087/814/non_2x/raw-mountain-rocks-stack-on-transparent-background-free-png.png"
                alt="Cement"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm font-bold">Cement</span>
          </div>

          {/* Balu */}
          <div className="flex-shrink-0 w-32 h-24 bg-white rounded-lg shadow-sm flex flex-col justify-center items-center">
            <div className="w-28 h-28 rounded-full mb-2 overflow-hidden">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwFbGq-n9VPaErLZ-sGzqIpsAvLnhbdXJXwg&s?text=Balu"
                alt="Balu"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm font-bold">Balu</span>
          </div>

          {/* Gitti */}
          <div className="flex-shrink-0 w-32 h-24 bg-white rounded-lg shadow-sm flex flex-col justify-center items-center">
            <div className="w-28 h-28 rounded-full mb-2 overflow-hidden">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReErWNWFvOlepRaem9Uc1OnD_Gy5jn_oOj3g&s?text=Gitti"
                alt="Gitti"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm font-bold">Gitti</span>
          </div>

          {/* Sariya */}
          <div className="flex-shrink-0 w-32 h-24 bg-white rounded-lg shadow-sm flex flex-col justify-center items-center">
            <div className="w-28 h-28 rounded-full mb-2 overflow-hidden">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqaYQ1XL1eKT5btWqqui6KZ8e5txx6nqnVnA&s?text=Sariya"
                alt="Sariya"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm font-bold">Sariya</span>
          </div>

          {/* Repeat as needed for other categories */}
          <div className="flex-shrink-0 w-32 h-24 bg-white rounded-lg shadow-sm flex flex-col justify-center items-center">
            <div className="w-28 h-28 rounded-full mb-2 overflow-hidden">
              <img
                src="https://img.freepik.com/premium-psd/bricks-isolated-transparent-background-png-psd_888962-1613.jpg?text=bricks"
                alt="Bricks"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm font-bold">Bricks</span>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="p-4">
        <div className="w-full h-40 bg-white rounded-lg overflow-hidden">
          <img
            src={Poster}
            alt="Poster"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <Footer/>

    </div>
  );
};

export default Home;
