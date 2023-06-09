import React from "react";
import { Jumbotron } from "../components/Header";
import { Card } from "../components/Card";
import { Link } from "react-router-dom";

class LandingClass extends React.Component {
  state = {
    number: 1,
  };

 

  onChangeNumberPlus = () => {
    this.setState({ number: this.state.number + 1 });
  };

  render() {
    return (
      <div>
        <p>State sebagai pengganti variable di React</p>
        <p>{this.state.number}</p>
        <button onClick={this.onChangeNumberPlus}>+</button>
      </div>
    );
  }
}

export default LandingClass;
