import React from 'react'
import IconButton from '../components/IconButton'
import { useNavigate } from 'react-router-dom'
import Heading from '../components/Heading'
import Para from '../components/Para'


const LandingPage = () => {

    const navigate = useNavigate();


  return (
    <div className="relative min-h-screen mx-auto">
      <div className="flex flex-col gap-y-2 absolute bottom-0 w-full text-center p-4">
        <Heading text='Welcome to PopX' />
        <Para text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'/>
        <div className='mt-4 flex flex-col gap-y-[0.75rem]'>
        <IconButton text='Create Account' onClick={() => navigate('/signup')} customClass='bg-[#5D2DE6] text-sm  text-white p-y-2' />
        <IconButton text='Already Registered? Login' onClick={() => navigate('/login') } customClass='bg-[#5d2de6] bg-opacity-[40%] text-[#000000] font-semibold' />
        </div>
      </div>
    </div>
  )
}

export default LandingPage
