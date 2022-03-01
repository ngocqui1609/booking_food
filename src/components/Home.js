import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/food.jpeg";
import "../css/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1 style={{ fontWeight: "bold" }}> Food Corner </h1>
        <p>TIME TO ODER FOOD FROM 8 A.M TO 19 P.M</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
