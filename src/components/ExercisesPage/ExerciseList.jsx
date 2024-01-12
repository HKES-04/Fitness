import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Pagination from "@mui/material/Pagination";
import ExerciseCard from "./ExerciseCard";
import "./ExerciseList.css";
import { exerciseOptions, fetchData } from "../../utils/fetchData";

function ExerciseList({ exercises, setExercises, bodyPart }) {
  const [currentPage, setCurrentPage] = useState(1);
  const ExercisePerPage = 9;
  const indexOfLastExercise = currentPage * ExercisePerPage;
  const indexOfFirstExercise = indexOfLastExercise - ExercisePerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  function paginate(e, value) {
    setCurrentPage(value);
    window.scrollTo({ top: 700, behavior: "smooth" });
  }

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises?limit=900",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }

      if (Array.isArray(exercisesData)) {
        setExercises(exercisesData);
      } else {
        console.error("Fetched data is not an array", exercisesData);
        setExercises([]);
      }
    };

    fetchExercisesData();
  }, [bodyPart]);

  return (
    <div className="exercises-box">
      <h3 className="results-heading">Showing Exercise Results</h3>
      <div className="exercises-stack">
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </div>
      <div className="pagination-div">
        {exercises.length > ExercisePerPage && (
          <Pagination
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / ExercisePerPage)}
            page={currentPage}
            onChange={paginate}
            size="medium"
            color="primary"
            sx={{
              button: { color: "white" },
              ".css-1pi9rcw-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected":
                {
                  backgroundColor: "#fba004",
                  "&:hover": {
                    backgroundColor: "#ffb83e",
                  },
                },
              ".MuiPaginationItem-root": {
                color: "white",
              },
            }}
          />
        )}
      </div>
    </div>
  );
}

ExerciseList.propTypes = {
  exercises: PropTypes.array.isRequired,
  setExercises: PropTypes.func.isRequired,
  bodyPart: PropTypes.string.isRequired,
};

export default ExerciseList;
