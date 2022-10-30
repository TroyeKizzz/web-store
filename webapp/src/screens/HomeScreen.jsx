import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { gameService, userService } from "../firebase-config";
import useUser from "../hooks/useUser";
import { useEffect } from "react";
import { useState } from "react";
import GamesCatalogue from "../components/GamesCatalogue";
import Banner from "../components/Banner";

const HomeScreen = () => {
  const user = useUser();

  return (
    <div>
      <Header />
      <Banner name={user?.displayName} />
      <GamesCatalogue />
    </div>
  );
};

export default HomeScreen;
