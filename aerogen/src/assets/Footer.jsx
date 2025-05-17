import './Footer.css';


function Footer({logo}) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src="/logo.png" alt="Logo" className="logo-image" />
        <small className="footer-text">© {new Date().getFullYear()} Aerogen. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;