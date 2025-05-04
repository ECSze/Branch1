import './HeroSection2.css';

function HeroSection2({ backgroundImage, title, subtitle, buttonText }) {
  return (
    <section className="hero-section">
      <div
        className="hero-image"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="hero-text">
        <div className="hero-content">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
          <button className="hero-button">{buttonText}</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection2;