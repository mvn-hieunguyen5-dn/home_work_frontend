import React, { Component } from "react";

export default class userTableRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.username}</td>
        <td>{this.props.data.password}</td>
        <td>{this.props.data.gender === "0" ? "male" : "female"}</td>
        <td>{this.props.data.country}</td>
        <td>{this.props.data.description}</td>
        <td>
          {" "}
          <span className={this.props.data.checked ? "green" : "red"}>
            {this.props.data.checked ? "checked" : "none"}
          </span>
        </td>
        <td className="flex">
          <button
            className="deleteButton flex"
            onClick={() => {
              this.props.delete(this.props.data.id)
            }}
          >
            <i className="fa-solid fa-trash-can"></i>Delete
          </button>
        </td>
      </tr>
    );
  }
}
