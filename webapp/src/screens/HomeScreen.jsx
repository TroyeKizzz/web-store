import Header from "../components/Header";
import useUser from "../hooks/useUser";
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
