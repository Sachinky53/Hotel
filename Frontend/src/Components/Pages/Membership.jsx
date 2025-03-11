import React from 'react'
import './Membership.css'
export default function Membership() {
    return (
        <>
            <div className="Membership-layout-container">
                <div className="membership-heading">
                    <h2 className='membership-title-heading' >
                        Become a Marriott Bonvoy Member
                    </h2>
                    <div className="membership-container-details">
                        <p className='Membership-details' >
                            Get exclusive rates, earn points
                            <br />
                            towards free nights and more.
                        </p>

                    </div>
                    <div className='memebership-division-line' ></div>
                    <div className="membership-free-btn-container">
                        <button className='membership-free-btn' >Join For Free </button>

                    </div>
                    <div className="membership-login-container">
                        <button className='membership-login' >
                            LogIn
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
