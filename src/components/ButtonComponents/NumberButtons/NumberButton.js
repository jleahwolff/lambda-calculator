import React from "react";
import Numbers from './Numbers';

const NumberButton = (props) => {
  return (
    <>
    <button onClick = {() => props.addNumber(props.text)}>
      {props.text}
    </button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default NumberButton;