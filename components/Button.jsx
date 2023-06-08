import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/Button.css";

const MyButton = () => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    navigate("/Contact");
  };

  const buttonClassName = isClicked ? "get-in-touch clicked" : "get-in-touch";

  return (
    <button className={buttonClassName} onClick={handleClick} id="name-button">
      Get in Touch
    </button>
  );
};

export default MyButton;
