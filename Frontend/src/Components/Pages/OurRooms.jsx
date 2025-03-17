import React from 'react'
import NavBar from '../NavBar'
import './OurRoom.css'
import Footer from '../Footer'
import BookNow from '../BookNow';

function OurRooms() {
  const [bookNow, setBookNow] = React.useState(false);
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

                {/* checkbox for room type */}
                <div className='date-picker-container '>
                  <div className='adult-lable flex gap-28'>
                    <label className='' >Adult</label>
                    <label >Children</label>
                  </div>
                  <div className='adult-input flex justify-around'>
                    <input type="number" />

                    <input type="number" />
                  </div>

                </div>



              </div>
            </div>

            <div className='right-card '>
              <div className='room-photo w-1/3 min-h-40 bg-gray-300 rounded-md shadow-inner'>
                <img src="/SliderImages/image01.jpg" alt="Room" className="room-image1" />
              </div>
              <div className='room-details  min-h-40 rounded-md shadow-inner '>
                <div className='room-details-container '>
                  <h2 className='room-name text-xl text-gray-800 font-bold'>Luxury Room</h2>
                  <div className='room-features flex flex-col gap-1'>
                    <h1 className='room-feature-para text-lg text-gray-700'>Features</h1>
                    <p className='room-features-list text-sm text-gray-600 ml-6' ><span>Wifi, Television, Air conditioning
                    </span></p>
                  </div>
                  <div className='room-features flex flex-col gap-1'>
                    <h1 className='room-feature-para text-lg text-gray-700'>Facilities</h1>
                    <p className='room-features-list text-sm text-gray-600 ml-6' ><span>Wifi, Television, Air conditioning
                    </span></p>
                  </div>
                  <div className='room-features flex flex-col gap-1'>
                    <h1 className='room-feature-para text-lg text-gray-700'>Guest</h1>
                    <p className='room-features-list text-sm text-gray-600 ml-6' ><span>6 Adult 2 Child
                    </span></p>
                  </div>
                </div>
                <div className='room-price-container '>
                  <h1 className='room-price'>Price:600 per night</h1>
                  <button className='book-now1' onClick={()=>setBookNow(true)}>Book Now</button>
                  <button className='view-details'>View Details</button>
                </div>
                {/* <p className='room-price'>Price: $100 per night</p> */}
              </div>
            </div>
          </div>

        </div>
      </div>
      {bookNow && <BookNow/>}
      <Footer/>
    </>
  )
}

export default OurRooms
