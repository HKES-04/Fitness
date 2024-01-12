import { FaRegCheckCircle } from "react-icons/fa";
import "./Pricing.css";

function Pricing() {
  return (
    <section id="pricing-section" className="section-container price-container">
      <h2 className="section-header">OUR PRICING PLAN</h2>
      <p className="section-subheader">
        Our pricing plan comes with various membership tiers, each tailored to
        cater to different preferences and fitness aspirations.
      </p>
      <div className="price-grid">
        <div className="price-card">
          <div className="price-card-content">
            <h4>Basic Plan</h4>
            <h3>$16</h3>
            <p>
              <FaRegCheckCircle className="check-box" />
              Smart workout plan
            </p>
            <p>
              <FaRegCheckCircle className="check-box" />
              At home workouts
            </p>
          </div>
          <button className="btn price-btn">Join Now</button>
        </div>
        <div className="price-card">
          <div className="price-card-content">
            <h4>Weekly Plan</h4>
            <h3>$25</h3>
            <p>
              <FaRegCheckCircle className="check-box" />
              PRO Gyms
            </p>
            <p>
              <FaRegCheckCircle className="check-box" />
              Smart workout plan
            </p>
            <p>
              <FaRegCheckCircle className="check-box" />
              At home workouts
            </p>
          </div>
          <button className="btn price-btn">Join Now</button>
        </div>
        <div className="price-card">
          <div className="price-card-content">
            <h4>Monthly Plan</h4>
            <h3>$45</h3>
            <p>
              <FaRegCheckCircle className="check-box" />
              ELITE Gyms & Classes
            </p>
            <p>
              <FaRegCheckCircle className="check-box" />
              PRO Gyms
            </p>
            <p>
              <FaRegCheckCircle className="check-box" />
              Smart workout plan
            </p>
            <p>
              <FaRegCheckCircle className="check-box" />
              At home workouts
            </p>
            <p>
              <FaRegCheckCircle className="check-box" />
              Personal Training
            </p>
          </div>
          <button className="btn price-btn">Join Now</button>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
