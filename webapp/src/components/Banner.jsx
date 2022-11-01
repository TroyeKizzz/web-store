import bannerImage from "../assets/banner.jpg";
import useUser from "../hooks/useUser";
import "./styles/Banner.css";

const Banner = () => {
  const user = useUser();
  return (
    <div className="div-banner">
      <img src={bannerImage} alt="Banner" width="100%" />
      <a href="http://www.freepik.com" className="a-banner-license">
        Illustration designed by katemangostar / Freepik
      </a>
      <div className="div-banner-welcome">
        <p className="p-banner-welcome">
          Welcome back, {user?.displayName || "user"}!
        </p>
      </div>
    </div>
  );
};

export default Banner;
