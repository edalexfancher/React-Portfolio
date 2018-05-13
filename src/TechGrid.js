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
      '@media (max-width: 900px)': {
        width: '340px',
        height: '250px'
      },
      '@media (min-width: 900px)': {
        width: '700px',
        height: '380px'
      }
    }}>
          <img src={require('./ruby.png')} alt="Ruby"/>      
          <img src={require('./rails.png')} alt="Rails"/>
          <img src={require('./react.png')} alt="React Js"/>
          <img src={require('./angular.png')} alt="Angular JS"/>
          <img src={require('./node-js.png')} alt="Node JS"/>
          <img src={require('./photoshop.png')} alt="Photoshop"/>
          <img src={require('./html5.png')} alt="HTML5"/>
          <img src={require('./css.png')} alt="CSS3"/>   
          <img src={require('./sql.png')} alt="SQL"/>     
        </Coverflow>
        </StyleRoot>
      </div>
    )
  }
}

var old = (<div className="TechGrid">
        <div className="TechIcon">
          <img src={require('./ruby.png')} alt="Ruby"/>
          <br/>
          Ruby
        </div>
        <div className="TechIcon">
          <img src={require('./rails.png')} alt="Rails"/>
          <br/>
          Rails
        </div>
        <div className="TechIcon">
          <img src={require('./react.png')} alt="React Js"/>
          <br/>
          React JS
        </div>
        <div className="TechIcon">
          <img src={require('./angular.png')} alt="Angular JS"/>
          <br/>
          Angular JS
        </div>
        <div className="TechIcon">
          <img src={require('./node-js.png')} alt="Node JS"/>
          <br/>
          Node JS
        </div>
        <div className="TechIcon">
          <img src={require('./photoshop.png')} alt="Photoshop"/>
          <br/>
          Photoshop
        </div>
        <div className="TechIcon">
          <img src={require('./html5.png')} alt="HTML5"/>
          <br/>
          HTML5
        </div>
        <div className="TechIcon">
          <img src={require('./css.png')} alt="CSS3"/>
          <br/>
          CSS3
        </div>
        <div className="TechIcon">
          <img src={require('./sql.png')} alt="SQL"/>
          <br/>
          SQL
        </div>
      </div>)