import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Aboout from './pages/Aboout'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Aboout/>} />
      </Routes>
    </div>
  )
}

export default App