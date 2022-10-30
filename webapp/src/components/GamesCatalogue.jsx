import GamesList from "./GamesList";
import { useState, useEffect } from "react";
import { gameService } from "../firebase-config";
import GamesSearch from "./GamesSearch";

const GamesCatalogue = () => {
  const [games, setGames] = useState([]);
  const [genre, setGenre] = useState("All");
  const [order, setOrder] = useState("title");
  const [orderDirection, setOrderDirection] = useState("desc");

  useEffect(() => {
    gameService
      .getGames(
        undefined,
        genre === "All" ? undefined : genre,
        order,
        orderDirection
      )
      .then((g) => setGames(g));
  }, [order, genre, orderDirection]);

  return (
    <div>
      <GamesSearch
        genre={genre}
        setGenre={setGenre}
        order={order}
        setOrder={setOrder}
        orderDirection={orderDirection}
        setOrderDirection={setOrderDirection}
      />
      <GamesList list={games} />
    </div>
  );
};

export default GamesCatalogue;
