import React from 'react';
import './contact.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
// import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

const contact = [
  {
    name: 'Emerson Reyes',
    role: 'Head of HR',
    image: '/emerson.jpg', // replace with actual image paths
    message: 'email:emerson@aerogen.com',
  },
  {
    name: 'Shawn Franco',
    role: 'Backend contact',
    image: '/alex.jpg',
    message: 'I contacteloped secure and scalable APIs.',
  },
  {
    name: 'Emerson',
    role: 'UI/UX Designer',
    image: '/sarah.jpg',
    message: 'I designed the layout and interactions.',
  },
  {
    name: 'Deseree',
    role: 'Project Manager',
    image: '/mark.jpg',
    message: 'I ensured the team stayed on track and delivered on time.',
  },
];

function Contact() {
  return (
    <div className="contact-page">
      <header className="page-header">
        <h1 className="header-title">Contact Us</h1>
      </header>
      <div className="main-content">
        <div className="connect-with-us-container">
          <div className="contact-details">
            <h3>Connect With Us</h3>
            <p>
              {/* <FontAwesomeIcon icon={faFacebook} className="icon" /> */} Facebook: <a href="https://www.facebook.com/Aerogen" target="_blank" rel="noopener noreferrer">Aerogen</a>
            </p>
            <p>
              {/* <FontAwesomeIcon icon={faInstagram} className="icon" /> */} Instagram: <a href="https://www.instagram.com/aerogen_/" target="_blank" rel="noopener noreferrer">aerogen_</a>
            </p>
            <p>
              {/* <FontAwesomeIcon icon={faEnvelope} className="icon" /> */} Email: <a href="mailto:aerogenAviation.maintenance@gmail.com">aerogenAviation.maintenance@gmail.com</a>
            </p>
            <p>
              {/* <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" /> */} Location: Metro Manila, Philippines
            </p>
            <p>
              {/* <FontAwesomeIcon icon={faPhone} className="icon" /> */} Contact: 02-8835-67895
            </p>
          </div>
        </div>
        <div className="contact-container">
          {contact.map((contact, index) => (
            <div key={index} className="contact-card">
              <img src={contact.image} alt={contact.name} className="contact-image" />
              <h2>{contact.name}</h2>
              <p className="role">{contact.role}</p>
              <p className="message">"{contact.message}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;