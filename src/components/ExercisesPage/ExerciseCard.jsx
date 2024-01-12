import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./ExerciseCard.css";

function ExerciseCard({ exercise }) {
  return (
    <Link to={`/exercises/${exercise.id}`}>
      <div className="exercise-card">
        <div className="exercise-card-img">
          <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
        </div>
        <div className="exercise-card-content">
          <span className="exercise-card-btn">{exercise.bodyPart}</span>
          <span className="exercise-card-btn btn2">{exercise.target}</span>
        </div>
        <h3>{exercise.name}</h3>
      </div>
    </Link>
  );
}

ExerciseCard.propTypes = {
  exercise: PropTypes.shape({
    id: PropTypes.string.isRequired,
    gifUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    bodyPart: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired,
  }).isRequired,
};

export default ExerciseCard;
