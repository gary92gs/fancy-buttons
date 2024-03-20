import React, {useState} from "react";

function TextReapeaterButton() {
  const [repetitions, setRepetitions] = useState();

  return (
    <button className="TextRepeaterButton">
      <span>I like this text</span>
    </button>
  );
}

export default TextReapeaterButton;