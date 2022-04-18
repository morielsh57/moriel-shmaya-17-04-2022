import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import WeatherTop from "./weather-top/weatherTop";
import cloudImg from "../../assets/images/clouds.png";
import "./home.css";
import FiveDaysForecasts from "./five-days-forecasts/fiveDaysForecasts";

const Home: React.FC = (props) => {

  return (
    <main>
      <div className="search">
        <button><SearchOutlined /></button>
        <input type="text" />
      </div>
      <div className="weather-container">
        <WeatherTop />
        <div className="clouds">
          <img src={cloudImg} alt="cloud" />
          <img src={cloudImg} alt="cloud" />
          <img src={cloudImg} alt="cloud" />
        </div>
        <FiveDaysForecasts/>
      </div>
    </main>
  );
}
export default Home;