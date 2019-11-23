import React from "react";
import Food from "./Food";

const Plate = ({ plateFood, eatFood }) => {

  const displayFood = () => {
    return (
      plateFood.map(food => <Food food={food} customAction={eatFood} key={`${food.name}${Math.random()}`} />)
    )
  };

  // BONUS
  const calculateCalories = () => plateFood.reduce((total, food) => total + food.calories, 0);

  return (
    <div className="container jumbotron">
      <h4>PLATE CONTENTS</h4>
      {/* BONUS */}
      <div className="calories">Total calories: {calculateCalories()}</div>
      <div className="row">{displayFood()}</div>
    </div>
  );
};

export default Plate;
