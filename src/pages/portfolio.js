import React from "react";
import { PortfolioList } from '../helpers/PortfolioList';
import "../styles/Menu.css";
import PortfolioItem from "../components/PortfolioItem";

function Portfolio() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Portfolio</h1>
        <div className="menuList">
            { PortfolioList.map((portfolioItem, key) => {
                return (
                  <PortfolioItem>
                    key={key}
                    image={portfolioItem.image}
                    name={portfolioItem.name}
                    location={portfolioItem.location}
                  </PortfolioItem>
                );
            })}
        </div>
    </div>
  );
}

export default Portfolio;