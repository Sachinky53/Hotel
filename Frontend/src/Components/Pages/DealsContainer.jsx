import { useState } from "react";
import "./DealsContainer.css";

const DealsContainer = () => {
  const [showAll, setShowAll] = useState(false);

  const cards = [
    { id: 1, image: "https://via.placeholder.com/150" },
    { id: 2, image: "https://via.placeholder.com/150" },
    { id: 3, image: "https://via.placeholder.com/150" },
    { id: 4, image: "https://via.placeholder.com/150" },
    { id: 5, image: "https://via.placeholder.com/150" },
    { id: 6, image: "https://via.placeholder.com/150" },
    { id: 7, image: "https://via.placeholder.com/150" },
    { id: 8, image: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="deals-container">
      <h2 className="deals-title">Deals with Appeal</h2>
      <div className="deals-grid">
        {(showAll ? cards : cards.slice(0, 6)).map((card) => (
          <div key={card.id} className="deals-card">
            <img src={card.image} alt="Deal" className="deals-image" />
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
