import Circle from "./component/Circle";
import React, { Component } from "react";

export default class Home extends Component {
  componentDidUpdate() {}
  render() {
    return (
      <div>
        <h3>React component - props - life cycle</h3>

        <div className="flex">
          <Circle num={10} size={100} />
          <Circle num={15} size={150} />
          <Circle num={20} size={200} />
        </div>
      </div>
    );
  }
}
