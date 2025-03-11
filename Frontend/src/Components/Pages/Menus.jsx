import React, { useState } from 'react';
import './Menus.css';

export default function Menus() {
  const [showAll, setShowAll] = useState(false);

  const menus = [
    { id: 1, img: '' },
    { id: 2, img: '' },
    { id: 3, img: '' },
    { id: 4, img: '' },
 
  ];

  const visibleMenus = showAll ? menus : menus.slice(0, 2);

  return (
    <div className="menus-container-layout">
      <div className="menu-container-title">
        <div className="menu-title">Menus</div>
      </div>
      <div className="menu-container-layout">
      <div className="menu-grid">
        {visibleMenus.map((menu) => (
          <div key={menu.id} className="menu-card">
            <img className='menu-image' src={menu.img} alt={`Menu ${menu.id}`} />
          </div>
        ))}
      </div>
     </div>
      <button className="view-all-btn" onClick={() => setShowAll(!showAll)}>
        {showAll ? 'Show Less' : 'View all'}
      </button>
    </div>
  );
}