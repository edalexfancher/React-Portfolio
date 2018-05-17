import React from 'react';
import Coverflow from 'react-coverflow';
import {StyleRoot} from 'radium';
import './TechGrid.css';

export class TechGrid extends React.Component {
  render() {
    return(
      <div className="Coverflow">
        <h2>Full-Stack Web Developer<br/>Miami, Florida</h2>
        <StyleRoot>
        <Coverflow
        displayQuantityOfSide={2}
        navigation={true}
        enableHeading={true}
        clickable={true}
        media={{
      '@media (min-width: 110px)': {
        width: '600px',
        height: '325px'
      },
      '@media (max-width: 900px)': {
        width: '700px',
        height: '380px'
      },
      '@media (max-width: 700px)': {
        width: '500px',
        height: '250px'
      },
      '@media (max-width: 400px)': {
        width: '300px',
        height: '250px'
      }
    }}>
          <img src='ruby.png' alt="Ruby"/>      
          <img src='rails.png' alt="Rails"/>
          <img src='react.png' alt="React Js"/>
          <img src='angular.png' alt="Angular JS"/>
          <img src='node-js.png' alt="Node JS"/>
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