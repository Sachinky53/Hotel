import { useState } from "react";
import "./DealsContainer.css";
// import ServicesRoom from "/servicePicture/ServicesRoom.jpg";
import Deals01 from '/DealsImage/Deals01.jpg'
import Deals02 from '/DealsImage/Deals02.jpg'
import Deals03 from '/DealsImage/Deals03.jpg'
import Deals04 from '/DealsImage/Deals04.jpg'
import Deals05 from '/DealsImage/Deals05.jpg'
import Deals06 from '/DealsImage/Deals06.jpg'

const DealsContainer = () => {
  const [showAll, setShowAll] = useState(false);

  const cards = [
    { DealImage: Deals01 },
    { DealImage: Deals02 },
    { DealImage: Deals03 },
    { DealImage: Deals04 },
    { DealImage: Deals05 },
    { DealImage: Deals06 },

    
  ];

  return (
    <div className="deals-container">
      <h2 className="deals-title">Deals with Appeal</h2>
      <div className="deals-grid-container">
        {(showAll ? cards : cards.slice(0, 6)).map((card, index) => (  // Fixed map function
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
