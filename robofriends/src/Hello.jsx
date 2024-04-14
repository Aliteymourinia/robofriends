
import React, { Component } from "react";
import "./Hello.css";
class Hello extends Component {
  render() {
    return (
      <div className="">
        <h1 className="text-purple-500">hello world</h1>
        <p>{this.props.greeting}</p>
      </div>
    );
  }
}
export default Hello;
