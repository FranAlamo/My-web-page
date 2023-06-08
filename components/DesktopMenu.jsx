import React, { useEffect, useState } from "react";
import "../components/DesktopMenu.css";
import { Link } from "react-router-dom";

function DesktopMenu() {
  const [showMenu, setShowMenu] = useState(false);

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return showMenu ? (
    <nav className="desktop-menu">
      <ul className="desktop-menu-styles">
        <li>
          <a href="/" className="menu-desktop">
            About
          </a>
        </li>
        <li>
          <a href="/skills" className="menu-desktop">
            Skills
          </a>
        </li>
        <li>
          <a href="/work" className="menu-desktop">
            Work
          </a>
        </li>
        <li>
          <a href="/contact" className="menu-desktop">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  ) : null;
}

export default DesktopMenu;
