import React from 'react';
import './Rooms.css';
import room01 from '/roomImages/room01.jpg'
import room02 from '/roomImages/room02.jpg'
import room03 from '/roomImages/room03.jpg'
import { FaBed } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa6";



export default function Rooms() {
    const RoomBooking = [
        { image: room01, title: "Luxury Room", price: "₹5000/Per Night" },
        { image: room02, title: "Deluxe Room", price: "₹4000/Per Night" },
        { image: room03, title: "Suite Room", price: "₹7000/Per Night" },
        { image: room03, title: "Suite Room", price: "₹7000/Per Night" },
        { image: room03, title: "Suite Room", price: "₹7000/Per Night" },
        { image: room03, title: "Suite Room", price: "₹7000/Per Night" }



    ];

    return (
        <>
            <div className="room-container">
                <div className="comapany-headings">
                    <div className="company-welcome">
                        <h2 className='welcome '>Welcome to Mr. Hotelier</h2>
                    </div>
                    <div className="our-rooms-details">
                        <h4 className='our-rooms'>---- Our Rooms ----</h4>
                    </div>
                    <div className="explore">
                        <h3 className='explore-rooms'>
                            <p>Explore Our <span className='rooms' style={{ color: 'hsl(26, 90.70%, 53.70%)', fontWeight: 'bold', fontSize: '30px' }}>Rooms</span></p>
                        </h3>
                    </div>
                </div>

                <div className="card-container">
                    {RoomBooking.map((room, index) => (
                        <div key={index} className="room-booking">
                            <div className="hotel-room-image">
                            <img className='room-image' src={room.image} alt="room" />
                            </div>
                            <div className="room-title">
                                <p className='title'>{room.title}</p>
                            </div>
                            <div className="bed-wifi-section">
                                <div className="bed">
                                <FaBed /> <span className='count-room' >2 Beds</span> 

                                </div>
                                <div className="wifi-section">
                                    <div className="wifi-logo">
                                    <FaWifi /> <span className='wifi-title' >Wifi</span>

                                    </div>
                                </div>
                            </div>
                            <div className="room-pricing">
                                <p className='pricing'>{room.price}</p>
                            </div>
                            <div className="book-btn">
                                <button className='book-now' >Book Now</button>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    );
}
