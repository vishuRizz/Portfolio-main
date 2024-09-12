import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SideBar from "./components/SideBar";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <div className={`min-h-screen ${darkMode ? 'bg-black text-white' : 'bg-white text-black'} transition-colors duration-300`}>
        <Header setDarkMode={setDarkMode} darkMode={darkMode} />
        <Hero />
        <SideBar darkMode={darkMode} />
      </div>
    </>
  );
}

export default App;
