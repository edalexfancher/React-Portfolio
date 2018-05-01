import React from 'react';
import './Bio.css';
import './HoverLabel.css';
import { TechGrid } from './TechGrid';
import * as FontAwesome from 'react-icons/lib/fa';

export class Bio extends React.Component {
  render() {
    if (this.props.modal === 'web') {
      return (
      <div className="Bio" id="Web">
        <h3>Web Application Developer</h3>
        <TechGrid />
        <h3>Based in <br/>Miami, Florida</h3>
      </div>
      )
    } else if (this.props.modal === 'resume') {
      return(
        <div className="Bio" id="Resume">
          <h3>Education</h3>
          <p id="Ed">New York University<br/> Stern School of Business</p>
          <p><em>B.S. in Business/Finance</em></p>
          <p id="Ed">Wyncode Academy</p>
          <p><em>Web Immersive Program</em></p>
          <div className="Bio-Paragraph">
            <h3>Bio</h3>
            <div id="paragraph"><p>I am a coder who loves modern web interfaces and server-side programming.</p><p>
            My first exposure to computer programming was in elementary school when I studied C++ at a summer camp over two consecutive years.
            </p><p>Since then, I have enjoyed participating in tech's growth, and I am excited to be a part of the next wave of innovation.</p><p>
            Some of my favorite technologies include: <strong>Twitter</strong>, <strong>React JS</strong>, and <strong>Ruby on Rails</strong>.
            I enjoy high-level design, and can pick up any language or framework.</p></div>
          </div>
          <div class="Bottom-Icons">
            <span id="Bio-Icon"><a href="https://github.com/phant0mnyc" target="_blank"><FontAwesome.FaGithub /></a></span>
            <span id="Bio-Icon"><a href="https://www.linkedin.com/in/eafancher/" target="_blank"><FontAwesome.FaLinkedinSquare /></a></span>
          </div>
        </div>
      )
    }
    
  }
}