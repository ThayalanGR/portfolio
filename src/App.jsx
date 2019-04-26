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
        <div className="d-flex justify-content-center align-items-center" style={{maxWidth: "100vw", overflow: "hidden"}}>
          <a className="btn btn-link btn-sm  animated fadeIn slow delay-1s" target="_blank" rel="noopener noreferrer" href="https://github.com/ThayalanGR"><i className="text-light fab fa-github git" style={{fontSize: "30px"}}></i></a>
          <a className="btn btn-link btn-sm  animated fadeIn slow delay-2s" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCe0h3ma0SUcrwQaXb4NeHiQ"><i className="text-light fab fa-youtube you" style={{fontSize: "30px"}}></i></a>
          <a className="btn btn-link btn-sm  animated fadeIn slow delay-3s" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/thayalangr/"><i className="text-light fab fa-instagram ins" style={{fontSize: "30px"}}></i></a>
          <a className="btn btn-link btn-sm  animated fadeIn slow delay-4s" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/thayalan.gr.77"><i className="text-light fab fa-facebook-f fac" style={{fontSize: "30px"}}></i></a>
        </div>
      </div>
    );
  }
}

export default App;
