import { useEffect, useState } from "react";
import "./SearchExercises.css";
import { exerciseOptions, fetchData } from "../../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";
import PropTypes from "prop-types";

function SearchExercises({ setExercises, bodyPart, setBodyPart }) {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises?limit=900",
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );

      setSearch("");
      setExercises(searchedExercises);
    }
  };
  return (
    <section>
      <div className="search-exercises">
        <h2>All Exercises to Try!</h2>
        <div className="search-box">
          <input
            className="search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            type="text"
            placeholder="Search Exercise"
          />
          <button
            className="search-button"
            onClick={() => {
              handleSearch();
              window.scrollTo({ top: 700, left: 100, behavior: "smooth" });
            }}
          >
            Search
          </button>
        </div>
        <div>
          <HorizontalScrollbar
            data={bodyParts}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
          />
        </div>
      </div>
    </section>
  );
}

SearchExercises.propTypes = {
  setExercises: PropTypes.func.isRequired,
  bodyPart: PropTypes.string.isRequired,
  setBodyPart: PropTypes.func.isRequired,
};

export default SearchExercises;
