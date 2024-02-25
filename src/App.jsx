import { useState } from 'react'
import LandingPage from './pages/landing_page'
import Show from './pages/show'
import Form from './pages/form'
import About from './pages/about'
import Blog from './pages/blog'
import Contact from './pages/contact'
import Listing from './pages/listing'
import Promo from './pages/promo'
import Login from './pages/login'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
       <Routes>
          <Route element={<LandingPage/>} path='/'/>
          <Route element={<Promo/>} path='/promo'/>
          <Route element={<About/>} path='/about-us'/>
          <Route element={<Contact/>} path='/contact-us'/>
          <Route element={<Listing/>} path='/card-collections'/>
          <Route element={<Blog/>} path='/blogs'/>
          <Route element={<Form/>} path='/enrollment'/>
          <Route element={<Show/>} path='/my-dashboard'/>
          <Route element={<Login/>} path='/account-login'/>
        </Routes>
    </>
  )
}

export default App
