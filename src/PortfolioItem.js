import React from 'react';

export class PortfolioItem extends React.Component {
  handleClick() {
    this.props.toggleCurrent(this.props.name);
  }

  render() {
    if (!this.props.current) {
      return (<li onClick={() => this.handleClick()}>{this.props.name}</li>);
    } else {
      return(<li onClick={() => this.handleClick()} className="current">{this.props.name}</li>);
    }
  }
}