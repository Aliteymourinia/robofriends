import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  } 
  componentDidMount() {
    this.setState({robots:robots})
  }


  OnSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    console.log(filteredRobots);

    return (
      <div className="text-center">
        <h1 className="text-5xl py-5 ">RoboFriends</h1>
        <SearchBox searchChange={this.OnSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}
export default App;
