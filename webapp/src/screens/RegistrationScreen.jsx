import { useState } from "react";
import { userService } from "../firebase-config";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { Button, TextField, FormControl } from "@mui/material";

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
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            value={data.name}
            onChange={valueChange}
            sx={{ marginBottom: 1 }}
          />
          <Button variant="contained" type="submit" onClick={register}>
            Register
          </Button>
        </FormControl>
      </div>
    </div>
  );
};

export default RegistrationScreen;
