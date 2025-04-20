import React from 'react'
// import NavBar from './NavBar'
import Slider from './Slider'
import Rooms from './Rooms'
import Services from './Pages/Services'
import Membership from './Pages/Membership'
import DealsContainer from './Pages/DealsContainer'
import Menus from './Pages/Menus'
import Gallery from './Pages/Gallery'
import Footer from './Footer'
import Hotels from './Pages/Hotels'
import OurBrands from './Pages/OurBrands'


function Home() {
  return (
    <>

    {/* <NavBar activePage="hotels"/> */}
    <Slider />
    

    <Rooms />
    <Services />
    <Membership />
    <DealsContainer />
    <Menus />
    <Gallery />
    <OurBrands />
    <Footer />
    
    </>
    
  )
}

export default Home
