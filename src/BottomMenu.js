import React from 'react';
import './BottomMenu.css';
import * as FontAwesome from 'react-icons/lib/fa';
import { MenuButton } from './MenuButton';

export class BottomMenu extends React.Component {
  constructor() {
    super();
    this.state = {clicked: false};
  }

  handleBioClick() {
    this.props.handleBioClick();
    this.props.toggleEddie();
    this.setState({clicked: !this.state.clicked});
  }

  render() {
    const isClicked = this.state.clicked;
    return(
      <div className={isClicked ? "Clicked Bottom-Menu": "Bottom-Menu"}>
        <ul className="dropdown">
          <span onClick={() => this.props.handleMessageClick()}><MenuButton name="Message Me" icon={<FontAwesome.FaEnvelope />}/></span>
          <span onClick={() => this.props.handleTwitterClick()}><MenuButton name="Twitter" icon={<FontAwesome.FaTwitter />} /></span>
          <a target="_blank" rel="noopener noreferrer" href="http://www.soundcloud.com/edm-lounge"><span><MenuButton name="SoundCloud" icon={<FontAwesome.FaSoundcloud/>}/></span></a>
          <a target="_blank" rel="noopener noreferrer" href="http://www.github.com/phant0mnyc"><span><MenuButton name="Github" icon={<FontAwesome.FaGithub />}/></span></a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/eafancher/"><span><MenuButton name="LinkedIn" icon={<FontAwesome.FaLinkedinSquare />} /></span></a>
          <span onClick={this.handleBioClick.bind(this)}><MenuButton name="Bio" icon={<FontAwesome.FaAngleDown/>}/></span>
        </ul>
      </div>
    )
  }
}