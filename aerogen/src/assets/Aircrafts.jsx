import NavBar from './NavBar';
import AircraftIntro from './AircraftIntro';
import AircraftHero from './AircraftHero';
import Footer from './Footer';


function Aircrafts() {
  return (
    <>
      <NavBar />
      <AircraftIntro />
      <AircraftHero />
      <Footer logo="fleet.jpg" />
    </>
  );
}

export default Aircrafts;