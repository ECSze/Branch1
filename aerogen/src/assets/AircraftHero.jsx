import {useState} from "react";
import "./AircraftHero.css";

const AircraftHero = () => {
  const [selectedAircraft, setSelectedAircraft] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [days, setDays] = useState(1);
  const [filterField, setFilterField] = useState("name");
  const [searchTerm, setSearchTerm] = useState("");

const aircrafts = [
  {
    name: "Airbus A220-100",
    image: "/A220-100.jpg",
    range: "3,750 NM",
    seats: 140,
    runway: "4,800 ft",
    lease: "$5,000 / month",
    available: 5
  },
  {
    name: "A220-300",
    image: "/A220-300.jpg",
    range: "4,500 NM",
    seats: 140,
    runway: "5,000 ft",
    lease: "$6,000 / month",
    available:5
  },
  {
    name: "A319NEO",
    image: "/A319neo.jpg",
    range: "3,700 NM",
    seats: 156,
    runway: "6,562 ft",
    lease: "$7,000 / month",
    available:5
  },
  {
    name: "A320NEO",
    image: "/A320neo.jpg",
    range: "4,230 NM",
    seats: 180,
    runway: "5,800 ft",
    lease: "$10,000 / month",
    available:5
  },
  {
    name: "A321NEO",
    image: "/A321neo.jpg",
    range: "3,800 NM",
    seats: 220,
    runway: "7,250 ft",
    lease: "$15,000 / month",
    available:5
  },
 
  {
    name: "A330NEO",
    image: "/A330neo.jpg",
    range: "6,000 NM",
    seats: 320,
    runway: "11,200 ft",
    lease: "$25,000 / month",
    available:5
  },
  {
    name: "A350-900",
    image: "/A350-900.jpg",
    range: "8,000 NM",
    seats: 440,
    runway: "13,200 ft",
    lease: "$45,000 / month",
    available:5
  },
  {
    name: "A350-1000",
    image: "/A350-1000.jpg",
    range: "8,900 NM",
    seats: 520,
    runway: "13,200 ft",
    lease: "$75,000 / month",
    available:5
  },

  {
    name: "BOEING 737 MAX 7",
    image: "/B737-7.jpg",
    range: "4,750 NM",
    seats: 140,
    runway: "5,360 ft",
    lease: "$12,000 / month",
    available:5
  },
  
  {
    name: "BOEING 737 MAX 8",
    image: "/B737-8.jpg",
    range: "4,750 NM",
    seats: 180,
    runway: "6,360 ft",
    lease: "$18,000 / month",
    available:5
  },

  {
    name: "BOEING 737 MAX 9",
    image: "/B737-9.jpeg",
    range: "3,750 NM",
    seats: 220,
    runway: "7,360 ft",
    lease: "$28,000 / month",
    available:5
  },

  {
    name: "BOEING 737 MAX 10 ",
    image: "/B737-10.jpg",
    range: "5,750 NM",
    seats: 250,
    runway: "5,360 ft",
    lease: "$38,000 / month",
    available:5
  },

  

  {
    name: "BOEING 777-8",
    image: "/B777-8.jpg",
    range: "8,750 NM",
    seats: 520,
    runway: "5,360 ft",
    lease: "$108,000 / month",
    available:5
  },

 

  {
    name: "BOEING 787-8",
    image: "/B787-8.jpg",
    range: "7,750 NM",
    seats: 320,
    runway: "15,360 ft",
    lease: "$48,000 / month",
    available:5
  },

  {
    name: "BOEING 787-9",
    image: "/B787-9.jpg",
    range: "8,750 NM",
    seats: 380,
    runway: "5,360 ft",
    lease: "$58,000 / month",
    available:5
  },

  {
    name: "BOEING 787-10",
    image: "/B787-10.jpg",
    range: "7,750 NM",
    seats: 540,
    runway: "7,380 ft",
    lease: "$88,000 / month",
    available:5
  }
];
const calculateTotalCost = (lease) => {
    const pricePerDay = parseInt(lease.replace(/\D/g, "")) / 30;
    return (pricePerDay * days).toFixed(2);
  };


  const handleBookClick = (aircraft) => {
    setSelectedAircraft(aircraft);
    setShowBookingModal(true);
  };


  const handleBookingSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${selectedAircraft.name}!\nTotal: $${calculateTotalCost(selectedAircraft.lease)}`);
    setShowBookingModal(false);
    // Reset form
    setEmail("");
    setDate("");
    setTime("");
    setDays(1);
  };


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
            <p><strong>Available:</strong> {aircraft.available}</p>
            <p><strong>Lease:</strong> {aircraft.lease}</p>
          </div>
         
          <button
            className="book-button"
            onClick={() => handleBookClick(aircraft)}
          >
            Book Now
          </button>
        </div>
      ))}


      {showBookingModal && selectedAircraft && (
        <div className="booking-modal-overlay">
          <div className="booking-modal">
            <button
              className="close-modal"
              onClick={() => setShowBookingModal(false)}
            >
              &times;
            </button>
           
            <h2>Book {selectedAircraft.name}</h2>
           
            <form onSubmit={handleBookingSubmit}>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
             
              <div className="form-group">
                <label>Date:</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>
             
              <div className="form-group">
                <label>Time:</label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                />
              </div>
             
              <div className="form-group">
                <label>Duration (days):</label>
                <input
                  type="number"
                  min="1"
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                  required
                />
              </div>
             
              <div className="cost-summary">
                <h3>Cost Summary</h3>
                <p><strong>Daily Rate:</strong> ${(parseInt(selectedAircraft.lease.replace(/\D/g, "")) / 30).toFixed(2)}</p>
                <p><strong>Total for {days} day(s):</strong> ${calculateTotalCost(selectedAircraft.lease)}</p>
              </div>
             
              <button type="submit" className="submit-booking">
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};


export default AircraftHero;


