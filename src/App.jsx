import "./App.css";
import About from "./about";
import React, { Component } from "react";
import Home from "./Home";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      page: true,
    };
    this.switch = this.switch.bind(this);
  }
  switch(page) {
    if (page === "home") this.setState({ page: 1 });
    else this.setState({ page: 0 });
  }

  componentDidUpdate() {}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="flex switchbox">
            <button
              className={this.state.page ? "direct chosen" : " direct "}
              onClick={() => {
                this.switch("home");
              }}
            >
              Home page
            </button>
            <button
              className={this.state.page ? "direct " : " direct chosen"}
              onClick={() => {
                this.switch("about");
              }}
            >
              About
            </button>
          </div>
          {this.state.page ? <Home /> : <About />}
          {/* <Home /> */}
        </header>
      </div>
    );
  }
}
