/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useEffect, useState } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { MdToggleOff, MdToggleOn } from "react-icons/md";

const ThemeController = () => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const [darkMode, setDarkMode] = useState(prefersDarkMode);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="flex items-center gap-2 text-gray-500">
      <button onClick={toggleTheme}>
        {darkMode ? (
          <MdToggleOn className="text-3xl text-purple-600" />
        ) : (
          <MdToggleOff className="text-3xl" />
        )}
      </button>
      <IoMoonOutline/>
    </div>
  );
};

export default ThemeController;
