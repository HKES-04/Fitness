import PropTypes from "prop-types";
import { bodyPartImg, targetImg, equipmentImg } from "../../assets";
import "./Detail.css";

function Detail({ exerciseDetail }) {
  const { bodyPart, equipment, gifUrl, name, target } = exerciseDetail;
  const ExtraDetails = [
    {
      icon: bodyPartImg,
      name: bodyPart,
    },
    {
      icon: targetImg,
      name: target,
    },
    {
      icon: equipmentImg,
      name: equipment,
    },
  ];
  return (
    <div className="detail-card">
      <div className="detail-img">
        <img src={gifUrl} alt={name} loading="lazy" />
      </div>
      <div className="deatil-content">
        <h3 className="detail-heading">{name}</h3>
        <p className="detail-description">
          Exercises keep you strong.{" "}
          <strong style={{ color: "#e48305", textTransform: "Capitalize" }}>
            {name}
          </strong>{" "}
          is the one of the best exercises to target your{" "}
          <strong style={{ color: "#e48305" }}>{target}</strong>. It will help
          you to improve your mood and gain energy.
        </p>
        {ExtraDetails.map((item) => (
          <div key={item} className="detail-muscle">
            <div className="detail-muscle-img">
              <img src={item.icon} alt={item.name} />
            </div>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

Detail.propTypes = {
  exerciseDetail: PropTypes.shape({
    bodyPart: PropTypes.string,
    equipment: PropTypes.string,
    gifUrl: PropTypes.string,
    name: PropTypes.string,
    target: PropTypes.string,
  }).isRequired,
};

export default Detail;
