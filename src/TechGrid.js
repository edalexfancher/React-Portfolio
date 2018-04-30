import React from 'react';
import './TechGrid.css';


export class TechGrid extends React.Component {
  render() {
    return(
      <div className="TechGrid">
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
          <img src={require('./node-js.png')} alt="Node JS"/>
          <br/>
          Node JS
        </div>
        <div className="TechIcon">
          <img src={require('./photoshop.png')} alt="Photoshop"/>
          <br/>
          Adobe Photoshop
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
      </div>
      )
  }
}