import React from 'react'
import './BookNow.css'

function BookNow({ onClose }) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div className="modal1 ">
        <div className="modal-content1">
          <span className="close-btn" onClick={onClose}>✖</span>
          <h2 className="modal-title">Confirm Booking</h2>
          <div className="modal-body">
            <div className='photo-room'>
              <img src="./public/roomImages/room01.jpg" alt="Room" />
            </div>
            <div className="room-details-book">
              <h1>Booking Details</h1>
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  // value={formData.name}
                  // onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  // value={formData.email}
                  // onChange={handleChange}
                  required
                />
              </div>
              <input
                type="text"
                name="pincode"
                id="pincode"
                placeholder="Address"
                // value={formData.pincode}
                // onChange={handleChange}
                required
              />
              <input
                type="text"
                name="pincode"
                id="pincode"
                placeholder="Pincode"
                // value={formData.pincode}
                // onChange={handleChange}
                required
              />
            </div>
          </div>

        </div>
      </div>
    </>

  )
}

export default BookNow
