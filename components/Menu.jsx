import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../src/assets/Icons/menu.svg";
import "../components/Menu.css";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-menu">
      <button onClick={toggleMenu} className="icon-button">
        <img src={Menu} alt="Menu" className="image-icon" />
      </button>
      {isOpen && (
        <ul className="menu-items">
          <li>
            <Link to="/" className="menu-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/skills" className="menu-link">
              Skills
            </Link>
          </li>
          <li>
            <Link to="/work" className="menu-link">
              Work
            </Link>
          </li>
          <li>
            <Link to="/contact" className="menu-link">
              Contact
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
