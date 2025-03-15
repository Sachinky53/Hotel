import React from 'react';
import './Menus.css'; 

const menuItems = [
  { id: 1, image: 'https://source.unsplash.com/400x300/?food' },
  { id: 2, image: 'https://source.unsplash.com/400x300/?dishes' },
 
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
