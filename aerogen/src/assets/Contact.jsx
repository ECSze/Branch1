import React from 'react';
import './contact.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
// import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

const contact = [
  {
    name: 'David Sandoval',
    role: 'Head of HR',
    image: '/david.jpg', // replace with actual image paths
    message: 'DavidSandoval.hr@aerogen.com',
  },
  {
    name: 'Freya Joe',
    role: 'Booking Assistant',
    image: '/sarah joe.jpg',
    message: 'FreyaJoe.booking@aerogen.com',
  },
  {
    name: 'Ashton Olviga',
    role: 'Finance Head',
    image: '/ashton.jpg',
    message: 'AshtonOlviga.finance@aerogen.com',
  },
  {
    name: 'Allia Bonnin',
    role: 'Marketing Head',
    image: '/allia.jpg',
    message: 'AlliaBonnin.marketing@aerogen.com',
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