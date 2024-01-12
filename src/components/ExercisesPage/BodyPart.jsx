import PropTypes from "prop-types";
import "./BodyPart.css";

function BodyPart({ item, img, setBodyPart, bodyPart }) {
  return (
    <div
      className={`bodyPart-card ${bodyPart === item ? "selected" : ""}`}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 700, left: 100, behavior: "smooth" });
      }}
    >
      <div className="bodyPart-img">
        <img src={img} loading="lazy" />
      </div>
      <div className="bodyPart-text">
        <span className="item-text">{item}</span>
      </div>
    </div>
  );
}

BodyPart.propTypes = {
  item: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  setBodyPart: PropTypes.func.isRequired,
  bodyPart: PropTypes.string.isRequired,
};

export default BodyPart;
