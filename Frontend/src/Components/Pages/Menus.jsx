import React from 'react';
import './Menus.css'; 
import Menu01 from '/MenuImage/Menu01.jpg'
import Menu02 from '/MenuImage/Menu02.jpg'

const menuItems = [
  { id: 1, image: Menu01},
  { id: 2, image: Menu02 },
 
];

export default function Menus() {
  return (
    <div className="menu-container-layout">
      {menuItems.map((item) => (
        <div key={item.id} className="menu-main-content">
          <img src={item.image} alt="Menu Item" className="menu-image" />
        </div>
      ))}
    </div>
  );
}
