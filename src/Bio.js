import React from 'react';
import './Bio.css';
import { TechGrid } from './TechGrid';
import * as FontAwesome from 'react-icons/lib/fa';

export class Bio extends React.Component {
  render() {
    return (
      <div className="Bio">
        <h3>Web Application Developer</h3>
        <TechGrid />
        <h3>Miami, Florida</h3>
        <span id="Bio-Icon"><a href="https://github.com/phant0mnyc" target="_blank"><FontAwesome.FaGithub /></a></span>
        <span id="Bio-Icon"><a href="https://www.linkedin.com/in/eafancher/" target="_blank"><FontAwesome.FaLinkedinSquare /></a></span>
      </div>
    )
  }
}