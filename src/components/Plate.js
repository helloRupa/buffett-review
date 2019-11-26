import React, { Component } from "react";
import Food from "./Food";

class Plate extends Component {

  displayPlate = () => (
    //DISPLAY FOOD HERE

    this.props.plateItems.map(item => (
      <Food key={Math.random()} item={item} handleFood={this.props.eatFood} />
    ))
  );

  render() {
    return (
      <div className="container jumbotron">
        <h4>PLATE CONTENTS</h4>
        <div className="row">{ this.displayPlate() }</div>
      </div>
    );
  }
}

export default Plate;
