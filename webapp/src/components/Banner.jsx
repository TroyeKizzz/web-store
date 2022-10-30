import bannerImage from "../assets/banner.jpg";
import "./styles/Banner.css";

const Banner = (props) => {
  return (
    <div className="div-banner">
      <img src={bannerImage} alt="Banner" width="100%" />
      <a href="http://www.freepik.com" className="a-banner-license">
        Designed by katemangostar / Freepik
      </a>
      <div className="div-banner-welcome">
        <p className="p-banner-welcome">
          Welcome back, {props?.name || "user"}!
        </p>
      </div>
    </div>
  );
};

export default Banner;
