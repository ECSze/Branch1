import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src="/logo.png" alt="Logo" className="logo-image" />
        </div>
        <ul className="nav-list">
          <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Aircrafts</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Premium Services</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Our Fleet</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Login</a></li>
          
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;