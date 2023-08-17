import React from "react";
import "../css/buttons.css";

function Buttons({ symbol, color, handleClick }) {
  return (
    <div
      onClick={() => handleClick(symbol)}
      className="button-wrapper"
      style={{ backgroundColor: color }}
    >
      {symbol}
    </div>
  );
}

export default Buttons;
