import React from 'react';
import './TechGrid.css';


export class TechGrid extends React.Component {
  render() {
    return(
      <div className="TechGrid">
        <div className="TechIcon">
          <img src={require('./ruby.png')} alt="Ruby"/>
          Ruby
        </div>
        <div className="TechIcon">
          <img src={require('./rails.png')} alt="Rails"/>
          Rails
        </div>
        <div className="TechIcon">
          <img src={require('./react.png')} alt="React Js"/>
          React JS
        </div>
        <div className="TechIcon">
          <img src={require('./node-js.png')} alt="Node JS"/>
          Node JS
        </div>
        <div className="TechIcon">
          <img src={require('./photoshop.png')} alt="Photoshop"/>
          Adobe Photoshop
        </div>
        <div className="TechIcon">
          <img src={require('./html5.png')} alt="HTML5"/>
          HTML5
        </div>
        <div className="TechIcon">
          <img src={require('./css.png')} alt="CSS3"/>
          CSS3
        </div>
        <div className="TechIcon">
          <img src={require('./sql.png')} alt="SQL"/>
          SQL
        </div>
      </div>
      )
  }
}