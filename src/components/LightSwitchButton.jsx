import React from "react";

function LightSwitchButton(props) {
  const { light, toggleLight } = props;

  const handleClick = () => {
    toggleLight();
    props.increaseAppAnger();
  };

  return (
    <button className="LightSwitchButton" onClick={handleClick}>
      {light && <span className="on"><i>💡</i> I'm on!</span>}
      {!light && <span className="off"><i>💡</i> I'm off!</span>}
    </button>
  );
}

export default LightSwitchButton;
