import { useState } from 'react'

import NavBar from './assets/NavBar' 
import HeroSection from './assets/HeroSection' 
import HeroSection2 from './assets/HeroSection2'
import Footer from './assets/Footer' 

function App() {
  

  return (
    <>
      <NavBar
      
      />

      <HeroSection
        backgroundImage="A321XLR.jpg"
        title="Discover the Future of Air Travel with the Airbus A321XLR"
        subtitle="Experience unparalleled range, efficiency, and comfort on every flight with the Airbus A321XLR – the next-generation aircraft that takes your journey further"
        buttonText="EXPLORE FLEET"
      />

      <HeroSection2
         backgroundImage="crew.jpg"
        title="Service That Takes You Higher"
        subtitle="Experience world-class hospitality and safety with every flight. Our crew is ready to make your journey seamless and unforgettable"
        buttonText="BOOK NOW"
      />


      <HeroSection
         backgroundImage="fleet.jpg"
        title="Explore Our Modern Fleet"
        subtitle="From short-haul efficiency to long-range luxury — discover the aircraft that fits your mission"
        buttonText="View Fleet"
      />

      <HeroSection2
         backgroundImage="cabin.jpg"
        title="Step into a cabin designed for comfort and style — where every seat is first class."
        subtitle="From short-haul efficiency to long-range luxury — discover the aircraft that fits your mission"
        buttonText="BOOK NOW"
      />

    <Footer
    logo="crew.jpg"
/>
    </>
  )
}

export default App;
