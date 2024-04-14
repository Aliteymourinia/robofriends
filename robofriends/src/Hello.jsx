import React, { Component } from "react";
import "./Hello.css";
class Hello extends Component {
  render() {
    return (
      <div>
        <h1 className="font-bold text-5xl text-purple-500">hello world</h1>
        <p>{this.props.greeting}</p>
      </div>
    );
  }
}
export default Hello;
