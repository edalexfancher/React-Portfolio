import React from 'react';
import './Preview.css';

export class Preview extends React.Component {
  render() {
    return(
      <div className="Preview">
        <h1>{this.props.name}</h1>
      </div>
    )
  }
}