import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import PropTypes from "prop-types";
import BodyPart from "./BodyPart";
import { useRef } from "react";
import "./HorizontalScrollbar.css";
import {
  all,
  arms,
  back,
  cardio,
  chest,
  lowerLegs,
  neck,
  shoulder,
  upperLegs,
  waist,
} from "../../assets";

function HorizontalScrollbar({ data, bodyPart, setBodyPart }) {
  const ref = useRef(null);

  function LeftArrow() {
    ref.current.scrollLeft -= 200;
  }

  function RightArrow() {
    ref.current.scrollLeft += 200;
  }

  const BodyPartImage = [
    {
      text: "1",
      img: all,
    },
    {
      text: "2",
      img: back,
    },
    {
      text: "3",
      img: cardio,
    },
    {
      text: "4",
      img: chest,
    },
    {
      text: "5",
      img: arms,
    },
    {
      text: "6",
      img: lowerLegs,
    },
    {
      text: "7",
      img: neck,
    },
    {
      text: "8",
      img: shoulder,
    },
    {
      text: "9",
      img: arms,
    },
    {
      text: "10",
      img: upperLegs,
    },
    {
      text: "11",
      img: waist,
    },
  ];

  for (let i = 0; i < 11; i++) {
    BodyPartImage[i].text = data[i];
  }

  return (
    <div className="horizontal-content">
      <button onClick={LeftArrow}>
        <IoIosArrowBack />
      </button>
      <div ref={ref} className="horizontal-scroll">
        {BodyPartImage.map((item) => (
          <div
            className="horizontal-scrollbar"
            key={item.id || item.text}
            itemID={item.id || item.text}
            title={item.id || item.text}
          >
            <BodyPart
              item={item.text}
              img={item.img}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          </div>
        ))}
      </div>
      <button onClick={RightArrow}>
        <IoIosArrowForward />
      </button>
    </div>
  );
}

HorizontalScrollbar.propTypes = {
  data: PropTypes.array.isRequired,
  bodyPart: PropTypes.string.isRequired,
  setBodyPart: PropTypes.func.isRequired,
};

export default HorizontalScrollbar;
