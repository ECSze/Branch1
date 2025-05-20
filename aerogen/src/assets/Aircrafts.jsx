import React from 'react';
import NavBar from './NavBar';
import AircraftIntro from './AircraftIntro';
import AircraftHero from './AircraftHero';
import Footer from './Footer';
import AircraftSearch from './AircraftSearch';

function Aircrafts() {
  return (
    <>
      <NavBar />
      <main>
        <AircraftIntro />
        <AircraftSearch/>
        <AircraftHero />
      </main>
      <Footer logo="fleet.jpg" />
    </>
  );
}

export default Aircrafts;