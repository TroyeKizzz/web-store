import { useLocation, useNavigate } from "react-router-dom";
import GameRow from "../components/GameRow";
import Header from "../components/Header";
import { Button } from "@mui/material";
import useCart from "../hooks/useCart";

const OrderConfirmationScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [cart, { emptyCart }] = useCart();

  return (
    <div>
      <Header />
      <p style={{ fontSize: 30, fontWeight: 600, textAlign: "center" }}>
        Thank you for your order!
      </p>
      <div className="orderlist-div">
        <table>
          <tbody>
            {location?.state?.map((g) => (
              <GameRow game={g} key={g.game.id} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="orderlist-div">
        <Button
          variant="contained"
          sx={{ marginTop: 2 }}
          onClick={() => {
            navigate("/");
            emptyCart();
          }}
        >
          Go to main
        </Button>
      </div>
    </div>
  );
};

export default OrderConfirmationScreen;
