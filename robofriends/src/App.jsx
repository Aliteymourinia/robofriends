import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }

  OnSearchChange(event) {
    console.log(event);
  }
 
  render() {
    return (
      <div className="text-center">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.OnSearchChange} />
        <CardList robots={this.state.robots} />
      </div>
    );
  }
}
export default App;
