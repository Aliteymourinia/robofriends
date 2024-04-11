import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Component } from "react";
import Hello from "./Hello";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello />
      </div>
    );
  }
}
export default App;
