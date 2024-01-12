import ExerciseList from "../components/ExercisesPage/ExerciseList";
import SearchExercises from "../components/ExercisesPage/SearchExercises";
import { useState } from "react";

function Exercises() {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  return (
    <div>
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <ExerciseList
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
      />
    </div>
  );
}

export default Exercises;
