import userReducer from "./userReducer";
import workoutReducer from "./workoutReducer";
import { combineReducers } from "redux";

const Reducers = combineReducers({ userReducer, workoutReducer });

export default Reducers;
