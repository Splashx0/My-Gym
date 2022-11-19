import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { setWorkouts } from "../redux/actions";

const Home = () => {
  const { workouts } = useSelector((state) => state.workoutReducer);
  const { user } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const json = await response.json();
      dispatch(setWorkouts(json));
    };
    if (user) {
      fetchWorkouts();
    }
  }, [dispatch]);

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
