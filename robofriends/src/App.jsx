import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";

const state = {};

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }

  render() {
    return (
      <div className="text-center">
        <h1>RoboFriends</h1>
        <SearchBox />
        <CardList robots={robots} />
      </div>
    );
  }
}
export default App;
