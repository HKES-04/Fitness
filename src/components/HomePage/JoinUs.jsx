import { join } from "../../assets";
import { RiUserStarFill, RiVidiconFill, RiBuildingLine } from "react-icons/ri";
import "./JoinUs.css";

function JoinUs() {
  return (
    <section id="join-section" className="section-container join-container">
      <h2 className="section-header">WHY JOIN US?</h2>
      <p className="section-subheader">
        Our diverse membership base creates a friendly and supportive
        atmosphere, where you can make friends and stay motivated.
      </p>
      <div className="join-img">
        <img src={join} alt="Join Image" />
        <div className="join-grid">
          <div className="join-card">
            <span>
              <RiUserStarFill />
            </span>
            <div className="join-card-content">
              <h4>Personal Trainer</h4>
              <p>Unlock your potential with our expert Personal Trainers.</p>
            </div>
          </div>
          <div className="join-card">
            <span>
              <RiVidiconFill />
            </span>
            <div className="join-card-content">
              <h4>Practice Sessions</h4>
              <p>Elevate your fitness with practice sessions.</p>
            </div>
          </div>
          <div className="join-card">
            <span>
              <RiBuildingLine />
            </span>
            <div className="join-card-content">
              <h4>Good Management</h4>
              <p>Supportive management, for your fitness success.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JoinUs;
