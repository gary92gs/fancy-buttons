import React, { useState } from "react";

function CounterButton(props) {
  const [clickAmount, setClickAmount] = useState(0);

  const countClick = () => {
    setClickAmount((prev) => {
      return prev + 1;
    });
  };

  const handleClick = () => { 
    countClick();
    props.increaseAppAnger();
  };

  return (
    <button className="CounterButton" onClick={handleClick}>
      You clicked me {clickAmount} amount of times
    </button>
  );
}

export default CounterButton;