import React, { Component } from "react";

export default class BlogsSection extends Component {
  render() {
    return (
      <div className="container">
        <h3>latest blog posts </h3>
        <p>
          Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor!
        </p>
        <ul className="blog-list">
          <li className="blog">
            <a href=".">
              <img
                src={require("../../../picture/blog-01.jpg")}
                className="blogimg"
                alt=""
              />
              <h4>The Kozmophone Is a Holographic, Bluetooth Turntable</h4>
              <p>
                By <strong>admin</strong> on <strong>February 21, 2020</strong>{" "}
              </p>
              <p>
                Imagine a turntable with a portable and detachable
                phonograph-style horn speaker and a miniature.{" "}
              </p>
            </a>
          </li>
          <li className="blog">
            <a href=".">
              <img
                src={require("../../../picture/blog-02.jpg")}
                className="blogimg"
                alt=""
              />
              <h4>
                The Pi Offers a Futuristic Slice of Proximity Charging For New
                iPhones
              </h4>
              <p>
                By <strong>admin</strong> on <strong>February 21, 2020</strong>{" "}
              </p>
              <p>
                This startup founded by MIT grads wants users to charge up to
                four iPhones at the same time{" "}
              </p>
            </a>
          </li>
          <li className="blog">
            <a href=".">
              <img
                src={require("../../../picture/blog-03.jpg")}
                className="blogimg"
                alt=""
              />
              <h4>Poilu Vases Are 3D Printed with Implanted “Hair”</h4>
              <p>
                By <strong>admin</strong> on <strong>February 21, 2020</strong>{" "}
              </p>
              <p>
                A collection of 3D printed vases where "hair" is implanted
                during the printing process.{" "}
              </p>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
