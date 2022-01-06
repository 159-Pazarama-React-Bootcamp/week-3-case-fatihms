import React, { useState, useEffect } from "react";
import "./styles.css";

function HomePage() {
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    setFullName(localStorage.getItem("user"));
  }, []);
  return (
    <div className="home-page-container">
      <h1 className="hp-h1">Merhaba, {fullName}</h1>
      <br />
      <button className="hp-button">Çıkış yap</button>
    </div>
  );
}

export default HomePage;
