import React from "react";

export class Drag extends React.Component {
  handleDrag = () => {};
  render() {
    return <div ondrag={this.handleDrag}>ww</div>;
  }
}
