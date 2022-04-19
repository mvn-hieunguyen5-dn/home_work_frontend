import React, { Component } from "react";

export default class Circle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: this.props.num,
      size: this.props.size,
      isCount: true,
      timing: {},
    };
    this.startCountDown = this.startCountDown.bind(this);
    this.pauseCountDown = this.pauseCountDown.bind(this);
    this.startbutton = (
      <button className="clockBut" onClick={this.pauseCountDown}>
        {" "}
        <i className="fa-solid fa-pause"></i> Stop{" "}
      </button>
    );
    this.stopbutton = (
      <button className="clockBut" onClick={this.pauseCountDown}>
        <i className="fa-solid fa-play"></i> Start{" "}
      </button>
    );
  }

  startCountDown() {
    this.timing = setInterval(() => {
      this.setState({ timer: this.state.timer - 1 });
    }, 1000);
  }
  pauseCountDown() {
    this.setState({ isCount: !this.state.isCount });
    this.state.isCount ? this.clearCountdown() : this.startCountDown();
  }
  clearCountdown() {
    clearInterval(this.timing);
  }
  componentDidMount() {
    this.startCountDown();
  }
  componentWillUnmount() {
    this.clearCountdown();
  }
  componentDidUpdate() {
    if (this.state.timer === 0) this.clearCountdown();
  }
  render() {
    return (
      <div className="clock">
        {this.state.isCount ? this.startbutton : this.stopbutton}
        <div
          className="circle"
          style={{
            height: +this.state.size,
            width: +this.state.size,
          }}
        >
          <span className="timer">{this.state.timer}</span>{" "}
        </div>
      </div>
    );
  }
}
