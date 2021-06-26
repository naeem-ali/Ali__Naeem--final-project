import React from "react";
import "./portfolio.scss";
const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <img src="images/pt.png" alt="" />
      <div className="main-container">
        <h1>Portfolio</h1>

        <ul>
          <li>Web App</li>
          <li>Mobile App</li>
          <li>Design</li>
          <li>Branding</li>
        </ul>

        <div className="container">
          <div className="item">
            <img
              src="https://images.creativemarket.com/0.1.0/ps/3972588/580/386/m2/fpnw/wm0/1c-.jpg?1518088177&s=fb925fe4deb1d3407163b5786f6f5d35"
              alt=""
              width="200px"
              height="200px"
            />
            <h3>Bank App</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
