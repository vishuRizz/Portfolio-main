import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function SideBar({ darkMode }) {
  return (
    <div
      className={`fixed left-0 flex flex-col items-center w-20 h-auto p-4 space-y-8 ${
        darkMode ? "text-black bg-slate-100" : "text-white bg-black"
      }  transform translate-x-0  shadow-lg rounded-r-xl top-1/4`}
    >
      <a
        href="https://www.linkedin.com/in/vishu-pratap-soft-dev/"
        target="_blank"
        rel="noopener noreferrer"
        className="no-underline group"
      >
        <div className="flex flex-col items-center ">
          <FaLinkedin
            color={`${darkMode ? "black" : "white"}`}
            className="text-gray-500 transition-colors duration-300 group-hover:text-blue-500"
            size={32}
          />
          <span className={`mt-2 text-xs text-gray-400 transition-colors duration-300 ${darkMode? 'group-hover:text-black': 'group-hover:text-white'} `}>
            LinkedIn
          </span>
        </div>
      </a>
      <a
        href="https://github.com/vishuRizz"
        target="_blank"
        rel="noopener noreferrer"
        className="no-underline group"
      >
        <div className="flex flex-col items-center">
          <FaGithub
            color={`${darkMode ? "black" : "white"}`}
            className="text-gray-500 transition-colors duration-300 group-hover:text-gray-300" // Hover color changed to lighter gray
            size={32}
          />
          <span className={`mt-2 text-xs text-gray-400 transition-colors duration-300 ${darkMode? 'group-hover:text-black': 'group-hover:text-white'}`}>
            GitHub
          </span>
        </div>
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="no-underline group"
      >
        <div className="flex flex-col items-center">
          <FaInstagram
            color={`${darkMode ? "black" : "white"}`}
            className={` transition-colors duration-300  group-hover:text-pink-500`}
            size={32}
          />
          <span className={`mt-2 text-xs text-gray-400  transition-colors duration-300 ${darkMode? 'group-hover:text-black': 'group-hover:text-white'}`}>
            Instagram
          </span>
        </div>
      </a>
    </div>
  );
}

export default SideBar;
