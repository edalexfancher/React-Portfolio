import React from 'react';
import './TopMenu.css';
import * as FontAwesome from 'react-icons/lib/fa';
import { Bio } from './Bio';
import { MenuButton } from './MenuButton';

export class TopMenu extends React.Component {
  constructor() {
    super();
    this.state = {clicked: false}
  }

  bioClick() {
    this.state.clicked ? this.setState({clicked: false}) : this.setState({clicked: true})
  }

  render() {
    if (this.state.clicked === true) {
      return(
        <div>
        <ul className="dropdown">
          <MenuButton name="Message Me" icon={<FontAwesome.FaEnvelope />}/>
          <MenuButton name="Twitter" icon={<FontAwesome.FaTwitter />} />
          <MenuButton name="SoundCloud" icon={<FontAwesome.FaSoundcloud/>}/>
          <span onClick={this.bioClick.bind(this)}><MenuButton name="Bio" icon={<FontAwesome.FaAngleDown/>} onClick={this.bioClick.bind(this)}/></span>
        </ul>
        <Bio />
        </div>
        )
    } else {
      return(
        <ul className="dropdown">
          <MenuButton name="Message Me" icon={<FontAwesome.FaEnvelope />}/>
          <MenuButton name="Twitter" icon={<FontAwesome.FaTwitter />} />
          <MenuButton name="SoundCloud" icon={<FontAwesome.FaSoundcloud/>}/>
          <span onClick={this.bioClick.bind(this)}><MenuButton name="Bio" icon={<FontAwesome.FaAngleDown/>} /></span>
        </ul>
      );
    }
  }
}


// (  <ul class="sub_menu">
//            <li><a href="bio.html">Bio</a></li>
//            <li><a href="http://www.github.com/phant0mnyc" target="_blank">Github</a></li>
//            <li><a href="http://linkedin.com" target="_blank">LinkedIn</a></li>
//         </ul> 
// )