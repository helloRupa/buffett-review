import React, { Component } from "react";
import "./App.css";
import Buffet from "./components/Buffet";
import Plate from "./components/Plate";
import FOOD_ITEMS from "./FOOD.js";

class App extends Component {

  constructor() {
    super();
    this.state = {
      buffetItems: [],
      plateItems: [],
      calories: 0
    };
  }

  componentDidMount() {
    this.setState({
      buffetItems: FOOD_ITEMS.food,
    });
  }

  eatFood = (food) => {
    const plateItems = [...this.state.plateItems];
    const foodIndex = plateItems.indexOf(food);

    plateItems.splice(foodIndex, 1);

    this.setState({
      plateItems: plateItems,
      calories: this.state.calories - food.calories
    });
  }

  updatePlateItems = (food) => {
    // push food into plateItems
    let temp = this.state.plateItems;
    const foodCopy = {...food};

    foodCopy.id = Math.random();
    temp.push(foodCopy);

    this.setState({
      plateItems: temp,
      calories: this.state.calories + foodCopy.calories
    });
  }

  render() {
    return (
      <div className="App">
        <h3>Welcome to the All-You-Can-Eat Buffet</h3>
        <Buffet food={this.state.buffetItems} updatePlateItems={this.updatePlateItems} />
        <Plate plateItems={this.state.plateItems} eatFood={this.eatFood} />
      </div>
    );
  }
}

export default App;
