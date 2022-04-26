import "./App.css";

import React, { Component } from "react";
// import Table from "./component/table";
import User from "./component/User";
import Form from "./component/Form";
export default class App extends Component {
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
    this.delete.bind(this);
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
      <div>
        <main className="App-main">
          <section className="section input">
            <Form />
          </section>
          {/* <section className="section-table">
            <Table
              data={this.state.list}
              delete={(e) => this.delete(e)}
            ></Table>
          </section> */}
          <section className="section">
            <User />
          </section>
        </main>
      </div>
    );
  }
}
