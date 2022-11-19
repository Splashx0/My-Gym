import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../redux/actions";
const Register = () => {
  const { user } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const response = await fetch("/api/user/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(json));
      dispatch(loginUser(json));
    }
  };
  return (
    <form className="register" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <label>Email address:</label>
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <label>Password:</label>
      <input type="password" onChange={(e) => setPassword(e.target.value)} />

      <button>Register</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Register;
