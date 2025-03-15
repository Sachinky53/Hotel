import React from 'react'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Profile from './Components/Pages/Profile'
import OurRooms from './Components/Pages/OurRooms'

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
