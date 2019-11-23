import React from "react";
import Food from "./Food";

const Buffet = ({ buffetFood, addFoodToPlate }) => {

  const displayBuffet = () => (
    buffetFood.map(food => <Food food={food} customAction={addFoodToPlate} key={food.name} />)
  );

  return (
    <div className="container jumbotron">
      <h4>BUFFET CONTENTS</h4>
      <div className="row">{displayBuffet()}</div>
    </div>
  );
}

export default Buffet;
