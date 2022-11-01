import "./styles/GameRow.css";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import useCart from "../hooks/useCart";

function GameRow(props) {
  const [cart, { setQtyInCart }] = useCart();
  return (
    <tr className="tr-game-row">
      <td>
        <div className="div-game-row-content">
          <img
            src={props.game.game.imageUrl}
            className="game-row-icon"
            alt="Avatar"
          />
        </div>
      </td>
      <td>
        <div className="div-game-row-content">
          <p className="p-game-title">{props.game.game.title}</p>
          <p className="p-game-detail">
            <span className="span-game-detail-parameter">Genre</span>
            {": "}
            {props.game.game.genre}
          </p>
          <p className="p-game-detail">
            <span className="span-game-detail-parameter">Publisher</span>
            {": "}
            {props.game.game.publisher}
          </p>
          <p className="p-game-detail">
            <span className="span-game-detail-parameter">Released</span>
            {": "}
            {props.game.game.releaseYear}
          </p>
        </div>
      </td>
      <td>€{props.game.game.price.toFixed(2)}</td>
      <td>
        <FormControl fullWidth>
          <InputLabel id="qty-select-label">Qty</InputLabel>
          <Select
            labelId="qty-select-label"
            id="demo-simple-select"
            value={props.game.qty}
            label="Age"
            onChange={(event) =>
              setQtyInCart(props.game.game, event.target.value)
            }
          >
            <MenuItem value={0}>0</MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
          </Select>
        </FormControl>
      </td>
      <td>€{(props.game.game.price * props.game.qty).toFixed(2)}</td>
    </tr>
  );
}

export default GameRow;
