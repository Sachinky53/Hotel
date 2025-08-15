import React from 'react'
// import NavBar from './NavBar'
import Slider from './Slider'
import Rooms from './Rooms'
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
