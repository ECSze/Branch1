import React from "react";
import "./AircraftHero.css";

const aircrafts = [
  {
    name: "Airbus A220-100",
    image: "/A220-100.jpg",
    range: "4,750 NM",
    seats: 14,
    runway: "5,360 ft",
    lease: "$58,000 / month"
  },
  {
    name: "A220-300",
    image: "/A220-300.jpg",
    range: "7,000 NM",
    seats: 18,
    runway: "6,000 ft",
    lease: "$75,000 / month"
  },
  {
    name: "A319NEO",
    image: "/A319neo.jpg",
    range: "2,000 NM",
    seats: 9,
    runway: "3,200 ft",
    lease: "$25,000 / month"
  },
  {
    name: "A320NEO",
    image: "/A320neo.jpg",
    range: "2,000 NM",
    seats: 9,
    runway: "3,200 ft",
    lease: "$25,000 / month"
  },
  {
    name: "A321NEO",
    image: "/A321neo.jpg",
    range: "2,000 NM",
    seats: 9,
    runway: "3,200 ft",
    lease: "$25,000 / month"
  },
 
  {
    name: "A330NEO",
    image: "/A330neo.jpg",
    range: "2,000 NM",
    seats: 9,
    runway: "3,200 ft",
    lease: "$25,000 / month"
  },
  {
    name: "A350-900",
    image: "/A350-900.jpg",
    range: "2,000 NM",
    seats: 9,
    runway: "3,200 ft",
    lease: "$25,000 / month"
  },
  {
    name: "A350-1000",
    image: "/A350-1000.jpg",
    range: "2,000 NM",
    seats: 9,
    runway: "3,200 ft",
    lease: "$25,000 / month"
  },

  {
    name: "BOEING 737 MAX 7",
    image: "/B737-7.jpg",
    range: "4,750 NM",
    seats: 14,
    runway: "5,360 ft",
    lease: "$58,000 / month"
  },
  
  {
    name: "BOEING 737 MAX 8",
    image: "/B737-8.jpg",
    range: "4,750 NM",
    seats: 14,
    runway: "5,360 ft",
    lease: "$58,000 / month"
  },

  {
    name: "BOEING 737 MAX 9",
    image: "/B737-9.jpeg",
    range: "4,750 NM",
    seats: 14,
    runway: "5,360 ft",
    lease: "$58,000 / month"
  },

  {
    name: "BOEING 737 MAX 10 ",
    image: "/B737-10.jpg",
    range: "4,750 NM",
    seats: 14,
    runway: "5,360 ft",
    lease: "$58,000 / month"
  },

  

  {
    name: "BOEING 777-8",
    image: "/B777-8.jpg",
    range: "4,750 NM",
    seats: 14,
    runway: "5,360 ft",
    lease: "$58,000 / month"
  },

 

  {
    name: "BOEING 787-8",
    image: "/B787-8.jpg",
    range: "4,750 NM",
    seats: 14,
    runway: "5,360 ft",
    lease: "$58,000 / month"
  },

  {
    name: "BOEING 787-9",
    image: "/B787-9.jpg",
    range: "4,750 NM",
    seats: 14,
    runway: "5,360 ft",
    lease: "$58,000 / month"
  },

  {
    name: "BOEING 787-10",
    image: "/B787-10.jpg",
    range: "4,750 NM",
    seats: 14,
    runway: "5,360 ft",
    lease: "$58,000 / month"
  }
];

const AircraftHero = () => {
  return (
    <div className="aircraft-hero-container">
      <h2 className="airbus-label">Our Aircrafts</h2>
      {aircrafts.map((aircraft, idx) => (
        
        <div key={idx} className="aircraft-card">
          
          <h2 className="aircraft-title">{aircraft.name}</h2>
          <img src={aircraft.image} alt={aircraft.name} className="aircraft-image" />
          <div className="aircraft-details">
            <p><strong>Range:</strong> {aircraft.range}</p>
            <p><strong>Seats:</strong> {aircraft.seats}</p>
            <p><strong>Min Runway:</strong> {aircraft.runway}</p>
            <p><strong>Lease:</strong> {aircraft.lease}</p>
          </div>
          <button className="select-button">Select Aircraft</button>
        </div>
      ))}
    </div>
  );
};

export default AircraftHero;