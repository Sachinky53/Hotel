import React from 'react'

function BookNow() {
    const [showModal, setShowModal] = React.useState(false);
  return (
    <>
    <div className="modal">
    <div className="modal-content">
      <span className="close-btn" onClick={() => setShowModal(false)}>✖</span>
      <h2 className="modal-title">Sign Up</h2>

      <form  className="signup-form">
        {/* Name & Email in One Row */}
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

        {/* Phone Number & Profile Picture */}
        <div className="form-row">
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            // value={formData.phoneNumber}
            // onChange={handleChange}
            required
          />
          <input
            type="file"
            name="picture"
            accept="image/*"
            // onChange={handleFileChange}
            required
          />
        </div>

        {/* Pincode */}
        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
        //   value={formData.pincode}
        //   onChange={handleChange}
          required
        />

        {/* Password & Confirm Password */}
        <div className="form-row">
          <input
            type="password"
            name="password"
            placeholder="Password"
            // value={formData.password}
            // onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            // value={formData.confirmPassword}
            // onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Sign Up</button>
        <p className="signup-text">Already have an account? <span className="signup-link text-blue-500 border-b border-blue-500 cursor-pointer font-bold" 
        // onClick={handleLoginClick}
        >Log In</span></p>
      </form>
    </div>
  </div>
    </>
    
  )
}

export default BookNow
