import { useState } from "react";
import { userService } from "../firebase-config";
import Header from "../components/Header";

const RegistrationScreen = () => {
  const register = async (event) => {
    event.preventDefault();
    userService.register(data);
  };
  const [data, setData] = useState({ email: "", password: "" });
  const valueChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <Header />
      <form onSubmit={register}>
        <input
          placeholder="email"
          name="email"
          onChange={valueChange}
          value={data.email}
        />
        <input
          placeholder="password"
          name="password"
          type={"password"}
          onChange={valueChange}
          value={data.password}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default RegistrationScreen;
