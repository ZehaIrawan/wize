import "./style.css";
import weatherClear from "../../assets/Weather=Clear, Is Current=True.svg";

const InfoCard = () => {
  return (
    <div className="info-card">
      <img className="weather-icon" src={weatherClear}></img>
      <div className="info-card__temp">23°C</div>
      <div className="info-card__date">16.06.2023</div>
    </div>
  );
};

export default InfoCard;
