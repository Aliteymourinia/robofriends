import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";
const App = () => {
  return (
    <div>
      <SearchBox />
      <h1>RoboFriends</h1>
      <CardList robots={robots} />;
    </div>
  );
};

export default App;
