import "./style.css";
import weatherClear from "../../assets/Weather=Clear, Is Current=True.svg";
import nextIcon from "../../assets/Next Card.svg";
import previousIcon from "../../assets/Previous Card.svg";

const InfoCard = () => {
  return (
    <div className="info-card">
      <img className="weather-icon" src={weatherClear}></img>
      <div className="info-card__temp">23°C</div>
      <div className="info-card__date">16.06.2023</div>
      <button onClick={() => console.log("prev")} className="prev-button">
        <img src={previousIcon} alt="" />
      </button>
      <button onClick={() => console.log("next")} className="next-button">
        <img src={nextIcon} alt="" />
      </button>
    </div>
  );
};

export default InfoCard;
