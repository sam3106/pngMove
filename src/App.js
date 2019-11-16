import React from "react";
import Character from "./Character";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Character />
        </header>
      </div>
    );
  }
}

export default App;
