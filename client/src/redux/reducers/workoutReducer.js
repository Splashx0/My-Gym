const workoutReducer = (state = { workouts: null }, action) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return {
        workouts: action.payload,
      };
    case "CREATE_WORKOUT":
      return {
        workouts: [...state.workouts, action.payload],
      };
    case "DELETE_WORKOUT":
      return {
        workouts: state.workouts.filter(
          (workout) => workout._id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default workoutReducer;
