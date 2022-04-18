import React from "react";
import {SearchOutlined} from "@ant-design/icons";
import WeatherTop from "./weather-top/weatherTop";
import cloudImg from "../../assets/images/clouds-nature.png";
import "./home.css";

const Home: React.FC = (props) => {

  return (
    <main>
      <div className="search">
        <button><SearchOutlined /></button>
        <input type="text" />
      </div>
      <div className="weather-container">
        <WeatherTop/>
        {/* <img src={cloudImg} alt="cloud" /> */}
      </div>
    </main>
  );
}
export default Home;