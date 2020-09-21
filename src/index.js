import React from "react";
import ReactDOM from "react-dom";
class Ex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:this.props.name.charAt(this.props.char-1),
        char:this.props.char
    };
  }
  render() {
    return (
      <h1>
        {" "}
        {this.state.name} is {this.state.char}th character of {this.props.name}
      </h1>
    );
  }
}

ReactDOM.render(
  <div>
    {" "}
    <Ex name="Vinodh" char="3" />
    <Ex name="Erode" char="1" />
  </div>,
  document.getElementById("root")
);
