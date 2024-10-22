import React from 'react'
import moon from "../assets/moon-surface-hd (1).png"
const Hero = () =>{
  return (
    <div className='bg-black/20 h-full w-screen text-white relative'>
       <div className='h-full flex items-center p-4 '>
         <div className='container grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div className='space-y-4 text-left lg:pr-36 '>
               <h1 data-aos="fade-up" className='text-5xl font-bold uppercase'>Orbit The Earth</h1>
               <p data-aos="fade-up">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Sapiente, ratione! Consequuntur a blanditiis quo, corrupti excepturi nisi totam omnis adipisci ducimus aspernatur voluptates facere eius cum, ut quod porro repudiandae.

               </p>
               <button 
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className='primary-button'>
                 Read More
               </button>
            </div>
         </div>
       </div>
       <img src={moon} alt="" 
        className='w-full absolute bottom-0 right-0 brightness-50 z-10'
       />
       <div className='absolute bottom-0 w-full z-30 bg-gradient-to-b from-transparent from 10% to-black to-90% h-[20px] sm:h-[50px]'></div>
    </div>
  )
}

export default Hero