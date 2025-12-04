import { useState, useEffect } from "react";
import {
  getDarkModeStatus,
  setDarkModeInLocalStorage,
  updateDarkModeClass,
} from "../../utils/darkMode.js";

function DarkModeSwitcher() {
  const [darkMode, setDarkMode] = useState(getDarkModeStatus());

  useEffect(() => {
    setDarkModeInLocalStorage(darkMode);
    updateDarkModeClass(darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      id="darkModeToggle"
      onClick={toggleDarkMode}
      title="Alternar modo escuro"
    >
      <span className="dark-toggle-track">
        <span className="dark-toggle-knob"></span>
      </span>
    </button>
  );
}

export default DarkModeSwitcher;
