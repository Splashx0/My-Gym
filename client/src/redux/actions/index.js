export const setWorkouts = (w) => {
  return {
    type: "SET_WORKOUTS",
    payload: w,
  };
};
export const createWorkout = (w) => {
  return {
    type: "CREATE_WORKOUT ",
    payload: w,
  };
};
export const deleteWorkout = (id) => {
  return {
    type: "DELETE_WORKOUT",
    payload: id,
  };
};
