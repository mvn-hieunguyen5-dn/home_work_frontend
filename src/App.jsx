import "./asset/css/App.css";

import React, { Component } from "react";
import Table from "./components/AccountTable";
import User from "./components/User";
import Form from "./components/AccountTable/RegisterForm";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      id: 0,
    };
    this.delete.bind(this);
    this.add.bind(this);
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
  add(item) {
    this.setState({ id: this.state.id + 1 });
    this.state.list.push({ ...item, id: this.state.id });
  }

  render() {
    return (
      <div>
        <main className="App-main">
          <div className="flex">
            <section className="section input">
              <Form addItem={(i) => this.add(i)} />
            </section>

            <section className="section">
              <User />
            </section>
          </div>
          <div className="flex">
            <section className="section-table ">
              <Table
                data={this.state.list}
                delete={(e) => this.delete(e)}
              ></Table>
            </section>
          </div>
        </main>
      </div>
    );
  }
}
