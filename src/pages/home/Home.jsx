import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      {/* Background Video */}
      <video autoPlay muted loop playsInline className="back-video">
        <source src="/video/hogwarts.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default Home;
