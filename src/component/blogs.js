"use client";

import React from "react";
import { FaHome, FaBookOpen, FaHeart, FaBell, FaBookmark } from "react-icons/fa";  // Updated icons
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"; // Add these for the navigation arrows
import cube1 from "../images/cube1.jpeg";
import cube2 from "../images/cube2.jpeg";
import cube3 from "../images/cube3.jpeg";
import circel1 from "../images/circel1.jpeg";
import combo1 from "../images/combo1.jpeg";
import combo2 from "../images/combo2.jpeg";
import diamond1 from "../images/diamond1.jpeg";
import triangle1 from "../images/triangle1.jpeg";
import "../App.css";

const Blogs = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const blogs = [
    {
      title: "The Future of Architecture",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "The Cultural Significance of Greenhouses",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Modern Urban Planning",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Urban Green Spaces",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "The Evolution of Smart Cities",
      image: "/placeholder.svg?height=400&width=600",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === blogs.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? blogs.length - 1 : prev - 1));
  };

  return (
    <div className="relative h-[500px] w-full py-8 bg-black border-[3px] border-cyan-400 overflow-hidden">
      {/* Navigation Container */}
      <div className="navigator absolute top-4 left-1/2 transform -translate-x-1/2 flex items-center justify-between w-1/3 bg-purple-500 bg-opacity-75 backdrop-blur-md rounded-full px-6 py-3 shadow-lg z-10 border-2 border-white cursor-pointer hover:bg-blue-600 transition-all duration-300"> 
        <button
          onClick={handlePrev}
          className="text-black hover:text-gray-700 transition-colors"
        >
          <AiOutlineLeft className="w-6 h-6" /> {/* Use new icon here */}
        </button>
        <button
          onClick={handleNext}
          className="text-black hover:text-gray-700 transition-colors"
        >
          <AiOutlineRight className="w-6 h-6" /> {/* Use new icon here */}
        </button>
      </div>

      {/* Big Container */}
      <div className="relative w-full max-w-6xl mx-auto h-[500px] overflow-hidden flex items-center justify-center bg-no-repeat bg-cover bg-black"> 
        <img
          src={diamond1}
          alt="shapes1"
          className="absolute top-[10px] left-20 w-12 h-12 object-cover opacity-80 hover:opacity-100 cursor-pointer"
        />
        <img
          src={combo2}
          alt="shapes2"
          className="absolute left-[950px] top-[-3px] right-20 w-16 h-16 object-cover opacity-80 hover:opacity-100 cursor-pointer"
        />
        <img
          src={circel1}
          alt="shapes3"
          className="absolute bottom-[60px] left-[530px] w-16 h-16 object-cover opacity-80 hover:opacity-100 cursor-pointer"
        />
        <img
          src={circel1}
          alt="shapes4"
          className="absolute top-[-20px] left-[215px] w-12 h-12 object-cover opacity-60 hover:opacity-100 cursor-pointer"
        />
        <img
          src={cube1}
          alt="shapes5"
          className="absolute bottom-[31px] left-[40px] w-8 h-8 object-cover opacity-90 hover:opacity-100 cursor-pointer"
        />
        <img
          src={diamond1}
          alt="shapes6"
          className="absolute bottom-[38px] left-[420px] w-12 h-12 object-cover opacity-85 hover:opacity-100 cursor-pointer"
        />
        <img
          src={circel1}
          alt="shapes7"
          className="absolute bottom-[35px] left-[180px] w-12 h-12 object-cover opacity-70 hover:opacity-100 cursor-pointer"
        />
        <img
          src={cube3}
          alt="shapes8"
          className="absolute bottom-[40px] left-[690px] w-12 h-12 object-cover opacity-65 hover:opacity-100 cursor-pointer"
        />
        <img
          src={circel1}
          alt="shapes9"
          className="absolute top-[10px] left-[330px] w-12 h-12 object-cover opacity-70 hover:opacity-100 cursor-pointer"
        />
        <img
          src={triangle1}
          alt="shapes11"
          className="absolute bottom-[55px] left-[310px] w-12 h-12 object-cover opacity-70 hover:opacity-100 cursor-pointer"
        />
        <img
          src={cube2}
          alt="shapes12"
          className="absolute top-[10px] left-[805px] w-10 h-10 object-cover opacity-70 hover:opacity-100 cursor-pointer"
        />
        <img
          src={circel1}
          alt="shapes14"
          className="absolute bottom-[140px] left-[805px] w-14 h-14 object-cover opacity-80 hover:opacity-100 cursor-pointer"
        />
        <img
          src={triangle1}
          alt="shapes15"
          className="absolute bottom-[40px] left-[920px] w-12 h-12 object-cover opacity-70 hover:opacity-100 cursor-pointer"
        />
        <img
          src={combo1}
          alt="shapes16"
          className="absolute bottom-[40px] left-[1050px] w-16 h-16 object-cover opacity-70 hover:opacity-100 cursor-pointer"
        />

        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 20}%)`,
          }}
        >
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="relative h-[350px] w-[500px] px-4 mt-[-30px]"
            >
              <div className="flex bg-white shadow-lg overflow-hidden">
                {/* Sidebar */}
                <div className="w-32 bg-gray-200 backdrop-blur-md border-[3px] flex flex-col px-4 py-6 gap-4 hover:bg-gray-300 hover:bg-opacity-80 transition-all duration-300 cursor-pointer" style={{ borderColor: 'lime'}}>
                  <div className="flex items-center gap-2 hover:scale-105 transition-transform hover:shadow-lg hover:rounded-lg p-2">
                    <FaHome className="w-6 h-6 text-blue-600" />
                    <span className="text-sm font-bold text-black">Home</span>
                  </div>
                  <div className="flex items-center gap-2 hover:scale-105 transition-transform hover:shadow-lg hover:rounded-lg p-2">
                    <FaBookOpen className="w-6 h-6 text-green-600" />
                    <span className="text-sm font-bold text-black">Read</span>
                  </div>
                  <div className="flex items-center gap-2 hover:scale-105 transition-transform hover:shadow-lg hover:rounded-lg p-2">
                    <FaHeart className="w-6 h-6 text-red-600" />
                    <span className="text-sm font-bold text-black">Like</span>
                  </div>
                  <div className="flex items-center gap-2 hover:scale-105 transition-transform hover:shadow-lg hover:rounded-lg p-2">
                    <FaBell className="w-1 h-1 text-yellow-600" />
                    <span className="text-sm font-bold text-black">Comment</span>
                  </div>
                  <div className="flex items-center gap-2 hover:scale-105 transition-transform hover:shadow-lg hover:rounded-lg p-2">
                    <FaBookmark className="w-6 h-6 text-purple-600" />
                    <span className="text-sm font-bold text-black">Save</span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 w-[250px] p-6 border-[3px] border-cyan-300 hover:shadow-xl transition-shadow duration-300 cursor-pointer bg-opacity-50">
                  <article className="max-w-2xl">
                    <h1 className="text-2xl font-bold mb-4">{blog.title}</h1>
                    <div className="aspect-video rounded-lg overflow-hidden mb-4">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-gray-800">
                      Explore the topic of {blog.title} with insights and
                      analyses from experts.
                    </p>
                  </article>
                </div> 
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
