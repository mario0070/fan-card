import { useState } from 'react'
import LandingPage from './pages/landing_page'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
       <Routes>
          <Route element={<LandingPage/>} path='/'/>
        </Routes>
    </>
  )
}

export default App
