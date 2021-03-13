import React from 'react';

function Squirrel(props) {
  return (
    <div className="Squirrel">
      <h3>SQUIRREL CARD!</h3>
      <p>Name:{props.name}</p>
      <p>Age: {props.age === "Adult" ? "I'm Old!" : "🍼"}</p>
      <p>Color {props.color}</p>
      <p> I'm running!!! {props.running ? "🏃": "No" }</p>
      <p> Climbing? {props.climbing ? "I'm Climbing!" : "I'm on the ground"}</p>
      <p>Eating? {props.eating ? "🍔" : "I'm not hungry!"}</p>
      <p> Foraging?{props.foraging ? "😮" : ""}</p>
    </div>
  );
}

export default Squirrel;
