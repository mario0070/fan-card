import { useState } from 'react'
import LandingPage from './pages/landing_page'
import Show from './pages/show'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
       <Routes>
          <Route element={<LandingPage/>} path='/'/>
          <Route element={<Show/>} path='/my-dashboard'/>
        </Routes>
    </>
  )
}

export default App
