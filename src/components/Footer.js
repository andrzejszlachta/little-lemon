import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer>
      <img src={logo} alt="little lemon logo" className="logo" />
      <div className="container">
        <nav className="footer-nav">
          <ul>
            <li>Doormat Navigation</li>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Menu</a>
            </li>
            <li>
              <a href="/">Reservations</a>
            </li>
            <li>
              <a href="/">Order Online</a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
          </ul>
        </nav>
        <nav className="footer-nav">
          <ul>
            <li>Contact</li>
            <li>
              <a href="/">Address</a>
            </li>
            <li>
              <a href="/">Phone number</a>
            </li>
            <li>
              <a href="/">Email</a>
            </li>
          </ul>
        </nav>
        <nav className="footer-nav">
          <ul>
            <li>Social Media links</li>
            <li>
              <a href="/">Facebook</a>
            </li>
            <li>
              <a href="/">Twitter</a>
            </li>
            <li>
              <a href="/">LinkedIn</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
