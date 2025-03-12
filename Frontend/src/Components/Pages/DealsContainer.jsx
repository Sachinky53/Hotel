import { useState } from "react";
import "./DealsContainer.css";
import ServicesRoom from "/servicePicture/ServicesRoom.jpg";  

const DealsContainer = () => {
  const [showAll, setShowAll] = useState(false);

  const cards = [
    { DealImage: ServicesRoom},
    { DealImage: "https://via.placeholder.com/150" },
    { DealImage: "https://via.placeholder.com/150" },
    { DealImage: "https://via.placeholder.com/150" },
    { DealImage: "https://via.placeholder.com/150" },
    { DealImage: "https://via.placeholder.com/150" },
    { DealImage: "https://via.placeholder.com/150" },
    { DealImage: "https://via.placeholder.com/150" }
  ];

  return (
    <div className="deals-container">
      <h2 className="deals-title">Deals with Appeal</h2>
      <div className="deals-grid">
        {(showAll ? cards : cards.slice(0, 6)).map((index,card) => (
          <div key={index} className="deals-card">
            <img src={card.DealImage} alt="Deal" className="deals-image" />
          </div>
        ))}
      </div>
      <button className="show-all-button" onClick={() => setShowAll(!showAll)}>
        {showAll ? "Show Less" : "Show all"}
      </button>
    </div>
  );
};

export default DealsContainer;
