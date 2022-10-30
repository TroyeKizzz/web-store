import GameCard from "./GameCard";
import "./styles/GamesList.css";

const GamesList = (props) => {
  return (
    <div className="div-gamelist">
      {props?.list?.map((game) => (
        <GameCard game={game} key={game.id} />
      ))}
    </div>
  );
};

export default GamesList;
