import React, { Component, createRef } from "react";
import "./App.css";
class App extends Component {
  inputRef = createRef();

  constructor() {
    super();
    {
      this.state = {
        timer: 0,
        start: false,
        id: null,
      };
      this.incrementer = null;
    }
  }

  handle = () => {
    this.setState({
      start: true,
    });
    this.incrementer = setInterval(() => {
      return this.setState({
        timer: this.state.timer + 1,
      });
    }, 1000);
    this.setState({
      id: null,
    });
    return () => {
      clearInterval(this.incrementer);
    };
  };
  Stop = () => {
    debugger;
    clearInterval(this.incrementer);
  };
  Reset = () => {};
  Pause = () => {};

  Reset = () => {
    clearInterval(this.incrementer);
    this.setState({
      timer: 0,
    });
  };

  render() {
    console.log(this.inputRef, "$#@%@");
    return (
      <div className="App">
        <div className="timer-count">{this.state.timer}</div>
        <div className="btn-container">
          <button style={{ margin: "5px" }} onClick={() => this.handle()}>
            Start
          </button>
          <button style={{ margin: "5px" }} onClick={() => this.Stop()}>
            Stop
          </button>
          <button style={{ margin: "5px" }} onClick={() => this.Reset()}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}
export default App;
