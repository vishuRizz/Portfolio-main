import React from "react";
import ModeButton from "./ModeButton";

function Header({ setDarkMode, darkMode }) {
  return (
    <header className="flex items-center justify-between p-3 ml-2">
      <div className="flex items-center space-x-2">
        <span className="text-2xl">Vishu Pratap</span>
      </div>
      <nav>
        <ul className="items-center justify-between hidden space-x-8 md:flex">
          <li className="hover:underline">Works</li>
          <li className="hover:underline">Resume</li>
          <li className="hover:underline">Services</li>
          <li className="hover:underline">Contact</li>
          <li>
            <div >
            <ModeButton setDarkMode={setDarkMode}  darkMode={darkMode}  />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
