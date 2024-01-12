import { LuArrowRight } from "react-icons/lu";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../components/HomePage/Program.css";

function ProgramCard({ icon, title, description }) {
  return (
    <div className="explore-card">
      <span>{icon}</span>
      <h4>{title}</h4>
      <p>{description}</p>
      <Link to="/exercises">
        <a href="#">
          Try Now <LuArrowRight />
        </a>
      </Link>
    </div>
  );
}
ProgramCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProgramCard;
