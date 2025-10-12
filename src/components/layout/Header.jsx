import { useState } from "react";
import Logo from "../ui/Logo"
import DarkModeSwitcher from "../ui/DarkModeSwitcher";

function Header() {

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenuVisibility = () => {
    setIsMenuVisible(!isMenuVisible)
  };

  return (
    <header>
      <div className="header">
        <Logo />
        <div className="nav-container">
          <div className="submenu">
            <button className={`submenubtn ${isMenuVisible ? "active" : ""}`}
              onClick={toggleMenuVisibility}>☰
            </button>
            <nav className={`submenu-content ${isMenuVisible ? "active" : ""}`}>
              <a href="#">Home</a>
              <a href="menu.html">Cardápio</a>
              <a href="about.html">Sobre</a>
              <a href="contact.html">Contato</a>
            </nav>
          </div>

          <nav className="menu">
            <a href="#">Home</a>
            <a href="menu.html">Cardápio</a>
            <a href="about.html">Sobre</a>
            <a href="contact.html">Contato</a>
          </nav>

          <DarkModeSwitcher />
        </div>
      </div>
    </header>
  );
}

export default Header;
