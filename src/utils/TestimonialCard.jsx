import PropTypes from "prop-types";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import "../components/HomePage/Testimonial.css";

function TestimonialCard({ name, job, description, img, stars }) {
  return (
    <div className="review-content">
      <div className="quote-span">
        <span>
          <BiSolidQuoteAltRight />
        </span>
      </div>
      <div className="testimonial-content">
        <h4>MEMBER REVIEW</h4>
        <p>{description}</p>
        <div className="review-rating">
          <span>{stars}</span>
        </div>
        <div className="review-footer">
          <div className="review-member">
            <img src={img} alt="Member Image" />
            <div className="review-member-details">
              <h4>{name}</h4>
              <p>{job}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

TestimonialCard.propTypes = {
  name: PropTypes.string,
  job: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  stars: PropTypes.node,
};

export default TestimonialCard;
