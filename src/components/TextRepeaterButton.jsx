import React, { useState } from "react";

function TextReapeaterButton(props) {
  const [repetitions, setRepetitions] = useState([<span key="0" >I like this text</span>]);

  const addRepetition = () => {
    setRepetitions((prev) => {
      return [...prev, <span key={`${prev.length}`}> I like this text</span>];
    });
  };

  const handleClick = () => { 
    addRepetition();
    props.increaseAppAnger();
  };
  
  return (
    <button className="TextRepeaterButton" onClick={handleClick}>
      {repetitions}
    </button>
  );
}

export default TextReapeaterButton;