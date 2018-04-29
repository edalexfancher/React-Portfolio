import React from 'react';
import './PortfolioImage.css';

export class PortfolioImage extends React.Component {

  render() {
    return(
      <div className="PortfolioImage">
        <img src={require(`${this.props.src}`)} alt={"A screenshot of" + this.props.title} description={this.props.description} />
      </div>
      )
  }
}