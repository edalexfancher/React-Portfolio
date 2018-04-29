import React from 'react';
import './HoverLabel.css';

export class HoverLabel extends React.Component {
  render() {
    return(
      <div className="Hover-Label">
        {this.props.label}
      </div>
    )
  }
}