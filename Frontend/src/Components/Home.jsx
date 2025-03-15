import React from 'react'
import NavBar from './NavBar'
import Slider from './Slider'
import Rooms from './Rooms'
import Services from './Pages/Services'
import Membership from './Pages/Membership'
import DealsContainer from './Pages/DealsContainer'
import Menus from './Pages/Menus'


function Home() {
  return (
    <>
    <NavBar />
    <Slider />
    <Rooms />
    <Services />
    <Membership />
    <DealsContainer />
    <Menus />
    </>
    
  )
}

export default Home
