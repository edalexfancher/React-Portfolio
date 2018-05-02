import React from 'react';
import './Carousel.css';

export const images = ['./pretty-lights-nyc.jpg','./beetroots-edc.jpg','./deadmau5.jpg',
                './pretty-lights-nyc-2.jpg', './Gramatik.jpg'
                ];

export class Carousel extends React.Component {
  render() {
    return(
      <div className="Carousel">
        <img src={require(`${images[this.props.current]}`)} />
      </div>
    )
  }
}