import React from 'react'
import NavBar from '../NavBar'

function OurRooms() {
  return (
    <div className='w-full '>
        <NavBar/>
        <div className='w-full flex justify-center flex-col gap-14  items-center'>
        <div
          className="profile-header w-full h-60 flex justify-center items-center text-7xl font-bold font-sans text-white shadow-lg"
          style={{ background: 'linear-gradient(135deg, #b5184a,#611045, #1c060d)' }}
        >
          Our Rooms
        </div>
        <div className='rooms-container w-11/12 flex gap-10 justify-around ml-10'>
        <div className='left-card w-2/5 min-h-28 flex justify-center  bg-gray-300 border-2 border-gray-400 rounded-md shadow-2xl'>
            <p className='text-2xl font-bold mt-5'>Room Filters</p>
        </div>
        <div className='right-card w-3/4 bg-amber-600'>
            room details    
        </div>
        </div>
      </div>
    </div>
  )
}

export default OurRooms
