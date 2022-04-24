import React, { Component } from "react";
import { generateName, generateCountry } from "../../logic/randomname.js";
export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      id: 1,
      username: "",
      password: "",
      gender: "",
      country: "VN",
      description: "",
      checked: 0,
    };
    this.handleSubmit.bind(this);
    this.handOnChange.bind(this);
    this.delete.bind(this);
    this.autoFill.bind(this);
  }
  handleSubmit(evt = null) {
    if (evt !== null) evt.preventDefault();

    this.setState({ id: this.state.id + 1 });
    this.state.list.push({
      id: this.state.id,
      username: this.state.username,
      password: this.state.password,
      gender: this.state.gender,
      country: this.state.country,
      description: this.state.description,
      checked: this.state.checked,
    });
    this.setState({
      username: "",
      password: "",
      gender: "0",
      description: "",
      checked: this.state.checked,
    });
  }
  autoFill() {
    this.setState({ id: this.state.id + 1 });
    this.state.list.push({
      id: this.state.id,
      username: generateName(),
      password: generateName(),
      gender: (Math.floor(Math.random() * 6) % 2).toString(),
      country: generateCountry(),
      description: generateName(),
      checked: Math.floor(Math.random() * 6) % 2,
    });
  }
  handOnChange(evt) {
    const target = evt.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }
  delete(e) {
    const list = this.state.list;
    list.splice(this.isduplication(this.state.list, e), 1);
    console.log(list);
    this.setState({ list: list });
  }
  isduplication(list, id) {
    const even = (item) => item.id === id;
    return list.findIndex(even);
  }
  render() {
    return (
      <div className="container">
        <h2>Form</h2>
        <form
          action=""
          onSubmit={(e) => {
            this.handleSubmit(e);
          }}
        >
          <div className="block">
            <label htmlFor="username">Username:</label>
            <input
              className="formInput"
              type="text"
              name="username"
              id="username"
              onChange={(e) => {
                this.handOnChange(e);
              }}
              required
            />
          </div>
          <div className="block">
            <label htmlFor="password">Password:</label>
            <input
              className="formInput"
              type="password"
              name="password"
              id="password"
              onChange={(e) => {
                this.handOnChange(e);
              }}
              required
            />
          </div>
          <div className="block">
            <label htmlFor="">Gender:</label>
            <div className="flex">
              <input
                className=""
                type="radio"
                name="gender"
                id="Male"
                value="0"
                defaultChecked
                onChange={(e) => {
                  this.handOnChange(e);
                }}
              />
              <label htmlFor="Male">Male</label>
              <input
                className=""
                type="radio"
                name="gender"
                id="Female"
                value="1"
                onChange={(e) => {
                  this.handOnChange(e);
                }}
              />
              <label htmlFor="Female">Female</label>
            </div>
          </div>
          <div className="block">
            <label htmlFor="country">Country:</label>

            <select
              name="country"
              id="country"
              className="formInput"
              onChange={(e) => {
                this.handOnChange(e);
              }}
            >
              <option value="VN">Viet Nam</option>
              <option value="US">United State</option>
              <option value="JP">Japon</option>
              <option value="SKR">South korea</option>
            </select>
          </div>
          <div className="block">
            <label htmlFor="description">Description:</label>
            <textarea
              className="formInput description"
              type="password"
              name="description"
              id="description"
              onChange={(e) => {
                this.handOnChange(e);
              }}
            />
          </div>
          <div className="">
            <input
              type="checkbox"
              name="checked"
              id="accept"
              onChange={(e) => {
                this.handOnChange(e);
              }}
              value="true"
              required
            />
            <label htmlFor="accept"> I agree to Teams of Service</label>
          </div>
          <div className="block">
            <button className="formInput button">Submit</button>
            <button
              className="formInput button"
              type="button"
              onClick={() => {
                this.autoFill();
              }}
            >
              Auto fill
            </button>
          </div>
        </form>
      </div>
    );
  }
}
