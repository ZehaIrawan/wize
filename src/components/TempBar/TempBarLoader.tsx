import React from "react";
import "./style.css";

interface Props {
  hour: string;
}

const TempBarLoader: React.FC<Props> = (props) => {
  return (
    <div className="tempbar_container">
      <div className="tempbar">
        <div className="tempbar__temp"></div>
      </div>
      <span className="tempbar_hour">{props.hour}</span>
    </div>
  );
};

export default TempBarLoader;
