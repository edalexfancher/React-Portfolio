import React from 'react';
import './Bio.css';
import { TechGrid } from './TechGrid';

export class Bio extends React.Component {
  render() {
    return (
      <div className="Bio">
        <h3>Web Application Developer</h3>
        <p>Coder and designer based in Miami
        <br/>Passionate about learning and new tech</p>
        <TechGrid />
        <a href="https://github.com/phant0mnyc" target="_blank">Find me on GitHub</a><br/>
        <a href="https://www.linkedin.com/in/eafancher/" target="_blank">Connect with me on LinkedIn</a>
      </div>
    )
  }
}