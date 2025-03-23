import { useState } from 'react'
import './App.css'
import LandingPage from './pages/LandingPage'
import { Router,Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'


function App() {

  return (
       <div className='border bg-[#f4f4f4] h-[100vh]'>
        <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/profile' element={<Profile />} />
        </Routes>
       </div>
  )
}

export default App
