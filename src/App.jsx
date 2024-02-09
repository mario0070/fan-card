import { useState } from 'react'
import LandingPage from './pages/landing_page'
import Show from './pages/show'
import Form from './pages/form'
import About from './pages/about'
import Blog from './pages/blog'
import Contact from './pages/contact'
import Listing from './pages/listing'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
       <Routes>
          <Route element={<LandingPage/>} path='/'/>
          <Route element={<About/>} path='/about-us'/>
          <Route element={<Contact/>} path='/contact-us'/>
          <Route element={<Listing/>} path='/card-collections'/>
          <Route element={<Blog/>} path='/blogs'/>
          <Route element={<Form/>} path='/enrollment'/>
          <Route element={<Show/>} path='/my-dashboard'/>
        </Routes>
    </>
  )
}

export default App
