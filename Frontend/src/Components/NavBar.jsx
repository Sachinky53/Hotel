import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { VscAccount } from "react-icons/vsc";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";

import axios from "axios";
import Profile from "./Pages/Profile";
import { Link } from "react-router-dom";

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
    confirmPassword: "",
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

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  //get cookie token
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';')[0];
  };

  //check auth when the page reload
  useEffect(() => {
    const checkAuth =async () => {
      const token = getCookie("token");
    // console.log("yy",token);
    if (token) {
      // console.log("token", token); 
      try {
        const resp = await axios.get("http://localhost:4000/api/user/auth", { headers: { Authorization: `Bearer ${token}` } });
        console.log(resp.data);
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
      }
    }
    }
    checkAuth();
  }, [getCookie("token")]);
  

  //logout
  const handleLogout = async() => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    // window.location.reload();
   window.location.href = "/";
    
    setIsAuthenticated(false);
  };
 
  
  // Toggle menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProfileMenu = () => {
    setProfileOpen(!profileOpen);
  };

  //profile close if we any where outside the profile
   // ✅ Dependencies added
  
  
  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFileChange = (e) => {
    setFormData({ ...formData, picture: e.target.files[0] });
  };

  const handleSubmit = async(e) => {
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
      data.append("confirmPassword", formData.confirmPassword);
      data.append("picture", formData.picture);
 
      const response =await axios.post("http://localhost:4000/api/user/register", data);
      console.log(response.data);

    } catch (error) {
      console.error(error);
    }
  };

  //login form

  const handleLoginSubmit =async (e) => {
    e.preventDefault();
    // console.log("Login Data:", loginData);
    try {
      const resp =await axios.post("http://localhost:4000/api/user/login", loginData);
      console.log(resp.data);
      if (resp.status === 200) {
        //cookie token
        const token = resp.data.token;
        const options = {
          expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
          httpOnly: true,
        };
        document.cookie = `token=${token}; ${options}`;
        // window.location.href = "/admin";
      }
      setLoginOpen(false);
      setIsAuthenticated(true);
    } catch (error) {
      console.error(error);
    }
  }


 

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
 
  
  return (
    <>
      <nav className="nav-bar">
        <div className="hamburger" onClick={toggleMenu}>
          <RxHamburgerMenu />
        </div>

        <div className="nav-left">
          <h2 > Hotelier</h2>
        </div>

        <div className={`nav-center ${isOpen ? "active" : ""}`}>
          <ul className="nav-center-option">
            <li ><Link to="/">Home</Link></li>
            <li ><Link to="/hotel">Hotels</Link></li>
            <li ><a href="#">Services</a></li>
            <li ><Link to="/ourRooms">OurRooms</Link></li>
            <li ><Link to="/contact">Contact Us</Link></li>


          </ul>
        </div>

        <div className={`admin-control ${profileOpen ? "active" : ""}`} ref={profileRef} >
          {isAuthenticated ? (
            <>
             <div 
      className="relative group"
    >
      {/* Profile Icon */}
      <span className="admin-name cursor-pointer">
        <CgProfile className="text-3xl" />
      </span>

      {/* Dropdown Menu (visible on hover) */}
      <div className="absolute right-0 mt-2 w-40 bg-gray-200 shadow-lg rounded-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <Link to={"/profile"}><button className="block w-full  px-1 py-4  hover:bg-gray-100" >Profile</button></Link>
        <button className="block w-full  px-4 py-4 text-red-500 hover:bg-gray-100" onClick={handleLogout}>
          Logout
        </button>
        
      </div>
    </div>
            </>
          ) : (
            <>
            <button className="signup-btn" onClick={() => setSignupOpen(true)}>
            Sign Up
          </button>
          <button className="login-btn" onClick={() => setLoginOpen(true)}>Log In</button>
            </>

          )}
          
        </div>

        <div className="right-nav right-ns" ref={profileRef} onClick={toggleProfileMenu}>
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
          id="pincode"
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

{/* profile or login/signup button */}


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
