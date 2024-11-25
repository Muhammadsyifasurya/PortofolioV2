import React from "react";
import "./button.css";

const Button = ({ btnText }) => {
  const handleClick = () => {
    window.open(
      "/src/assets/document/CV_Muhammad Syifa Surya Saputra (Update Oktober 2024).pdf",
    );
  };

  return (
    <button className="button" onClick={handleClick}>
      {btnText}
    </button>
  );
};

export default Button;
