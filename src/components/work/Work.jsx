import React, { useState } from "react";
import "./work.scss";

const Work = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  const data = [
    {
      id: 1,
      company: "Company Name 1",
      date: "December 01, 2010",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat numquam perferendis necessit atibus rerum! Nihilconsequuntur sapiente obcaecati esse, nemo quia. Ad hic neque dicta placeat voluptates exercitationem quasi sapiente rerum.",
    },
    {
      id: 2,
      company: "Company Name 2",
      date: "May 25, 2016",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat numquam perferendis necessit atibus rerum! Nihilconsequuntur sapiente obcaecati esse, nemo quia. Ad hic neque dicta placeat voluptates exercitationem quasi sapiente rerum.",
    },
    {
      id: 3,
      company: "Company Name 3",
      date: "February 08, 2018",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat numquam perferendis necessit atibus rerum! Nihilconsequuntur sapiente obcaecati esse, nemo quia. Ad hic neque dicta placeat voluptates exercitationem quasi sapiente rerum.",
    },
  ];

  const handelClick = (way) => {
    way === "left"
      ? setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : 2)
      : setCurrentSlider(
          currentSlider < data.length - 1 ? currentSlider + 1 : 0
        );
  };

  return (
    <div className="work" id="work">
      <div className="work-container" id="resume">
        <div className="left">
          <img src="images/illus-ex.png" alt="" />
        </div>

        <div className="right">
          <h2>
            Work <span>Experience</span>
          </h2>
          <div
            className="slider"
            style={{ transform: `translateX(-${currentSlider * 935}px)` }}
          >
            {data.map((d) => (
              <div className="con-work">
                <div className="item">
                  <h1>{d.company}</h1>
                  <p>{d.date}</p>
                  <p>{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <i
            className="fas fa-chevron-left arrow-1 arrow-left"
            onClick={() => handelClick("left")}
          ></i>
          <i
            className="fas fa-chevron-right arrow-1 arrow-right"
            onClick={() => handelClick()}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Work;
