import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<LoginScreen />} />
        <Route exact path="/register" element={<RegistrationScreen />} />
        <Route exact path="/" element={<HomeScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
