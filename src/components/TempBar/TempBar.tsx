import "./style.css";

const TembBar = (props) => {
  return (
    <div className="tempbar">
      <div
        className="tempbar__temp"
        style={{ height: props.weatherData.main.temp }}
      >
        {Math.round(props.weatherData.main.temp)}°
      </div>
    </div>
  );
};

export default TembBar;
