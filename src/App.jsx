import { useState ,useEffect} from 'react'
import bgVideo from "./assets/planet.mp4"
import './App.css'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import { Outlet } from 'react-router-dom'
import Services from "./component/Services/Services"
import Banner from './component/Banner/Banner'
import Banner2 from './component/Banner/Banner2'
import Footer from './component/Footer/Footer'
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from 'react-router-dom'



function App() {

  const navigate = useNavigate();  // Initialize useNavigate
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
       AOS.init({
        duration:1500,
        easing:"ease-in-out",
       });

       const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn) {
      setIsLoggedIn(true);
      navigate('/'); // Redirect to the Hero section (default route)
    }
  }, [navigate]);


  return (
    <div className=''>
      <div className='h-[700px] relative '>
        <video autoPlay loop muted 
         className='fixed right-0 top-0 h-screen w-full object-cover '
        >
          <source src={bgVideo} type="video/mp4"/>
        </video>
        <Navbar/>
        {/* {isLoggedIn && <Hero />} Show Hero only if logged in */}
        <Outlet/>
      </div>

      {/* second PAGE without video  */}
      <Services />
      <Banner/>
      <Banner2/>
      <Footer/>
    </div>
  )
}

export default App

