import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteWorkout, logoutUser, setWorkouts } from "../redux/actions";
const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);
  console.log({ user: user });

  const logout = () => {
    localStorage.removeItem("user");
    dispatch(logoutUser());
    dispatch(setWorkouts(null));
  };
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout Buddy</h1>
        </Link>
        <nav>
          {user && (
            <div>
              <span>{user.email}</span>
              <button onClick={logout}>Log out</button>
            </div>
          )}
          {!user && (
            <div className="loginRegister">
              <Link to="/login">Login</Link>
              <Link to="/register">Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
