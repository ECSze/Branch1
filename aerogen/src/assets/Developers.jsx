import React from 'react';
import './Developers.css';

const developers = [
  {
    name: 'Emerson Sze',
    role: 'Frontend Developer',
    image: 'Sze.jpg', // replace with actual image paths
    message: 'I built the UI with user experience in mind.',
  },
  {
    name: 'Shawn Franco',
    role: 'Backend Developer',
    image: 'shawn.jpg',
    message: 'I developed secure and scalable APIs.',
  },
  {
    name: 'Lex Durante',
    role: 'UI/UX Designer',
    image: 'Lex.png',
    message: 'I designed the layout and interactions.',
  },
  {
    name: 'Deseree',
    role: 'Project Manager',
    image: '/Des.png',
    message: 'I ensured the team stayed on track and delivered on time.',
  },
];

function Developers() {
  return (
    <div className="developers-page">
      <h1 className="developers-title">Meet the Developers</h1>
      <div className="developers-container">
        {developers.map((dev, index) => (
          <div key={index} className="developer-card">
            <img src={dev.image} alt={dev.name} className="developer-image" />
            <h2>{dev.name}</h2>
            <p className="role">{dev.role}</p>
            <p className="message">"{dev.message}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Developers;
