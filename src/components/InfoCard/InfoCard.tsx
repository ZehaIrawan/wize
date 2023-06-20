import React, { useState } from "react";
import "./style.css";
import clearIcon from "../../assets/Weather=Clear, Is Current=True.svg";
import nextIcon from "../../assets/Next Card.svg";
import previousIcon from "../../assets/Previous Card.svg";
import rainIcon from "../../assets/Weather=Rain, Is Current=True.svg";
import thunderIcon from "../../assets/Weather=Thunder, Is Current=True.svg";
import { celsiusToFahrenheit } from "../../utils/tempConverter";

interface Props {
  weatherData: {
    weather: {
      main: string;
    }[];
    main: {
      temp: number;
    };
    dt_txt: string;
  };
  selectedOption: string;
  nextDate: () => void;
  previousDate: () => void;
}

const InfoCard: React.FC<Props> = (props) => {
  const [prevNumber, setPrevNumber] = useState(5);
  const [nextNumber, setNextNumber] = useState(5);

  let weatherIcon: string;
  switch (props.weatherData.weather[0].main) {
    case "Rain":
      weatherIcon = rainIcon;
      break;
    case "Thunderstorm":
      weatherIcon = thunderIcon;
      break;
    default:
      weatherIcon = clearIcon;
  }

  const handleNextDate = () => {
    if (nextNumber === 0) return;
    setNextNumber(nextNumber - 1);
    if (prevNumber !== 5) setPrevNumber(prevNumber + 1);
    props.nextDate();
  };

  const handlePreviousDate = () => {
    if (prevNumber === 0) return;
    setPrevNumber(prevNumber - 1);
    if (nextNumber !== 5) setNextNumber(nextNumber + 1);
    props.previousDate();
  };

  const formatDate = (dtTxt: string): string => {
    const date = new Date(dtTxt);
    const formattedDate = `${date.getDate().toString().padStart(2, "0")}.${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}.${date.getFullYear()}`;
    return formattedDate;
  };

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
    <div className="info-card">
      <img className="weather-icon" src={weatherIcon} alt="Weather Icon" />
      <div className="info-card__temp">{getFinalTemp()}</div>
      <div className="info-card__date">
        {formatDate(props.weatherData.dt_txt)}
      </div>
      <button
        onClick={handlePreviousDate}
        className="prev-button"
        disabled={prevNumber === 0}
      >
        <img
          src={previousIcon}
          alt="Previous Icon"
          style={{ opacity: prevNumber === 0 ? 0.5 : 1 }}
        />
      </button>
      <button
        onClick={handleNextDate}
        className="next-button"
        disabled={nextNumber === 0}
      >
        <img
          src={nextIcon}
          alt="Next Icon"
          style={{ opacity: nextNumber === 0 ? 0.5 : 1 }}
        />
      </button>

      <div className="shadow-info-card__left"></div>
      <div className="shadow-info-card__right"></div>
    </div>
  );
};

export default InfoCard;
