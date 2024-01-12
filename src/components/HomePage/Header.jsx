import { header1 } from "../../assets";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header id="header-section" className="section-container header-container">
      <div className="header-content">
        <span className="bg-blur "></span>
        <span className="bg-blur header-blur"></span>
        <h4>BEST FITNESS IN THE CITY</h4>
        <h1>
          <span>MAKE</span> YOUR BODY SHAPE
        </h1>
        <p>
          Unleash your potential and embark on a journey towards a stronger,
          fitter, and more confident you. Sign up for {"Make Your Body Shape"}{" "}
          now and witness the incredible transformation your body is capable of!
        </p>
        <Link to="/exercises">
          <button className="btn">Get Started</button>
        </Link>
      </div>
      <div className="header-img">
        <img src={header1} alt="Header Image" />
      </div>
    </header>
  );
}

export default Header;
