import React, { Component } from "react";

class Food extends Component {

  handleClick = () => {
    this.props.handleFood(this.props.item);
  }

  render() {
    const { name, image } = this.props.item;

    return (
      <div className="col col-md-2" onClick={this.handleClick}>
        <div className="card">
          {/* IMAGE BELOW */}
          <img className="card-img-top" src={ image } />
          <div className="card-body">
          <p>{ name }</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Food;
