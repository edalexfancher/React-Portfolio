import React from 'react';
import { PortfolioImage } from './PortfolioImage';
import './PortfolioItem.css';

export class PortfolioItem extends React.Component {
  imageLoop() {
    let html = [];
    let images = this.props.images;
    for (var key in images) {
      if (images.hasOwnProperty(key)) {
        html.push(<PortfolioImage src={key} description={images[key]}/>);
      }
    }
    return html;
  }

  render() {
    return (
      <div className="PortfolioItem">
        <div className="title">
          <h3>{this.props.title}</h3>
        </div>
        <div className="ImageArea">
          {this.imageLoop()}
        </div>
      </div>
    )
  }
}

// ( <p className="description description1" id={this.props.id + "1"}>
//           {this.props.description1}
//         </p>
//         <p className="description description2" id={this.props.id + "2"}>
//           {this.props.description2}
//         </p>)