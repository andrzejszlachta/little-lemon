import logo from "../assets/logo-wide.svg";
import Nav from "./Nav";

function Header() {
  return (
    <header>
      <img src={logo} alt="little lemon logo" className="logo" />
      <Nav />
    </header>
  );
}

export default Header;
