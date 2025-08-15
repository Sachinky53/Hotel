import React, { useState } from "react";
import NavBar from "../NavBar";

import "./Hotels.css";
const Hotels = () => {
  const [modelOpen, setModelOpen] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [guestInfo, setGuestInfo] = useState("1 Adult, 0 Children");

  // Open modal
  const handleOpenModal = () => setModelOpen(true);

  // Close modal
  const handleCloseModal = () => setModelOpen(false);

  // Save Button Logic
  const handleSaveBtn = () => {
    setGuestInfo(
      `${adults} Adult${adults > 1 ? "s" : ""}, ${children} Child${
        children > 1 ? "ren" : ""
      }`
    );
    handleCloseModal();
  };

  return (
    <>
      <NavBar />
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
            <input
              type="text"
              className="input-field"
              onClick={handleOpenModal}
              value={guestInfo}
              readOnly
            />
          </fieldset>

          {/* Search Button */}
          <div className="search-btn-hotel">
            <button className="search-button">SEARCH</button>
          </div>
        </div>

        {/* Modal for Guests & Rooms */}
        {modelOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h3 className="selection-guest-room">Select Guests & Rooms</h3>

              {/* Adults */}
              <div className="guest-option-adults">
                <label>Adults</label>
                <div className="counter-adults">
                  <button
                    className="less-operation-adults"
                    onClick={() => setAdults(Math.max(1, adults - 1))}
                  >
                    -
                  </button>
                  <span className="adults-operation">{adults}</span>
                  <button
                    className="add-operation-adults"
                    onClick={() => setAdults(adults + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Children */}
              <div className="guest-option-children">
                <label>Children</label>
                <div className="counter-children">
                  <button
                    className="less-children-btn"
                    onClick={() => setChildren(Math.max(0, children - 1))}
                  >
                    -
                  </button>
                  <span className="children-operation">{children}</span>
                  <button
                    className="add-children-btn"
                    onClick={() => setChildren(children + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Modal Action Buttons */}
              <div className="modal-action-btn">
                <button
                  className="cancel-btn-guest-room"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
                <button className="ok-btn-guest-room" onClick={handleSaveBtn}>
                  Ok
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Hotels;
