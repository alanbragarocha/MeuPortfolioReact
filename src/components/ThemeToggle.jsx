import React, { useState, useEffect } from "react";
import moonIcon from "../assets/images/moon.svg";
import sunIcon from "../assets/images/sun.svg";

function ThemeToggle({ className = "" }) {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.documentElement.setAttribute("data-theme", savedTheme);
      setIsDarkTheme(savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkTheme ? "light" : "dark";
    setIsDarkTheme(!isDarkTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      className={`theme-toggle ${className}`}
      aria-label="Alternar tema"
      onClick={toggleTheme}
    >
      <img
        src={isDarkTheme ? sunIcon : moonIcon}
        alt={isDarkTheme ? "Modo claro" : "Modo escuro"}
        className="theme-icon"
      />
    </button>
  );
}

export default ThemeToggle;
