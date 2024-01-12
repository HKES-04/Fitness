import { HiMiniBars3 } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { logo } from "../../assets";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  function handleClicked() {
    setClicked(!clicked);
  }

  return (
    <nav className="nav">
      <Link to="/">
        <div className="nav-logo">
          <a href="">
            <img src={logo} alt="Logo Image" />
          </a>
        </div>
      </Link>
      <ul className={clicked ? "nav-links" : "nav-links active"}>
        <li className="link">
          <ScrollLink
            to="header-section"
            smooth={true}
            duration={500}
            offset={-100}
          >
            <a href="">Home</a>
          </ScrollLink>
        </li>
        <li className="link">
          <ScrollLink
            to="program-section"
            smooth={true}
            duration={500}
            offset={-50}
          >
            <a href="">Program</a>
          </ScrollLink>
        </li>
        <li className="link">
          <ScrollLink
            to="class-section"
            smooth={true}
            duration={500}
            offset={-100}
          >
            <a href="">Classes</a>
          </ScrollLink>
        </li>
        <li className="link">
          <ScrollLink
            to="join-section"
            smooth={true}
            duration={500}
            offset={-30}
          >
            <a href="">Join</a>
          </ScrollLink>
        </li>
        <li className="link">
          <ScrollLink
            to="pricing-section"
            smooth={true}
            duration={500}
            offset={-40}
          >
            <a href="">Pricing</a>
          </ScrollLink>
        </li>
        <li className="link">
          <ScrollLink
            to="testimonial-section"
            smooth={true}
            duration={500}
            offset={-130}
          >
            <a href="">Testimonial</a>
          </ScrollLink>
        </li>
      </ul>
      <div className="nav-end">
        <Link to="/exercises">
          <button className="btn">Try Now</button>
        </Link>
        <div onClick={handleClicked} className="nav-mobile">
          {clicked ? (
            <IoMdClose className="nav-close" />
          ) : (
            <HiMiniBars3 className="nav-bar" />
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
