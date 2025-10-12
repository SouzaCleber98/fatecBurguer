import { useState } from "react";
import Logo from "../ui/Logo"
import NavLink from "../ui/NavLink";
import DarkModeSwitcher from "../ui/DarkModeSwitcher";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Cardápio" },
  { href: "/about", label: "Sobre" },
  { href: "/contact", label: "Contato" },
];

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
              <NavLink links={navLinks} />
            </nav>
          </div>

          <nav className="menu">
            <NavLink links={navLinks} />
          </nav>

          <DarkModeSwitcher />
        </div>
      </div>
    </header>
  );
}

export default Header;
