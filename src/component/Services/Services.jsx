import React from 'react'
import {FaReact,FaGlobe,FaSatellite} from "react-icons/fa"
import wave from "../../assets/wave Gif.gif"

const ServiceData = [
  {
    title:"HST",
    content:"300-1500KM",
    description:"Used for astronomical observations,Capturing stunning images of the universe.",
    icon:<FaReact className="text-7xl"/>,
    aosDelay:"300",
  },
  {
    title: "S-D",
    content: "1500-10000KM",
    description: "Deploy satellites for communication, navigation, and Earth observation.",
    icon: <FaSatellite className="text-7xl" />,
    aosDelay: "700",
  },
  {
    title: "G-B",
    content: "High-altitude imagery",
    description: "Capture high-resolution images of Earth from space for research and monitoring.",
    icon: <FaGlobe className="text-7xl" />,
    aosDelay: "900",
  }
]
function Services() {
  
  return (
    <div className='bg-black w-screen pt-12 relative text-white z-[50]'>
      <div className=''>
         <div className='min-h-[400px]'>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10'>
               {
                ServiceData.map(
                  (data,index)=>(
                      <div key={index} data-aos="fade-up" data-aos-delay={data.aosDelay} className='min-h-[180px] flex flex-col gap-2 justify-center items-center bg-sky-900/60 rounded-xl hover:bg-sky-500/60 backdrop-blur-sm text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto'>
                        {data.icon}
                        <h1>{data.title}</h1>
                        <p>{data.content}</p>
                        <p className='text-sm'>{data.description}</p>
                      
                      </div>

                  )
                )
               }
            </div>
            <img src={wave} alt="Wave Image" 
             className='h-[200px] w-full object-cover mix-blend-screen -translate-y-24 relative z-[0]'
            />
         </div>
      </div>
    </div>
  )
}

export default Services