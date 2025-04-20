import React from 'react'
import Marquee from 'react-fast-marquee'
import "./OurBrands.css"

function OurBrands() {
  return (
    <>
      <div className="brands-container-layout">
        <div className="brand-heading">
          <h3 className='brands-title'>
            Our Brand Partners
          </h3>
        </div>
        <div className="marquee-container">
          <Marquee className='marquee-brands' speed={50} pauseOnHover={true}>
            <div className="logo-brand">
              <p className='brand-logo-dristi'>Hotel Dristi Grand</p>
              <p className='brand-logo-happiness'>Happiness Marriage Lawn</p>
              <p className='brand-logo-rich'>Rich Spoon Restaurant</p>
            </div>
          </Marquee>
        </div>
      </div>
    </>
  )
}

export default OurBrands
