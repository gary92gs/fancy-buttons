import React, { useState } from "react";

function AngryButton(props) {
  const [anger, setButtonAnger] = useState(0);
  const increaseButtonAnger = () => {
    setButtonAnger((prev) => {
      if (prev + 1 <= 10) {
        return prev + 1;
      }
      return 0;
    });
  };

  const handleClick = () => {
    increaseButtonAnger();
    props.increaseAppAnger();
  };

  return (
    <button className="AngryButton" onClick={handleClick} style={{ backgroundColor: `rgba(255,0,0,${anger / 10})` }}>
      {anger < 10 && <span>Don't click me too much!</span>}
      {anger === 10 && <span>Rawr!</span>}
    </button>
  );
}

export default AngryButton;