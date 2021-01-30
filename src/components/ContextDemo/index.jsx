import React from "react";

const ThemeContext = React.createContext("light");
class ContextDemo extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
        <ThemeContext.Consumer>
          {(value) => {
            console.log("value", value);
            return <div>{value}</div>;
          }}
        </ThemeContext.Consumer>
      </ThemeContext.Provider>
    );
  }
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  static contextType = ThemeContext;

  render() {
    console.log("context demo", this.context);
    return <button>{this.context}</button>;
  }
}

export default ContextDemo;
