import './HeroSection2.css';
import { useNavigate } from 'react-router-dom';

function HeroSection2({ backgroundImage, title, subtitle, buttonText }) {
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
    <section className="hero-section2">
      <div
        className="hero-image2"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="hero-text2">
        <div className="hero-content2">
          <h1 className="hero-title2">{title}</h1>
          <p className="hero-subtitle2">{subtitle}</p>
          <button className="hero-button2" onClick={handleClick}>{buttonText}</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection2;