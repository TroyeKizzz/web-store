import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
import HomeScreen from "./screens/HomeScreen";
import OrderScreen from "./screens/OrderScreen";
import OrderConfirmationScreen from "./screens/OrderConfirmationScreen";
import OrderHistoryScreen from "./screens/OrderHistoryScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<LoginScreen />} />
        <Route exact path="/register" element={<RegistrationScreen />} />
        <Route exact path="/" element={<HomeScreen />} />
        <Route exact path="/order" element={<OrderScreen />} />
        <Route
          exact
          path="/order-confirmation"
          element={<OrderConfirmationScreen />}
        />
        <Route exact path="/my-orders" element={<OrderHistoryScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
