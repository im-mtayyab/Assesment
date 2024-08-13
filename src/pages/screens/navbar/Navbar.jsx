import "./Navbar.css";

import ICONS from "../../helpers/Icons.jsx";

function Navbar() {
  console.log("App Re render");
  return (
    <nav>
      <img className="nav-img menu-img" src={ICONS.Menu} alt="" />
      <img className="main-hero-logo"  src={ICONS.CreditLogo} alt="" />
      <ul className="nav-links">
        <li className="nav-link">
          <a href="#">Our Products</a>
          <img className="nav-img" src={ICONS.DownArrow} alt="Down arrow icon" />
        </li>
        <li className="nav-link">
          <a href="#">Credit Cards & Loan</a>
          <img className="nav-img" src={ICONS.DownArrow} alt="Down arrow icon" />
        </li>
        <li className="nav-link">
          <a href="#">Guides and Tips</a>
          <img className="nav-img" src={ICONS.DownArrow} alt="Down arrow icon" />
        </li>
        <li className="nav-link">
          <a href="#">Calculators</a>
          <img className="nav-img" src={ICONS.DownArrow} alt="Down arrow icon" />
        </li>
      </ul>
      <div className="auth-buttons">
        <button className="btn login-btn">Log In</button>
        <button className="btn signup-btn">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;
