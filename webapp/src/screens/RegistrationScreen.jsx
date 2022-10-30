import { useState } from "react";
import { userService } from "../firebase-config";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const RegistrationScreen = () => {
  const [data, setData] = useState({ email: "", name: "", password: "" });
  const [error, setError] = useState();
  const navigate = useNavigate();

  const register = async (event) => {
    event.preventDefault();
    if (verifyData()) {
      userService.register(data).then(() => navigate("/"));
    }
  };

  const verifyData = () => {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)) {
      setError("Incorrect email");
      return false;
    }
    if (data.password.length < 6) {
      setError("Password too short");
      return false;
    }
    if (data.name.length < 2) {
      setError("Name is required");
      return false;
    }
    return true;
  };

  const valueChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <Header />
      {error && (
        <div>
          <p>{error}</p>
        </div>
      )}
      <form onSubmit={register}>
        <input
          placeholder="Email"
          name="email"
          type="email"
          onChange={valueChange}
          value={data.email}
        />
        <input
          placeholder="Password"
          name="password"
          type="password"
          onChange={valueChange}
          value={data.password}
        />
        <input
          placeholder="Name"
          name="name"
          type="text"
          onChange={valueChange}
          value={data.name}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default RegistrationScreen;
