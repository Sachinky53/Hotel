import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar'
import './OurRoom.css'
import BookNow from '../BookNow';
import axios from 'axios';
import Footer from '../Footer';


function OurRooms() {
  const [bookNow, setBookNow] = React.useState(false);

  const [rooms, setRooms] = useState([]);
  const fetchRooms = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/room/getRoom");
      console.log("fetch", response.data);
      setRooms(response.data.rooms);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {

    fetchRooms();
  }, []);

      const [features, setFeatures] = React.useState([]);
  

  const fetchFeatures = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/feature/getFeature");
      const featureData = response.data.features;
      setFeatures(featureData);
      // console.log(featureData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchFeatures();
  }, [fetchFeatures]);
  
  const [facilities, setFacilities] = useState([]);

  const fetchFacilities = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/facilities/getFacilities");
      const facilitiesData = response.data.facilities;
      setFacilities(facilitiesData);
      // console.log(facilitiesData);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchFacilities();
  },[]);

  //filterd rooms
  const [filteredRooms, setFilteredRooms] = useState([]);
const [selectedRoomType, setSelectedRoomType] = useState("all");
const [selectedFacilities, setSelectedFacilities] = useState([]);
const [adults, setAdults] = useState(0);
const [children, setChildren] = useState(0);

// Apply filters when rooms, selectedRoomType, selectedFacilities, or guests change
useEffect(() => {
  let filtered = rooms;

  // Filter by room type
  if (selectedRoomType !== "all") {
    filtered = filtered.filter((room) => room.roomType === selectedRoomType);
  }

  // Filter by facilities (every selected facility must be in the room's facilities)
  if (selectedFacilities.length > 0) {
    filtered = filtered.filter((room) =>
      selectedFacilities.every((facility) =>
        [...room.facilities, ...room.features].includes(facility)
      )
    );
  }

  // Filter by guests
  filtered = filtered.filter(
    (room) => room.adult >= adults && room.children >= children
  );

  setFilteredRooms(filtered);
}, [rooms, selectedRoomType, selectedFacilities, adults, children]);

// Handle facility checkbox change
const handleFacilityChange = (facility) => {
  setSelectedFacilities((prevFacilities) =>
    prevFacilities.includes(facility)
      ? prevFacilities.filter((item) => item !== facility)
      : [...prevFacilities, facility]
  );
};

  return (
    <>
      <NavBar />
      <div className='w-full '>

        <div className='w-full flex justify-center flex-col gap-14  items-center'>
          <div
            className="profile-header w-full h-60 flex justify-center items-center text-7xl font-bold font-sans text-white shadow-lg"
            style={{ background: 'linear-gradient(135deg, #b5184a,#611045, #1c060d)' }}
          >
            Our Rooms
          </div>
          <div className='rooms-container '>

            <div className='left-card w-1/3'>
              <p className='room-heading '>Room Filters</p>
              <div className='checkbox-container '>
                <h1 className='text-2xl'>Check Availablity</h1>
                <div className='date-picker-container '>
                  <label className='' >Check In</label>
                  <input type="date" />
                  <label >Check Out</label>
                  <input type="date" />
                </div>

              </div>
              <div className='checkbox-container '>
                <h1 className='text-2xl'>Room Type</h1>
                <div className='date-picker-container '>
                  {/* drop down for room type */}
                  {/* <label className='room-type-container' >Room Type</label> */}
                  <select
                  value={selectedRoomType}
                   onChange={(e) => setSelectedRoomType(e.target.value)}

                   className='room-type'>
                    <option value="all" className='option'>All</option>
                    <option value="Luxury Room" className='option'>Luxury Room</option>
                    <option value="Deluxe Room" className='option'>Deluxe Room</option>
                    <option value="Suite Room" className='option'>Suite Room</option>
                  </select>
                </div>

              </div>
              <div className='checkbox-container '>
                <h1 className='text-2xl'>Facilities</h1>
                <div className='date-picker-container1 '>
                  {/* checkbox for room type */}
                  {[...facilities, ...features].map((item) => (
                  <div key={item._id} className='checkbox-container1'>
                    <input
                      type='checkbox'
                      checked={selectedFacilities.includes(item.title)}
                      onChange={() => handleFacilityChange(item.title)}
                      className='h-5 w-5'
                    />
                    <label>{item.title}</label>
                  </div>
                ))}
                
                </div>

              </div>
              <div className='checkbox-container '>
                <h1 className='text-2xl'>Guests</h1>

                {/* checkbox for room type */}
                <div className='date-picker-container '>
                  <div className='adult-lable flex gap-28'>
                    <label className='' >Adult</label>
                    <label >Children</label>
                  </div>
                  <div className='adult-input flex justify-around'>
                  <input type='number' min='0' value={adults} onChange={(e) => setAdults(Number(e.target.value))} />
                  <input type='number' min='0' value={children} onChange={(e) => setChildren(Number(e.target.value))} />
                  </div>

                </div>



              </div>
            </div>

          <div className='right-card-container flex flex-col gap-6 w-full'>
              {filteredRooms.length === 0 ? (
                <p>Loading rooms...</p>
              ) : (
                filteredRooms.map((room) => (
                  <div key={room._id} className='right-card flex mb-6 gap-2 w-full  '>
                    <div className='room-photo w-2/5 min-h-40 bg-gray-300 rounded-md shadow-inner'>
                      <img src={`http://localhost:4000/uploads/${room.roomImage}`} alt={room.roomType} className="room-image1" />
                    </div>
                    <div className='room-details min-h-40 w-2/4  rounded-md   flex-1 p-4'>
                      <div className='room-details-container '>
                        <h2 className='room-name text-2xl text-gray-800 font-bold' >{room.roomType}</h2>
                        <div className='room-features flex flex-col gap-2'>
                          <h1 className='room-feature-para text-lg text-gray-700'>Features</h1>
                          <p className='room-features-list text-sm text-gray-600 ml-6' ><span> {room.features.join(", ")}
                          </span></p>
                        </div>
                        <div className='room-features flex flex-col gap-2'>
                          <h1 className='room-feature-para text-lg text-gray-700'>Facilities</h1>
                          <p className='room-features-list text-sm text-gray-600 ml-6' ><span>{room.facilities.join(", ")}
                          </span></p>
                        </div>
                        <div className='room-features flex flex-col gap-2'>
                          <h1 className='room-feature-para text-lg text-gray-700'>Guest</h1>
                          <p className='room-features-list text-sm text-gray-600 ml-6' ><span>{room.adult} Adult {room.children} Child
                          </span></p>
                        </div>
                      </div>
                      {/* <h2 className='room-name text-xl text-gray-800 font-bold'>{room.roomType}</h2>
                      <p className='room-feature-para text-lg text-gray-700'>Features: {room.features.join(", ")}</p>
                      <p className='room-feature-para text-lg text-gray-700'>Facilities: {room.facilities.join(", ")}</p>
                      <p className='room-feature-para text-lg text-gray-700'>Guests: {room.adult} Adults, {room.children} Children</p> */}
                      <div className='room-price-container flex justify-between items-center'>
                        <h1 className='room-price'>Price: {room.price} per night</h1>
                        <div className='room-btn-container flex gap-4 flex-col'>
                          <button className='book-now1' onClick={() => setBookNow(true)}>Book Now</button>
                          <button className='view-details'>View Details</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          </div>
       
      </div>
      {bookNow && <BookNow onClose={() => setBookNow(false)}/>}
        <Footer />
    </>
  )
}

export default OurRooms
