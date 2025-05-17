import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src="/logo.png" alt="Logo" className="logo-image" />
          <div className="logo-text">
            <span className="english">AEROGEN</span>
            <span className="japanese">エアロゲン</span>
          </div>
        </div>
        <ul className="nav-list">
          <li className="nav-item"><Link to="/HomePage" className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to="/Aircrafts" className="nav-link">Our Aircrafts</Link></li>
          <li className="nav-item"><Link to="/ServicesPage" className="nav-link">Services</Link></li>
          <li className="nav-item"><Link to="/DevelopersPage" className="nav-link">Developers</Link></li>  
          <li className="nav-item"><Link to="/loginPage" className="nav-link">Login</Link></li> 
          <li className="nav-item"><Link to="/ContactPage" className="nav-link">Contact Us</Link></li> 
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
