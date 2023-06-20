import React from "react";
import "./style.css";
import { celsiusToFahrenheit } from "../../utils/tempConverter";

interface Props {
  selectedOption: string;
  weatherData: {
    main: {
      temp: number;
    };
    dt_txt: string;
  };
}

const TempBar: React.FC<Props> = (props) => {
  const getFinalTemp = (): string => {
    if (props.selectedOption === "celcius") {
      return `${Math.round(props.weatherData.main.temp)}°C`;
    } else {
      return `${Math.round(
        celsiusToFahrenheit(props.weatherData.main.temp),
      )}°F`;
    }
  };



  const getHour = (dt_txt: string) => {
    const dtTxt = dt_txt.slice(11, 13);
    return dtTxt;
  };

  return (
    <div className="tempbar_container">
      <div className="tempbar">
        <div
          className="tempbar__temp"
          style={{ height: `${props.weatherData.main.temp}px` }}
        >
          {getFinalTemp()}°
        </div>
      </div>
      <span className="tempbar_hour">{getHour(props.weatherData.dt_txt)}</span>
    </div>
  );
};

export default TempBar;
