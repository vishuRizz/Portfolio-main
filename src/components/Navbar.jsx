import React from 'react';
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6">
      <div className="text-2xl font-bold">LOGO</div>
      <ul className="hidden space-x-8 md:flex">
        <li className="hover:underline">Home</li>
        <li className="hover:underline">Skills</li>
        <li className="hover:underline">Projects</li>
        
        <li className="flex space-x-4">
          <a href="#" className="text-white hover:underline"><CiLinkedin size={25} /></a>
          <a href="#" className="text-white hover:underline"><FaGithub size={25}/></a>
          <a href="#" className="text-white hover:underline"><FaInstagram size={25}/></a>
        </li>
      </ul>
      <button className="px-4 py-2 border border-white rounded hover:bg-white hover:text-black">Let’s Connect</button>
    </nav>
  );
}

export default Navbar;