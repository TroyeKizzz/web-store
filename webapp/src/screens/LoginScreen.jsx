import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { userService } from "../firebase-config";

const LoginScreen = () => {
  const navigate = useNavigate();
  const login = (event) => {
    event.preventDefault();
    userService.login(data).then(() => navigate("/"));
  };
  const [data, setData] = useState({ email: "", password: "" });
  const valueChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <Header />
      <form onSubmit={login}>
        <input placeholder="email" name="email" onChange={valueChange} />
        <input
          placeholder="password"
          name="password"
          type="password"
          onChange={valueChange}
        />
        <button type="submit">Login</button>
      </form>
      <button onClick={() => navigate("/register")}>Sign Up?</button>
    </div>
  );
};
export default LoginScreen;
