import React from 'react';
import './Carousel.css';

export const images = ['beetroots-edc.jpg', 
                        'deadmau5.jpg', 
                        'armin.jpg',
                        'pretty-lights-nyc-2.jpg',
                        'gramatik.jpg'
                ];

export class Carousel extends React.Component {
  render() {
    return(
      <div className="Carousel">
      	<div className="carousel-overlay"></div>
        <img src={images[this.props.current]} />
      </div>
    )
  }
}