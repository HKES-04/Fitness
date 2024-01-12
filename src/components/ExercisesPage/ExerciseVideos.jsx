import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import PropTypes from "prop-types";
import { useRef } from "react";
import "./ExerciseVideos.css";

function ExerciseVideos({ exerciseVideos, name }) {
  const ref = useRef(null);

  function LeftArrow() {
    ref.current.scrollLeft -= 300;
  }

  function RightArrow() {
    ref.current.scrollLeft += 300;
  }

  return (
    <div className="videos-container">
      <h2 className="videos-title">
        Watch{" "}
        <strong style={{ color: "#e48305", textTransform: "Capitalize" }}>
          {name}
        </strong>{" "}
        exercise videos
      </h2>
      <div className="videos-box">
        <button onClick={LeftArrow}>
          <IoIosArrowBack />
        </button>
        <div className="videos-scroll" ref={ref}>
          {exerciseVideos &&
            exerciseVideos.map((item) => (
              <iframe
                className="videos-responsive"
                key={item.video.videoId}
                src={`https://www.youtube.com/embed/${item.video.videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
                loading="lazy"
              />
            ))}
        </div>
        <button onClick={RightArrow}>
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}

ExerciseVideos.propTypes = {
  exerciseVideos: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
};

export default ExerciseVideos;
