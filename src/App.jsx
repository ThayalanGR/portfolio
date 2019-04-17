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
        <h1 className="text-light font-weight-bold text-uppercase lspace-1 animated fadeIn slower">
          Thayalan G R
          <hr />
        </h1>
        <h2 className="text-light font-weight-light construction animated fadeIn slow delay-1s">
          Website Under Construction!
        </h2>
        <div className="m-3">
          <a className="btn btn-link animated fadeIn slow delay-1s" target="_blank" rel="noopener noreferrer" href="https://github.com/ThayalanGR"><i class="text-light fab fa-github" style={{fontSize: "30px"}}></i></a>
          <a className="btn btn-link animated fadeIn slow delay-2s" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCe0h3ma0SUcrwQaXb4NeHiQ"><i class="text-light fab fa-youtube" style={{fontSize: "30px"}}></i></a>
          <a className="btn btn-link animated fadeIn slow delay-3s" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/thayalangr/"><i class="text-light fab fa-instagram" style={{fontSize: "30px"}}></i></a>
          <a className="btn btn-link animated fadeIn slow delay-4s" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/thayalan.gr.77"><i class="text-light fab fa-facebook-f" style={{fontSize: "30px"}}></i></a>
        </div>
      </div>
    );
  }
}

export default App;
