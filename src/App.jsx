import React, { Component } from "react";

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div
        id="root-body"
        className="container-fluid d-flex justify-content-center align-items-center bg-white
        viewport flex-column"
      >
        <h1 className="text-light font-weight-bold text-uppercase lspace-1 animated fadeIn slow delay-1s  ">
          Thayalan G R
          <hr />
        </h1>
        <h2 className="text-light font-weight-light construction animated fadeIn slow delay-2s">
          Website Under Construction!
        </h2>
      </div>
    );
  }
}

export default App;
