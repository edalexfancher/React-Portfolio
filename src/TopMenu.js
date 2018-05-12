import React from 'react';
import './TopMenu.css';
import * as FontAwesome from 'react-icons/lib/fa';
import { Bio } from './Bio';
import { MenuButton } from './MenuButton';

export class TopMenu extends React.Component {
  handleClick() {
    this.props.handleBioClick();
    this.setState({clicked: !this.state.clicked});
  }

  render() {
    return(
     <div className="Top-Menu">
        <ul className="dropdown">
          <span onClick={() => this.props.handleMessageClick()}><MenuButton name="Message Me" icon={<FontAwesome.FaEnvelope />}/></span>
          <span onClick={() => this.props.handleTwitterClick()}><MenuButton name="Twitter" icon={<FontAwesome.FaTwitter />} /></span>
          <MenuButton name="SoundCloud" icon={<FontAwesome.FaSoundcloud/>}/>
          <a target="_blank" rel="noopener noreferrer" href="http://www.github.com/phant0mnyc"><MenuButton name="Github" icon={<FontAwesome.FaGithub />}/></a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/eafancher/"><MenuButton name="LinkedIn" icon={<FontAwesome.FaLinkedinSquare />} /></a>
          <span onClick={() => this.props.handleBioClick()}><MenuButton name="Bio" icon={<FontAwesome.FaAngleDown/>}/></span>
        </ul>
      </div>
    );
  }
}