import "./style.css";

const TembBar = (props) => {
  return (
    <div className="tempbar">
      <div className="tempbar__temp" style={{ height: props.height }}>
        {props.height}°C
      </div>
    </div>
  );
};

export default TembBar;
