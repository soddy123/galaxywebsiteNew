import React from 'react'
import satelite from '../../assets/satelite2.jpg'
function Banner2() {
  return (
    <div className='relative z-[50] w-screen bg-black text-white pb-12 overflow-hidden'>
      <div className='container pl-6'>
         <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 items-center'>
         <div className='space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-sky-800 border-b-sky-800'>
               <p data-aos="fade-up" data-aos-delay="300"className='text-sky-800'>
                  Our Mission
               </p>
               <h1 data-aos="fade-up" data-aos-delay="500"className='uppercase text-5xl'>
                  Rapidcast
               </h1>
               <p data-aos="fade-up" data-aos-delay="800">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat numquam nisi inventore expedita eaque. Laboriosam corporis quos cupiditate nostrum exercitationem sint sed debitis soluta. Consectetur quae nihil fuga voluptatum earum.
                  Fuga atque doloremque veritatis placeat dignissimos, nihil ipsa soluta excepturi, consequatur illum nostrum sed eaque laudantium ullam provident quasi iure. Esse quis nulla voluptas, laboriosam praesentium laudantium rem odio ducimus.
               </p>
               <button data-aos="fade-up" data-aos-delay="900"className='primary-button'>Learn More</button>
            </div>
            <div data-aos="zoom-in">
               <img src={satelite} alt="" />
            </div>
            

         </div>

      </div>
    </div>
  )
}

export default Banner2