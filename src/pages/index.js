import React from "react";
import { SparklesCore } from "../components/sparkles"; 
import logo1 from "../../public/logo5.png"
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import Loading from '../components/Loading';
import Image from 'next/image'

const Landing = () => {
  
  // useEffect(() => {
  //   const preventContextMenu = (event) => {
  //     event.preventDefault();
  //   };
  
  //   document.addEventListener('contextmenu', preventContextMenu);
  
  //   return () => {
  //     document.removeEventListener('contextmenu', preventContextMenu);
  //   };
  // });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [])
  

  return (
    <div >
      
      {isLoading ? (
       <Loading />
        
      ) : (

    <div  className="h-screen  w-full bg-black flex flex-col items-center justify-start overflow-hidden ">
    <div className="w-full absolute inset-0 h-screen">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={80}
        className="w-full h-full"
        particleColor="#00ffff"
      />
 
    </div>
    <div style={{position:"relative",display:"flex", justifyContent:"center", marginTop:"2.3rem"}}>
      <div style={{ position:"absolute"}}>
        
    <img className="pheonix-logo"  src={logo1} alt="" />
    </div>

  <div >
    <h1  className="astra-landing-fs prevent-select font-bold text-center text-white relative z-20 landingfont mt-48 ">
    {/* sm:text-9xl md:text-7xl text-3xl lg:text-9xl */}
      Astra Nova
    </h1>
    </div>
    </div>

    <div className="mt-28 w-2/4 bg-black flex justify-around items-center">

{/* <div className="relative inline-flex  group">
    <div
        className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
    </div>
    <a href="#" title="Get quote now"
        className="relative  inline-flex items-center justify-center w-40 px-8 py-4 text-3xl font-bold text-cyan-600  bg-white transition-all duration-200 calistoga-regular rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 "
        role="button">News
    </a>
</div> */}

<div className="relative inline-flex  group">
    <div 
        className="absolute  transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
    </div>
    <a href="/vacancies" title="Get quote now"
        className="relative inline-flex items-center w-48 justify-center px-8 py-4 text-2xl font-bold careers-color transition-all duration-200 bg-white calistoga-regular rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
        role="button">CAREERS
    </a>
</div>
</div>
  </div>
 )}
  </div>
  )
}

export default Landing