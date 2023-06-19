import React, { ReactNode } from "react";
import "./style.css";

interface Props {
  children: ReactNode;
}

const TempBarGroup: React.FC<Props> = ({ children }) => {
  return <div className="tempbar__group">{children}</div>;
};

export default TempBarGroup;
