import React from 'react';
import './Eddie.css';

export class Eddie extends React.Component {
  render() {
    return(
      <div className="Eddie" onClick={() => this.props.unclick()}>
        <h1>Eddie Alex</h1>
      </div>
    )
  }
}