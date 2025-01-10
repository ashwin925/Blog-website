"use client";

import React from "react";
import { FaHome, FaBookOpen, FaHeart, FaBell, FaBookmark } from "react-icons/fa"; // Updated icons
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"; // Add these for the navigation arrows
// import cube1 from "../images/cube1.jpeg";
// import cube2 from "../images/cube2.jpeg";
// import cube3 from "../images/cube3.jpeg";
// import circel1 from "../images/circel1.jpeg";
// import combo1 from "../images/combo1.jpeg";
// import combo2 from "../images/combo2.jpeg";
// import diamond1 from "../images/diamond1.jpeg";
// import triangle1 from "../images/triangle1.jpeg";
// import blog1 from "../images/blog1.jpeg";
import "../App.css";

const Blogs = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const blogs = [
    {
      id: 1,
      title: "The Future of Architecture",
      image: "https://scontent.fixm4-4.fna.fbcdn.net/o1/v/t0/f2/m340/AQOM8LNC3K540qmhcohsmOuclTlDFpcI2vbAmQAgHcylRM3_ji0Pi0Of7ijfBFL-6Gcjj5IO4ts7Qh4lEnKFF9IKwCT620MSycb8zu3AQoJP7WtYQidJCy-qJPOKhpVaiYs-ZJI1La6A7XzT62dl0vO8Raal.jpeg?_nc_ht=scontent.fixm4-4.fna.fbcdn.net&_nc_cat=101&ccb=9-4&oh=00_AYBOnk6FQeEUIYeEXcRJUQpXdz6bnVKWO0xD6-YBiOdLqg&oe=6782D1F9&_nc_sid=5b3566",
      description: "How Exercise make changes in our body gradually !.",
    },
    {
      id: 2,
      title: "The Cultural Significance of Greenhouses",
      image: "https://scontent.fixm4-4.fna.fbcdn.net/o1/v/t0/f2/m340/AQMTFwOjX5eWr1w9jJd5zQj3LL06jcigtjR4Y3tySGq1H7-eZD3XmMBv4VMm9iwBPuY_4maBZXb5Bgxal5wutnXp8eDTfN4e9UM4BhkVtKOeyyrc0GZSr9t_679vPNGjjKOEGPnrFgmhTANAKv71ozq7KN7gcQ.jpeg?_nc_ht=scontent.fixm4-4.fna.fbcdn.net&_nc_cat=111&ccb=9-4&oh=00_AYCeYwP26aMLNFwsVUeP67k4--yxWVH7Rv8fMsXpdlFoUw&oe=6782D6EB&_nc_sid=5b3566",
      description: "Dive into the history and importance of greenhouses in culture.",
    },
    {
      id: 3,
      title: "Modern Urban Planning",
      image: "https://scontent.fixm4-4.fna.fbcdn.net/o1/v/t0/f2/m340/AQMTFwOjX5eWr1w9jJd5zQj3LL06jcigtjR4Y3tySGq1H7-eZD3XmMBv4VMm9iwBPuY_4maBZXb5Bgxal5wutnXp8eDTfN4e9UM4BhkVtKOeyyrc0GZSr9t_679vPNGjjKOEGPnrFgmhTANAKv71ozq7KN7gcQ.jpeg?_nc_ht=scontent.fixm4-4.fna.fbcdn.net&_nc_cat=111&ccb=9-4&oh=00_AYCeYwP26aMLNFwsVUeP67k4--yxWVH7Rv8fMsXpdlFoUw&oe=6782D6EB&_nc_sid=5b3566",
      description: "Learn about the innovations in urban planning today.",
    },
    {
      id: 4,
      title: "Urban Green Spaces",
      image: "https://scontent.fixm4-4.fna.fbcdn.net/o1/v/t0/f2/m340/AQNO2cBUu_Y0XknawUHcPDnaXdkLJA1YIFAj-eQ4ZRXpIVVx67taSP_p6eOnqTAOVSLZYHT_Hz9QkUYNLv9bJUCdv6atXhpopTXzgHucdAwk714zHYZHZ166dRziUCzAhkiYlmmU8Z28bkvNrzcTTMhoAG0niw.jpeg?_nc_ht=scontent.fixm4-4.fna.fbcdn.net&_nc_cat=103&ccb=9-4&oh=00_AYC-ai9zJAiZR_8MNl62RLCCrpN6EjpZibnq-ZKx78wVog&oe=6782FA07&_nc_sid=5b3566",
      description: "Discover the benefits of green spaces in urban environments.",
    },
    {
      id: 5,
      title: "The Evolution of Smart Cities",
      image: "https://scontent.fixm4-4.fna.fbcdn.net/o1/v/t0/f2/m340/AQNDQ7W3z9gNpRKFuq2XBzI4actjyE73RBO-qXv-yjbURCM04KZTAh46o3vqgUhfuMwbtYaFYhH2ApUYWFO19LsYwmHArRy9aOxP0q1-fWj2pCrY01g7ZJj7W3w9Hr1F4L2Gi22uQ2LO-pSPiErciyexYA1Plw.jpeg?_nc_ht=scontent.fixm4-4.fna.fbcdn.net&_nc_cat=110&ccb=9-4&oh=00_AYBX5aUSAmNZOkDurlnC33sBn-WbsKWmJMdir4GnMj6L4g&oe=6782D574&_nc_sid=5b3566",
      description: "Understand how smart cities are reshaping our world.",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % blogs.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + blogs.length) % blogs.length);
  };

  return (
    <div className="relative h-[500px] w-full py-20 bg-black border-[3px] border-cyan-400 overflow-hidden">
      {/* Navigation Container */}
      <div className="navigator absolute top-4 left-1/2 transform -translate-x-1/2 flex items-center justify-between w-1/3 bg-purple-500 bg-opacity-75 backdrop-blur-md rounded-full px-6 py-3 shadow-lg z-10 border-[3px] border-black cursor-pointer hover:bg-cyan-400 transition-all duration-300">
        <button
          onClick={handlePrev}
          className="text-white hover:text-gray-700 transition-colors"
        >
          <AiOutlineLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className="text-white hover:text-gray-700 transition-colors"
        >
          <AiOutlineRight className="w-6 h-6" />
        </button>
      </div>

      {/* Main Container */}
      <div className="relative flex overflow-hidden items-center justify-center">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / 3)}%)`,
            width: `${(blogs.length / 3) * 100}%`,
          }}
        >
          {blogs.map((blog, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-[33.33%] px-4 ${
                Math.abs(currentIndex - index) < 3 ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="flex bg-white shadow-lg overflow-hidden">
                {/* Sidebar */}
                <div className="w-32 bg-gray-200 backdrop-blur-md border-[3px] flex flex-col px-4 py-6 gap-4 hover:bg-gray-300 hover:bg-opacity-80 transition-all duration-300 cursor-pointer" style={{ borderColor: 'lime' }}>
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
                <div className="flex-1 w-[250px]  p-6 border-[3px] border-cyan-300 hover:shadow-xl transition-shadow duration-300 cursor-pointer bg-opacity-50">
                  <article className="max-w-2xl">
                    <h1 className="text-2xl font-bold mb-4">{blog.title}</h1>
                    <div className="aspect-video rounded-lg overflow-hidden mb-4">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* <p className="text-gray-800">
                      Explore the topic of {blog.title} with insights and
                      analyses from experts.
                    </p> */}
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
