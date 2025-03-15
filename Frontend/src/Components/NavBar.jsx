import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { VscAccount } from "react-icons/vsc";
import { RxHamburgerMenu } from "react-icons/rx";
import axios from "axios";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    picture: "",
    pincode: "",
    password: "",
  });
  const [loginOpen, setLoginOpen] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })
  const profileRef = React.useRef(null);
  const handleLoginchange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

 
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", loginData);
  }
  // Toggle menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProfileMenu = () => {
    setProfileOpen(!profileOpen);
  };

  //profile close if we any where outside the profile
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
        setIsOpen(false);
      }

    }
    //when i scroll it should close
   
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  },[])
  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFileChange = (e) => {
    setFormData({ ...formData, picture: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
    setSignupOpen(false); // Close modal after submission
    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("phoneNumber", formData.phoneNumber);
      data.append("pincode", formData.pincode);
      data.append("password", formData.password);
      data.append("picture", formData.picture);
 
      const response = axios.post("http://localhost:4000/api/user/register", data);
      console.log(response.data);

    } catch (error) {
      console.error(error);
    }
  };

  //when sign up is clicked when signup modal is open and login modal is closed
  const handleSignupClick = () => {
    setSignupOpen(true);
    setLoginOpen(false);
  }

  const handleLoginClick = () => {
    setLoginOpen(true);
    setSignupOpen(false);
  }
  //when i click anywhere outside the profile it should close
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("admin-control")) {
      setProfileOpen(false);
    }
  }
  return (
    <>
      <nav className="nav-bar">
        <div className="hamburger" onClick={toggleMenu}>
          <RxHamburgerMenu />
        </div>

        <div className="nav-left">
          <h2 className="brand-name">Mr Hotelier</h2>
        </div>

        <div className={`nav-center ${isOpen ? "active" : ""}`}>
          <ul className="nav-center-option">
            <li><a href="#">Home</a></li>
            <li><a href="#">Hotels</a></li>
            <li><a href="#">Our Service</a></li>
            <li><a href="#">Our Rooms</a></li>
            <li><a href="#">Contact Us</a></li>

          </ul>
        </div>

        <div className={`admin-control ${profileOpen ? "active" : ""}`} ref={profileRef}>
          <button className="signup-btn" onClick={() => setSignupOpen(true)}>
            Sign Up
          </button>
          <button className="login-btn" onClick={() => setLoginOpen(true)}>Log In</button>
        </div>

        <div className="right-nav" ref={profileRef} onClick={toggleProfileMenu}>
          <VscAccount />
        </div>

        {/* Signup Form Modal */}
        
        {signupOpen && (
  <div className="modal">
    <div className="modal-content">
      <span className="close-btn" onClick={() => setSignupOpen(false)}>✖</span>
      <h2 className="modal-title">Sign Up</h2>

      <form onSubmit={handleSubmit} className="signup-form">
        {/* Name & Email in One Row */}
        <div className="form-row">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Phone Number & Profile Picture */}
        <div className="form-row">
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
          <input
            type="file"
            name="picture"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
        </div>

        {/* Pincode */}
        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          value={formData.pincode}
          onChange={handleChange}
          required
        />

        {/* Password & Confirm Password */}
        <div className="form-row">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Sign Up</button>
        <p className="signup-text">Already have an account? <span className="signup-link text-blue-500 border-b border-blue-500 cursor-pointer font-bold" onClick={handleLoginClick}>Log In</span></p>
      </form>
    </div>
  </div>
)}

        {/* Login Form Modal */}
        {loginOpen && (
          <div className="login-modal">
            <div className="login-modal-content">
              <span className="close-btn" onClick={() => setLoginOpen(false)}>
                ✖
              </span>
              <h2 className="modal-title">Log In</h2>

              <form onSubmit={handleLoginSubmit} className="login-form">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={loginData.email}
                  onChange={handleLoginchange}
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={loginData.password}
                  onChange={handleLoginchange}
                  required
                />
                <button type="submit" className="login-btn1">Log In</button>
                <p className="signup-text">Don't have an account? <span className="signup-link text-blue-500 border-b border-blue-500 cursor-pointer font-bold" 
                onClick={
                  handleSignupClick
                }
                
                >Sign Up</span></p>
                <p className="forgot-password text-blue-500 cursor-pointer font-bold"><span className="border-b border-blue-500">Forgot Password?</span></p>

              </form>
            </div>
          </div>
        )}

             
      </nav>
    </>
  );
}
