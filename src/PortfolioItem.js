import React from 'react';
import { PortfolioImage } from './PortfolioImage';
import './PortfolioItem.css';

export class PortfolioItem extends React.Component {
  imageLoop() {
    let html = [];
    let images = this.props.images;
    for (var key in images) {
      if (images.hasOwnProperty(key)) {
        html.push(<PortfolioImage src={key} description={images[key]} title={this.props.title}/>);
      }
    }
    return html;
  }

  render() {
    return (
      <div className="PortfolioItem">
        <a id="link" href={this.props.link}>
          <h1>{this.props.title}</h1>
        </a>
        <p className="description" id="description1">
          {this.props.description1}
        </p>
        <p className="description" id="description2">
          {this.props.description2}
        </p>
        <div className="ImageArea">
          {this.imageLoop()}
        </div>
      </div>
    )
  }
}