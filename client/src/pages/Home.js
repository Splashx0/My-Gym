import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { setWorkouts } from "../redux/actions";

const Home = () => {
  const workouts = useSelector((state) => state.workouts);
  console.log(workouts);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();
      dispatch(setWorkouts(json));
    };
    fetchWorkouts();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
