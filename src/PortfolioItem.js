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
        <a id="link" className={this.props.id} href={this.props.link}>
          <h1>{this.props.title}</h1>
        </a>
        <p className="description description1" id={this.props.id + "1"}>
          {this.props.description1}
        </p>
        <p className="description description2" id={this.props.id + "2"}>
          {this.props.description2}
        </p>
        <div className="ImageArea">
          {this.imageLoop()}
        </div>
      </div>
    )
  }
}