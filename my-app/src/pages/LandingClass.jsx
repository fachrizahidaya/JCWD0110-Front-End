import React from "react";
import { Jumbotron } from "../components/Header";
import { Card } from "../components/Card";
import { Link } from "react-router-dom";

class LandingClass extends React.Component {
  state = {
    number: 1,
  };

  onChangeNumber = (prop) => {
    if (prop === "+") {
      if (this.state.number < 10) {
        this.setState({ number: this.state.number + 1 });
      }
    } else {
      if (this.state.number > 0) {
        this.setState({ number: this.state.number - 1 });
      }
    }
  };

  componentDidMount() {
    console.log("Did mount running");
  }

  componentDidUpdate() {
    console.log("did update running");
  }

  componentWillUnmount() {
    alert("are you sure?");
  }

  render() {
    // console.log("web running");
    return (
      <div>
        <p>State sebagai pengganti variable di React</p>
        <button onClick={() => this.onChangeNumber("-")}>-</button>
        <p>{this.state.number}</p>
        <button onClick={() => this.onChangeNumber("+")}>+</button>
      </div>
    );
  }
}

export default LandingClass;
