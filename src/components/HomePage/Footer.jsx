import { logo } from "../../assets";
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="section-container footer-container">
      <span className="bg-blur"></span>
      <span className="bg-blur footer-blur"></span>
      <div className="footer-col">
        <div className="footer-logo">
          <img src={logo} alt="Logo Image" />
        </div>
        <p>
          Take the first step towards a healthier, stronger you with our
          unbeatable pricing plans. Lets sweat, achieve, and conquer together!
        </p>
        <div className="footer-socials">
          <a href="#">
            <FaFacebook className="social-icons" />
          </a>
          <a href="#">
            <FaInstagramSquare className="social-icons" />
          </a>
          <a href="#">
            <FaTwitter className="social-icons" />
          </a>
        </div>
      </div>
      <div className="footer-col">
        <h4>Company</h4>
        <a href="#">Business</a>
        <a href="#">Franchise</a>
        <a href="#">Partnership</a>
        <a href="#">Network</a>
      </div>
      <div className="footer-col">
        <h4>About Us</h4>
        <a href="#">Blogs</a>
        <a href="#">Security</a>
        <a href="#">Careers</a>
      </div>
      <div className="footer-col">
        <h4>Contact</h4>
        <a href="#">Contact Us</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">BMI Calculator</a>
      </div>
    </footer>
  );
}

export default Footer;
