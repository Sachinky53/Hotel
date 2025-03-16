import React from 'react'


import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Profile from './Components/Pages/Profile'
import OurRooms from './Components/Pages/OurRooms'

import NavBar from './Components/NavBar'
import Slider from './Components/Slider'
import Rooms from './Components/Rooms'
import Services from './Components/Pages/Services'
import Membership from './Components/Pages/Membership'
import DealsContainer from './Components/Pages/DealsContainer'
import Menus from './Components/Pages/Menus'
import Gallery from './Components/Pages/Gallery'

export default function App() {
  return (
<>

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path='/ourRooms' element={<OurRooms/>}/>
      </Routes>
    </Router>




</>
  )
}
