import React, { Component } from "react";

export default class Product extends Component {
  render() {
    const {data} = this.props;
    console.log(data);
    return (
      <li className="product-item col-6">
        <a href=".">
          <div className="product-img">
            <img src={data.img} alt="" />
          </div>
          <p className="product-name">{data.Name}</p>
          <p className="product-price">{data.price}</p>
        </a>
      </li>
    );
  }
}
