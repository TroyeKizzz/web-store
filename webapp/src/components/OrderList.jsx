import { useEffect } from "react";
import { useState } from "react";
import useCart from "../hooks/useCart";
import GameRow from "./GameRow";
import { Button } from "@mui/material";
import "./styles/OrderList.css";
import { userService } from "../firebase-config";
import { useNavigate } from "react-router-dom";

const OrderList = (props) => {
  const [cart] = useCart();
  const [total, setTotal] = useState();
  const [seconds, setSeconds] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let price = 0;
    if (props?.data?.items) {
      props.data.items.forEach((g) => {
        price += g.qty * g.game.price;
      });
    } else {
      cart?.forEach((g) => {
        price += g.qty * g.game.price;
      });
    }
    setTotal(price);
  }, [cart, seconds]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="orderlist-div">
      {total && (
        <div>
          <table className="table-orderlist">
            <thead>
              <tr className="orderlist-table-row">
                <th colSpan={2}>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {props?.data &&
                props?.data?.items?.map(
                  (game) =>
                    game.qty > 0 && (
                      <GameRow game={game} key={game.game.id} editable={true} />
                    )
                )}
              {!props?.data &&
                cart?.map(
                  (game) =>
                    game.qty > 0 && (
                      <GameRow game={game} key={game.game.id} editable={true} />
                    )
                )}
            </tbody>
          </table>

          <div className="orderlist-div-checkout-wrapper">
            <div className="orderlist-div-checkout">
              {props?.data && (
                <span className="orderlist-span-total">
                  Order proccessed on:{" "}
                  {props.data.date.toDate().toLocaleString()}
                </span>
              )}

              <span className="orderlist-span-total">
                Total: €{total.toFixed(2)}
              </span>
              {!props?.data && (
                <div>
                  <Button
                    variant="contained"
                    sx={{ marginTop: 2 }}
                    onClick={() =>
                      userService.buyFromCart(cart).then(() => {
                        navigate("/order-confirmation", {
                          state: cart,
                        });
                      })
                    }
                  >
                    Check out
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {!props?.data && !total && (
        <p>Your cart is empty, place something there first!</p>
      )}
    </div>
  );
};

export default OrderList;
