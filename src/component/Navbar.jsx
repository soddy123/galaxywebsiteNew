import React from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'


function Navbar() {

  return (
   <div data-aos="fade-down" className='fixed top-1 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-4'>
      <div className='container'>
         <div className='flex justify-between items-centerz'>
            <div className='flex items-center gap-4 text-2xl text-white font-bold'>
              <img src={logo} alt="Logo" 
              className='w-14'/>
              <span>AERO-Tech.</span>
            </div>
            <div className='text-white hidden md:block'>
               <ul className='flex items-center gap-6 text-xl py-4 sm:py-0'>
                  <li>
                     <Link to="AboutUs" className='hover:text-blue-300'>About</Link>
                  </li>
                  <li>
                     <Link to="Technology" className='hover:text-blue-300'>Technology</Link>
                  </li>
                  <li>
                     <Link to="Galaxy" className='hover:text-blue-300'>Galaxy</Link>
                  </li>
                  <li>
                     <Link to="Satellite" className='hover:text-blue-300'>Satellite</Link>
                  </li>
               </ul>
            </div>
            <div>
               <Link to ="/login"><button  className='text-white mr-4 font-bold border-2 border-white px-3 py-1 rounded-md hover:bg-blue-300'>
                  Login
               </button>
               </Link>
               <Link to="/signup"><button className='text-white font-bold border-2 border-white px-3 py-1 rounded-md hover:bg-blue-300'>
                  Sign Up
               </button>
               </Link>
            </div>
  
  
         </div>
      </div>
   </div>
  )
}

export default Navbar