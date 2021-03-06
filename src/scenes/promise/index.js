import React, { Component } from "react";

class Promise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  componentWillMount() {
    var promise = new Promise((resolve, reject) => {
      let name = "Paul";

      if (name === "Paul") {
        resolve("Promise resolved successfully");
      } else {
        reject(Error("Promise rejected"));
      }
    });

    let obj = { newName: "" };

    promise.then(
      result => {
        this.setState({ name: result });
      },
      function(error) {
        this.setState({ name: error });
      }
    );
  }
  render() {
    return (
      <div>
        <h1>Promise</h1>
        <h2>{this.state.name}</h2>
      </div>
    );
  }
}

export default Promise;
