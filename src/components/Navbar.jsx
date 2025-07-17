import React from "react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className={`shadow-lg px-6 py-4 flex justify-between items-center mb-5
    ${theme === "light" ? "bg-white" : "bg-zinc-900"}`}
    >
      <h1 className="font-medium text-lg">Course Catalog</h1>

      <nav>
        <button
          onClick={toggleTheme}
          className={`rounded px-4 py-1 ${
            theme === "light"
              ? "bg-gray-900 text-white"
              : "bg-gray-400 text-black"
          }`}
        >
          {theme === "light" ? "Dark" : "Light"}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
