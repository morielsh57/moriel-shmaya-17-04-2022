import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import React, { useState } from "react";

import "./weatherTop.css";

const WeatherTop: React.FC = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const setIsFav = () => {
    setIsFavorite(!isFavorite);
  }

  return (
    <section className="weather-top">
      <div className="current">
        Tel Aviv <br /> 38°c
      </div>
      <div className="fav">
        {isFavorite ?
          <HeartFilled onClick={setIsFav} />
          :
          <HeartOutlined onClick={setIsFav} />
        }
      </div>
    </section>
  );
}
export default WeatherTop;