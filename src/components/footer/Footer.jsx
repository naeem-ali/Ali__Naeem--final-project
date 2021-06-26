import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-container">
        <div className="address">
          <p>
            <span>
              <i className="fas fa-map-marker-alt"></i>
            </span>
            850 Canterbury Ave, Ottawa ON
          </p>
          <p>
            <span>
              <i class="fas fa-envelope"></i>
            </span>
            naeem.nizarali@gmail.com
          </p>
          <p>
            <span>
              <i class="fas fa-phone-alt"></i>
            </span>
            +1 306-209-9939
          </p>
        </div>
        <div className="footer-links">
          <a href="#intro">Home</a>
          <a href="#work">Work</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="social-media">
          <p>
            <span>
              <i class="fab fa-facebook-square"></i>
            </span>
            Facebook
          </p>
          <p>
            <span>
              <i class="fab fa-linkedin"></i>
            </span>
            Linkedin
          </p>
          <p>
            <span>
              <i class="fab fa-behance-square"></i>
            </span>
            Behance
          </p>
        </div>
        <p className="copyright">© Naeem 2021</p>
      </section>
    </footer>
  );
};

export default Footer;
