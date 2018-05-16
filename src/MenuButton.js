import React from 'react';
import { HoverLabel } from './HoverLabel';

export class MenuButton extends React.Component {
  constructor() {
    super();
    this.state = {hover: false}
  }

  handleHover(e) {
    this.state.hover ? this.setState({hover: false}) : this.setState({hover: true})
  }

  render() {
    if (this.state.hover === false) {
      return(
        <div className="menubtn" onMouseOver={this.handleHover.bind(this)} onMouseOut={this.handleHover.bind(this)}>{this.props.icon}</div>
      )
    } else {
      return(
        <div className="menubtn" onMouseOver={this.handleHover.bind(this)} onMouseOut={this.handleHover.bind(this)}>{this.props.icon}<HoverLabel label={this.props.name} /></div>
      )
    }
  }
}