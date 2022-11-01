import "./styles/GameCard.css";
import { Button } from "@mui/material";
import { emit } from "../events";
import useCart from "../hooks/useCart";
import useUser from "../hooks/useUser";

function GameCard(props) {
  const [cart, { addToCart }] = useCart();
  const user = useUser();
  return (
    <div className="div-game">
      <p className="p-game-title">{props.game.title}</p>
      <div className="div-game-content">
        <img src={props.game.imageUrl} className="game-icon" alt="Avatar" />
        <div className="div-game-details">
          <p className="p-game-detail">
            <span className="span-game-detail-parameter">Genre</span>
            {": "}
            {props.game.genre}
          </p>
          <p className="p-game-detail">
            <span className="span-game-detail-parameter">Publisher</span>
            {": "}
            {props.game.publisher}
          </p>
          <p className="p-game-detail">
            <span className="span-game-detail-parameter">Released</span>
            {": "}
            {props.game.releaseYear}
          </p>
          <div className="div-game-price">
            <div className="div-game-price-main">
              {Math.floor(props.game.price)}
            </div>
            <div className="div-game-price-cents">
              {Math.floor(props.game.price * 100) -
                Math.floor(props.game.price) * 100}
            </div>
          </div>
          <p className="p-game-in-stock">In stock: {props.game.quantity}</p>
          {user && (
            <Button
              variant="contained"
              onClick={() => {
                addToCart(props.game);
                emit("cart-outdated");
              }}
            >
              Add to cart
            </Button>
          )}
          {!user && (
            <Button
              variant="contained"
              onClick={() => {
                alert("Log in to buy the items!");
              }}
            >
              Log in to buy
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default GameCard;
