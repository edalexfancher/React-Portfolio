import React from 'react';
import './PortfolioImage.css';

export class PortfolioImage extends React.Component {

  render() {
    if (this.props.description) {
      return(
      <div className="PortfolioImage">
        <img src={require(`${this.props.src}`)} alt="A screenshot of Eddie's page" description={this.props.description} />
        <p className="description">
          {this.props.description}
        </p>
      </div>
      )
    } else {
      return(
        <div className="PortfolioImage">
          <img src={require(`${this.props.src}`)} alt="A screenshot of Eddie's page" description={this.props.description} />
        </div>
      )
    }
    
  }
}