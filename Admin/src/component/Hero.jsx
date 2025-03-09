import React from 'react'
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { MdDoNotDisturb } from 'react-icons/md';
import { BiCategory } from "react-icons/bi";
// import axios from 'axios';
// import { MdDelete } from "react-icons/md";
// import { GrView } from "react-icons/gr";
// import { FaEdit } from "react-icons/fa";


function Hero() {

    const getGreeting = () => {
        const currenthour = new Date().getHours();
        if(currenthour < 12){
          return "Good Morning";
        }else if(currenthour >= 12 && currenthour < 18){
          return "Good Afternoon";
        }else{
          return "Good Evening";
        }
      }
  return (
    <>
    <div>
      <div className="hero-container ">
      {/* user welcome */}
      
      {/* Header Section */}
      <div className="text-left flex flex-col  bg-white p-4 mb-5 rounded-md shadow-sm">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">
          
        </h1>
        <p className="text-lg text-gray-600 mb-3">
          Get a quick overview of your hotel bookings, performance and sales trends
        </p>
      </div>

      {/* Stats Section */}
      <div className="stats-box flex flex-wrap gap-5 justify-center items-center">
        {/* Card 1 */}
        <div className="stats-card w-60  p-6 rounded-lg border-2 border-green-700 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl ">
          {/* <MdOutlineProductionQuantityLimits className="text-6xl  mx-auto" /> */}
          <h2 className="text-xl  font-semibold mt-4 text-center text-green-700">
            New Bookings
          </h2>
          <p className="text-4xl  font-bold text-center text-green-700">0</p>
        </div>

        {/* Card 2 */}
        <div className="stats-card w-60  p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl border-2 border-yellow-400">
        {/* <AiOutlineDollar className='text-6xl text-white mx-auto '/> */}

          <h2 className="text-xl text-yellow-400 font-semibold mt-4 text-center">
            Refund Bookings
          </h2>
          <p className="text-4xl text-yellow-400 font-bold text-center">0</p>
        </div>

        {/* Card 3 */}
        <div className="stats-card w-60 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl border-2 border-red-600">
        {/* <MdDoNotDisturb className="text-6xl text-white mx-auto" /> */}
          <h2 className="text-xl text-red-600 font-semibold mt-4 text-center">
            User Quieries
          </h2>
          <p className="text-4xl text-red-600 font-bold text-center">0</p>
        </div>

        {/* Card 4 */}
        <div className="stats-card w-60 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl border-2 border-blue-600">
       
        {/* <BiCategory className="text-6xl text-white mx-auto" /> */}
          <h2 className="text-xl text-blue-600 font-semibold mt-4 text-center">
           Rating & Review
          </h2>
          <p className="text-4xl text-blue-600 font-bold text-center">0</p>
        </div>
      </div>
      <div className="text-left flex flex-col  bg-white p-4 mb-5 mt-5 rounded-md shadow-sm">
        <h1 className="text-2xl font-bold text-gray-800 mb-3">
          Booking Analytics
        </h1>
        
      </div>
      <div className="stats-box flex flex-wrap gap-5 justify-center items-center">
        {/* Card 1 */}
        

        {/* Card 2 */}
        <div className="stats-card w-60  p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl border-2 border-blue-400">
        {/* <AiOutlineDollar className='text-6xl text-white mx-auto '/> */}

          <h2 className="text-xl text-blue-400 font-semibold mt-4 text-center">
            Totel Booking
          </h2>
          <p className="text-4xl text-blue-400 font-bold text-center">0</p>
        </div>
        <div className="stats-card w-60  p-6 rounded-lg border-2 border-green-700 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl ">
          {/* <MdOutlineProductionQuantityLimits className="text-6xl  mx-auto" /> */}
          <h2 className="text-xl  font-semibold mt-4 text-center text-green-700">
            Active Bookings
          </h2>
          <p className="text-4xl  font-bold text-center text-green-700">0</p>
        </div>
        {/* Card 3 */}
        <div className="stats-card w-60 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl border-2 border-red-600">
        {/* <MdDoNotDisturb className="text-6xl text-white mx-auto" /> */}
          <h2 className="text-xl text-red-600 font-semibold mt-4 text-center">
            Cencelled Bokings
          </h2>
          <p className="text-4xl text-red-600 font-bold text-center">0</p>
        </div>

        {/* Card 4 */}
        
      </div>
      <div className="text-left flex flex-col  bg-white p-4 mb-5 mt-5 rounded-md shadow-sm">
        <h1 className="text-2xl font-bold text-gray-800 mb-3">
          User, Queries, Reviews Analytics
        </h1>
        
      </div>
      <div className="stats-box flex flex-wrap gap-5 justify-center items-center">
        {/* Card 1 */}
        
        <div className="stats-card w-60  p-6 rounded-lg border-2 border-green-700 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl ">
          {/* <MdOutlineProductionQuantityLimits className="text-6xl  mx-auto" /> */}
          <h2 className="text-xl  font-semibold mt-4 text-center text-green-700">
            New Registration 
          </h2>
          <p className="text-4xl  font-bold text-center text-green-700">0</p>
        </div>
        {/* Card 2 */}
        <div className="stats-card w-60  p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl border-2 border-blue-400">
        {/* <AiOutlineDollar className='text-6xl text-white mx-auto '/> */}

          <h2 className="text-xl text-blue-400 font-semibold mt-4 text-center">
            Queries
          </h2>
          <p className="text-4xl text-blue-400 font-bold text-center">0</p>
        </div>
        
        {/* Card 3 */}
        <div className="stats-card w-60 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl border-2 border-yellow-600">
        {/* <MdDoNotDisturb className="text-6xl text-white mx-auto" /> */}
          <h2 className="text-xl text-yellow-600 font-semibold mt-4 text-center">
            Reviews
          </h2>
          <p className="text-4xl text-yellow-600 font-bold text-center">0</p>
        </div>

        {/* Card 4 */}
        
      </div>
    </div>
    </div>
    </>
  )
}

export default Hero
