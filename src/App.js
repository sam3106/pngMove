import React from "react";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      top: 0,
      left: 0
    };
  }
  componentDidMount() {
    document.addEventListener("keydown", e => {
      if (e.keyCode === 38 && this.state.top > 0) {
        this.setState({ top: this.state.top - 2 });
        console.log("connected");
      } else if (e.keyCode === 40 && this.state.top < 74) {
        this.setState({ top: this.state.top + 2 });
      } else if (e.keyCode === 37 && this.state.left > 0) {
        this.setState({ left: this.state.left - 2 });
      } else if (e.keyCode === 39 && this.state.left < 94) {
        this.setState({ left: this.state.left + 2 });
      }
    });
  }

  render() {
    const backgroundStyle = {
      backgroundImage: `url(
  https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7c6f1009-9bed-42c1-90b2-5672c47100ef/d6mwl0m-ca65a3e0-1430-4695-8514-bb4422c4803e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdjNmYxMDA5LTliZWQtNDJjMS05MGIyLTU2NzJjNDcxMDBlZlwvZDZtd2wwbS1jYTY1YTNlMC0xNDMwLTQ2OTUtODUxNC1iYjQ0MjJjNDgwM2UucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1ZWES6x_Yu6o3MGskj7-9iI6K5iNjseECtBZ8nb3nPk
  )`,
      height: `25vh`,
      width: `5vw`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      position: "absolute",
      top: this.state.top + "vh",
      left: this.state.left + "vw"
    };
    return (
      <div className="App">
        <div>
          <div style={backgroundStyle}></div>
        </div>
      </div>
    );
  }
}

export default App;
