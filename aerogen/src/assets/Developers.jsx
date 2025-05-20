import React from 'react';
import './Developers.css';

const developers = [
  {
    name: 'Emerson Sze',
    role: 'Frontend Developer',
    image: 'Sze.jpg', 
    message: 'I built the UI with user experience in mind. Facilitated the Front and Back End process.',
  },
  {
    name: 'Shawn Franco',
    role: 'Backend Developer',
    image: 'shawn.jpg',
    message: 'I developed secure and scalable APIs. Facilitated the documentation and progress of the project.',
  },
  {
    name: 'Lex Durante',
    role: 'UI/UX Designer',
    image: 'Lex.png',
    message: 'I designed the layout and interactions. Facilitated most of Front End process.',
  },
  {
    name: 'Deseree',
    role: 'Project Manager',
    image: '/Des.png',
    message: 'I ensured the team stayed on track and delivered on time. Facilitated most of the Documentation',
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
