import React, { Component } from "react";
import "./App.css";
import Buffet from "./components/Buffet";
import Plate from "./components/Plate";
import FOOD_ITEMS from "./FOOD.js";

class App extends Component {
  state = {
    buffetFood: [],
    plateFood: []
  };

  // pretend it's a fetch request
  componentDidMount() {
    this.setState({ buffetFood: FOOD_ITEMS.food }); // array of objects with "name", "image", 'calories'
  }

  // get food on that plate!
  addFoodToPlate = (food) => {
    this.setState(prevState => {
      const foodCopy = { ...food };

      foodCopy.id = prevState.plateFood.length + 1;

      return { plateFood: prevState.plateFood.concat(foodCopy) };
    });
  }

  // remove food from plate
  eatFood = (eatenFood) => {
    this.setState(prevState => ({
      plateFood: prevState.plateFood.filter(food => food !== eatenFood)
    }));
  }

  render() {
    return (
      <div className="App">
        <h3>Welcome to the All-You-Can-Eat Buffet</h3>
        <Buffet buffetFood={this.state.buffetFood} addFoodToPlate={this.addFoodToPlate} />
        <Plate plateFood={this.state.plateFood} eatFood={this.eatFood} />
      </div>
    );
  }
}

export default App;
