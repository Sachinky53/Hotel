import React from "react";
import "./Hotels.css";

const Hotels = () => {
  return (
    <div className="booking-container">
      <h2 className="booking-title">Book Hotels and Homestays</h2>
      <div className="booking-box">

        {/* Where to */}
        <fieldset className="input-group">
          <legend>Where to</legend>
          <input
            type="text"
            placeholder="e.g. - Area, Landmark or Property Name"
            className="input-field"
          />
        </fieldset>

        {/* Check-in */}
        <fieldset className="input-group">
          <legend>Check-in</legend>
          <input type="date" className="date-input" />
        </fieldset>

        {/* Check-out */}
        <fieldset className="input-group">
          <legend>Check-out</legend>
          <input type="date" className="date-input" />
        </fieldset>

        {/* Guests & Rooms */}
        <fieldset className="input-group">
          <legend>Guests & Rooms</legend>
          <input type="text" className="input-field" />
          
        </fieldset>

        {/* Search Button */}
        <button className="search-button">SEARCH</button>
      </div>
    </div>
  );
};

export default Hotels;
