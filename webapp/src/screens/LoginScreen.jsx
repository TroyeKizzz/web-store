import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { userService } from "../firebase-config";
import { Button, TextField, FormControl } from "@mui/material";

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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <FormControl sx={{ marginTop: 6 }}>
          <TextField
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            value={data.email}
            onChange={valueChange}
            sx={{ marginBottom: 1 }}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            value={data.password}
            onChange={valueChange}
            sx={{ marginBottom: 1 }}
          />
          <Button variant="contained" type="submit" onClick={login}>
            Login
          </Button>
          <Button
            variant="contained"
            type="button"
            onClick={() => navigate("/register")}
            sx={{ marginTop: 4 }}
          >
            Sign Up?
          </Button>
        </FormControl>
      </div>
    </div>
  );
};
export default LoginScreen;
