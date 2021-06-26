import React, { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped";

const Intro = () => {
  const textRef = useRef();
  useEffect(() => {
    console.log(textRef);
    init(textRef.current, {
      backDelay: 1500,
      showCursor: false,
      strings: ["Designer", "Developer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <section className="main-container-intro">
        <img src="images/head-bg.png" alt="home-bg" className="home-bg" />
        <div className="intro-container">
          <div className="left">
            <h1>
              <span>Hi, I'm</span> Naeem Ali
            </h1>
            <h4>
              Freelance <span ref={textRef}>Designer</span>
            </h4>
            <p>
              I'm Currently studying Full Stack Web Development at School Of
              York University
            </p>
            <a href="#portfolio">Portfolio</a>
            <div className="downArrow">
              <span className="line-1"></span>
              <span className="line-2"></span>
            </div>
          </div>

          <div className="right">
            <img src="images/illus.png" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Intro;
