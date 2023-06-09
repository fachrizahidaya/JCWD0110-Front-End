import React from "react";
import { Jumbotron } from "../components/Header";
import { Card } from "../components/Card";
import { Link } from "react-router-dom";

class LandingClass extends React.Component {
  state = {
    number: 1,
  };

  onChangeNumber = () => {
    // metode untuk merubah state number
    this.setState({ number: this.state.number + 1 });
  };

  componentDidMount() {
    console.log("did mount running");
  }

  componentDidUpdate() {
    console.log("did update running");
  }

  componentWillUnmount() {
    console.log("will unmount running");
  }

  render() {
    return (
      <div>
        {console.log("render running")}
        <p>
          State pengganti variable, ketika terjadi perubahan akan me-render
          ulang
        </p>
        <div>
          {this.state.number}
          <button onClick={this.onChangeNumber}>+</button>
          <Link to={"/test"}>Go to </Link>
        </div>
      </div>
    );
  }
}

export default LandingClass;
