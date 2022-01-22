import React from "react";
import "../styles/styles.css";

export default function Header() {
  return (
    <div className="header">
    <img src={`${process.env.PUBLIC_URL}/images/Troll-Face.png`} alt="troll face" className="header__logo" />
      <h1 className="header__title">Meme Generator</h1>
      <h3 className="header__subtitle">React Course - Project 3</h3>
    </div>
  );
}
