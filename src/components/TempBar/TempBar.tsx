import React from "react";
import "./style.css";
import { celsiusToFahrenheit } from "../../utils/tempConverter";

interface Props {
  selectedOption: string;
  weatherData: {
    main: {
      temp: number;
    };
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

  return (
    <div className="tempbar">
      <div
        className="tempbar__temp"
        style={{ height: `${props.weatherData.main.temp}px` }}
      >
        {getFinalTemp()}°
      </div>
    </div>
  );
};

export default TempBar;
