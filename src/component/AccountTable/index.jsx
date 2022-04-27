import React, { Component } from "react";
import Item from "./Account_Item";
export default class table extends Component {
  delete(id) {
    if (window.confirm('Are you sure want to delete this Item ?')) {
      this.props.delete(id);
    } else {
    }
  }
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <td>ID</td>
            <td>Username</td>
            <td>Password</td>
            <td>Gender</td>
            <td>Country</td>
            <td>Decription</td>
            <td>Checked</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {this.props.data.map((item) => (
            <Item
              data={item}
              key={item.id}
              delete={(e = item.id) => this.delete(e)}
            />
          ))}
        </tbody>
      </table>
    );
  }
}
