import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { userService } from "../firebase-config";
import useUser from "../hooks/useUser";

const HomeScreen = () => {
  const user = useUser();
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <p>Home screen</p>
      <p>Hello, {user?.email || "user"}</p>
      <button onClick={() => userService.logout().then(navigate("/login"))}>
        Log out
      </button>
    </div>
  );
};

export default HomeScreen;
