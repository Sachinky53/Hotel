import React from 'react'
import NavBar from './Components/NavBar'
import Slider from './Components/Slider'
import Rooms from './Components/Rooms'
import Services from './Components/Pages/Services'
import Membership from './Components/Pages/Membership'
import DealsContainer from './Components/Pages/DealsContainer'

export default function App() {
  return (
<>
<NavBar />
<Slider />
<Rooms />
<Services />
<Membership />
<DealsContainer />
</>
  )
}
