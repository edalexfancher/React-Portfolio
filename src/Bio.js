import React from 'react';
import './Bio.css';
import './HoverLabel.css';
import { TechGrid } from './TechGrid';
import * as FontAwesome from 'react-icons/lib/fa';
import { MenuButton } from './MenuButton';

export class Bio extends React.Component {
  render() {
    if (this.props.modal === 'web') {
      return (
      <div className="Bio" id="Web">
        <h3>Web Application Developer</h3>
        <TechGrid />
        <h3>Miami, Florida</h3>
        <div class="Bottom-Icons">
          <span id="Bio-Icon"><a href="https://github.com/phant0mnyc" target="_blank"><FontAwesome.FaGithub /></a></span>
          <span id="Bio-Icon"><a href="https://www.linkedin.com/in/eafancher/" target="_blank"><FontAwesome.FaLinkedinSquare /></a></span>
        </div>
      </div>
      )
    } else if (this.props.modal === 'resume') {
      return(
        <div className="Bio" id="Resume">
          <h3>Education</h3>
          <p id="Ed">NYU Stern Alumni</p>
          <p><em>B.S. in Business/Finance</em></p>
          <p id="Ed">Wyncode Academy</p>
          <p><em>Web Immersive Program</em></p>
          <div className="Bio-Paragraph">
            <h3>Bio</h3>
            <p id="Paragraph">I am a passionate coder with a love for modern web interfaces and server-side tech. 
            My first exposure to computer programming was during elementary school where I studied C++ at a summer camp over two consecutive years.
            Since then, I have studied and enjoyed watching and participating in tech's growth, and am excited to be a part of the new wave of innovation.
            Some of my favorite technologies include: Twitter, React JS, and Ruby on Rails.
            I enjoy high-level design and planning the coding process, and can pick up any language or framework.</p>
          </div>
        </div>
      )
    }
    
  }
}