import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <button
      // onClick={props.onClick}
      className="btn" 
      // {`button ${props["data-value"]}`}
      // {...props}
      // style={{ opacity: props.image ? 1 : 0 }}
      // onClick={props.handleBtnClick}
      // data-value="pass"
    />
  );
}

export default Button;
