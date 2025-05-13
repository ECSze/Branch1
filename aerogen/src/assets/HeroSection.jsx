import './HeroSection.css';
import { useNavigate } from 'react-router-dom';


function HeroSection({ backgroundImage, title, subtitle, buttonText }) {


   const navigate = useNavigate();

  const handleClick = () => {
    const text = buttonText.toUpperCase();
    if (text === 'BOOK NOW') {
      navigate('/LoginPage');
    } else if (text === 'EXPLORE FLEET' || text === 'VIEW FLEET') {
      navigate('/Aircrafts');
    }
  };

  return (
    <section className="hero"
    style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">{title}</h1>

          <p className="hero-subtitle">
          {subtitle}
          </p>

          <button className="hero-button" onClick={handleClick}>{buttonText}</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;