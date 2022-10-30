import GamesList from "./GamesList";
import { useState, useEffect } from "react";
import { gameService } from "../firebase-config";
import GamesSearch from "./GamesSearch";

const GamesCatalogue = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    gameService.getGames().then((g) => setGames(g));
  }, []);

  return (
    <div>
      <GamesSearch />
      <GamesList list={games} />
    </div>
  );
};

export default GamesCatalogue;
