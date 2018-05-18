import React from 'react';
import Coverflow from 'react-coverflow';
import {StyleRoot} from 'radium';
import './TechCoverflow.css';

export class TechCoverflow extends React.Component {
  next(event) {
    event.preventDefault();
    this.refs.coverflow.next();
  }

  prev(event) {
    event.preventDefault();
    this.refs.coverflow.previous();
  }

  render() {
    return(
      <div className="Coverflow">
        <StyleRoot>
        <Coverflow
        displayQuantityOfSide={2}
        navigation={true}
        enableHeading={true}
        clickable={false}
        enableScroll={false}
        infiniteScroll={true}
        media={{
      '@media (max-width: 1100px)': {
        width: '500px',
        height: '300px'
      },
      '@media (max-width: 600px)': {
        width: '300px',
        height: '250px'
      }
    }}>
          <img src='ruby.png' alt="Ruby"/>      
          <img src='rails.png' alt="Rails"/>
          <img src='react.png' alt="React Js"/>
          <img src='angular.png' alt="Angular JS"/>
          <img src='node-js.png' alt="Node JS"/>
          <img src='java.png' alt="Java" />
          <img src='android.png' alt="Android" />
          <img src='photoshop.png' alt="Photoshop"/>
          <img src='html5.png' alt="HTML5"/>
          <img src='css.png' alt="CSS3"/>   
          <img src='sql.png' alt="SQL"/>     
        </Coverflow>
        </StyleRoot>
      </div>
    )
  }
}
