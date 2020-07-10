import React from "react";
import "./style.css";

function Button(props) {
  return (
    <button onClick={props.onClick} className={`button ${props["data-value"]}`} {...props} />
  );
}

export default Button;
