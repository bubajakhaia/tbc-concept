import React from "react";
import "./BigMsg.css"
const BigMsg = ({children}) => {
  return (
    <div className="bigmsg-container">
      <p className="bigmsg-text">{children}</p>
    </div>
  );
};

export default BigMsg;
