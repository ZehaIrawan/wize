import "./style.css";
import weatherClear from "../../assets/Weather=Clear, Is Current=True.svg";
import nextIcon from "../../assets/Next Card.svg";
import previousIcon from "../../assets/Previous Card.svg";

const InfoCard = (props) => {
  const handleNextDate = () => {
    console.log("next");
    props.nextDate();
  };

  const formatDate = (dtTxt) => {
    const date = new Date(dtTxt);
    const formattedDate = `${date.getDate().toString().padStart(2, "0")}.${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}.${date.getFullYear()}`;
    return formattedDate;
  };

  return (
    <div className="info-card">
      <img className="weather-icon" src={weatherClear}></img>
      {/* <div className="info-card__temp">23°C</div> */}
      <div className="info-card__temp">{`${Math.round(props.weatherData.main.temp)}°C`}</div>
      {/* <div className="info-card__date">16.06.2023</div> */}
      <div className="info-card__date">
        {formatDate(props.weatherData.dt_txt)}
      </div>
      <button onClick={() => console.log("prev")} className="prev-button">
        <img src={previousIcon} alt="" />
      </button>
      <button onClick={handleNextDate} className="next-button">
        <img src={nextIcon} alt="" />
      </button>

      <div className="shadow-info-card__left"></div>
      <div className="shadow-info-card__right"></div>
    </div>
  );
};

export default InfoCard;
