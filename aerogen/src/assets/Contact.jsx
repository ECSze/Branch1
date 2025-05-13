import React from 'react';
import './contact.css';

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
      <h1 className="contact-title">Contact Us</h1>
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
  );
}

export default Contact;