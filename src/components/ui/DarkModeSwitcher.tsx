import { useTheme } from "../../context/ThemeContext";

function DarkModeSwitcher() {
  const { toggleTheme } = useTheme();

  return (
    <button
      id="darkModeToggle"
      onClick={toggleTheme}
      title="Alternar modo escuro"
      aria-label="Alternar modo escuro"
    >
      <span className="dark-toggle-track">
        <span className="dark-toggle-knob"></span>
      </span>
    </button>
  );
}

export default DarkModeSwitcher;
