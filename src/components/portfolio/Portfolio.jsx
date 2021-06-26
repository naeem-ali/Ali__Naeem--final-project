import { useState, useEffect } from "react";
import "./portfolio.scss";
import PortfolioList from "./PortfolioList";
import {
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  brandingPortfolio,
} from "../../components/data";
const Portfolio = () => {
  const [selected, setSelected] = useState("Web");
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (selected) {
      case "Web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "branding":
        setData(brandingPortfolio);
        break;
      default:
        setData(webPortfolio);
    }
  }, [selected]);

  const list = [
    {
      id: "Web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "branding",
      title: "Branding",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <img src="images/pt.png" alt="" className="bg-img-p" />
      <div className="main-container">
        <h1>Portfolio</h1>

        <ul>
          {list.map((item) => (
            <PortfolioList
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          ))}
        </ul>

        <div className="container">
          {data.map((d) => (
            <div className="item">
              <img src={d.img} alt="" />
              <h3>{d.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
