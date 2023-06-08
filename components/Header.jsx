import React from "react";
import { Link } from "react-router-dom";
import "../pages/styles/Header.css";
import Mandala from "../src/assets/Icons/mandala-svgrepo-com.svg";
import ArrowBack from "../src/assets/Icons/previous-arrow-backward-svgrepo-com.svg";
const Header = (props) => {
  const { margin, pageTitle, titleColor, arrowBack } = props;

  const containerStyle = {
    margin: margin,
    backgroundImage: `url(${Mandala})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    padding: "20px",
  };

  const titleStyle = {
    fontSize: "150%",
    fontWeight: "bold",
    marginBottom: "5px",
    color: titleColor,
  };

  return (
    <header className="header-container" style={containerStyle}>
      <div className="icons-header">
        <Link to="/" className="back-link">
          <img src={ArrowBack} alt="Arrow Back" className="back-icon" />
        </Link>
      </div>
      <div className="header-content">
        <h1 style={titleStyle}>{pageTitle}</h1>
      </div>
    </header>
  );
};

export default Header;
