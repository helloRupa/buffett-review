import React from "react";

const Buffet = ({ food, customAction }) => {

    return (
      <div className="col col-md-2">
        <div className="card" onClick={() => customAction(food)}>
          {/* IMAGE BELOW */}
          <img className="card-img-top" src={food.image} alt="" />
          <div className="card-body">
            <p>{food.name}</p>
            <p className="food-calories">{food.calories} calories</p> {/* BONUS */}
          </div>
        </div>
      </div>
    );

};

export default Buffet;
