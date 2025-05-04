import './HeroSection.css';

function HeroSection({ backgroundImage, title, subtitle, buttonText }) {
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

          <button className="hero-button">{buttonText}</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;