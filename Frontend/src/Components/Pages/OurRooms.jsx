import React from 'react'
import NavBar from '../NavBar'
import './OurRoom.css'

function OurRooms() {
  return (
    <>
    <NavBar/>
    <div className='w-full '>
        
        <div className='w-full flex justify-center flex-col gap-14  items-center'>
        <div
          className="profile-header w-full h-60 flex justify-center items-center text-7xl font-bold font-sans text-white shadow-lg"
          style={{ background: 'linear-gradient(135deg, #b5184a,#611045, #1c060d)' }}
        >
          Our Rooms
        </div>
        <div className='rooms-container '>
  
  <div className='left-card '>
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
        <select className='room-type'>
          <option value="standard" className='option'>Standard</option>
          <option value="deluxe" className='option'>Deluxe</option>
          <option value="suite" className='option'>Suite</option>
        </select>
      </div>

    </div>
    <div className='checkbox-container '>
      <h1 className='text-2xl'>Facilities</h1>
      <div className='date-picker-container1 '>
        {/* checkbox for room type */}
        <div className='checkbox-container1 '>
        <input type="checkbox" className='' />
        <label className='' >Wifi</label>
        </div>
        <div className='checkbox-container1 '>
        <input type="checkbox" className='' />
        <label className='' >Wifi</label>
        </div>
        
        
        
        </div>

    </div>
    <div className='checkbox-container '>
      <h1 className='text-2xl'>Guests</h1>
      <div className='date-picker-container '>
        {/* checkbox for room type */}
        <div className='date-picker-container '>
          <div className='adult-lable flex justify-around'>
          <label className='' >Adult</label>
          <label >Children</label>
          </div>
        <div>
        <input type="number" />
        
        <input type="number" />
        </div>
        
      </div>
        
        </div>

    </div>
  </div>

  <div className='right-card w-2/3 bg-amber-500 h-64 flex p-4 gap-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out'>
    <div className='room-photo w-1/3 min-h-40 bg-gray-300 rounded-md shadow-inner'></div>
    <div className='room-details flex-grow min-h-40 bg-gray-700 rounded-md shadow-inner'></div>
  </div>
</div>

      </div>
    </div>
    </>
  )
}

export default OurRooms
