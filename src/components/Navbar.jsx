import React from "react";
import { useTheme } from "../context/ThemeContext";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const favorites = useSelector((state) => state.favorites.items);
  const favoritesCount = favorites.length;

  return (
    <header
      className={`shadow-lg px-6 py-4 flex justify-between items-center mb-5
    ${theme === "light" ? "bg-white" : "bg-zinc-900"}`}
    >
      <h1 className="font-medium text-lg">Course Catalog</h1>

      <nav className="flex gap-4 items-center">
        <div className="relative mr-4">
          <span className="font-medium">Favorites</span>
          {favoritesCount > 0 && (
            <span className="absolute -top-2 -right-4 bg-red-600 text-xs  px-2 py-0.5 text-white rounded-full">
              {favoritesCount}
            </span>
          )}
        </div>

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
