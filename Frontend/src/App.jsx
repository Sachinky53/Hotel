import React from 'react'
import NavBar from './Components/NavBar'
import Slider from './Components/Slider'
import Rooms from './Components/Rooms'
import Services from './Components/Pages/Services'
import Membership from './Components/Pages/Membership'
import DealsContainer from './Components/Pages/DealsContainer'
import Menus from './Components/Pages/Menus'
import Gallery from './Components/Pages/Gallery'
import Footer from './Components/Footer'

export default function App() {
  return (
<>
<NavBar />
<Slider />
<Rooms />
<Services />
<Membership />
<DealsContainer />
<Menus />
<Gallery />
<Footer />
</>
  )
}
