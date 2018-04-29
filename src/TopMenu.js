import React from 'react';
import './TopMenu.css';
import * as FontAwesome from 'react-icons/lib/fa';
import { Bio } from './Bio';
import { Message } from './Message';
import { MenuButton } from './MenuButton';

export class TopMenu extends React.Component {
  constructor() {
    super();
    this.state = {bioClicked: false, msgClicked: false}
  }

  bioClick() {
    this.state.bioClicked ? this.setState({bioClicked: false}) : this.setState({bioClicked: true})
  }

  msgClick() {
    this.state.msgClicked ? this.setState({msgClicked: false}) : this.setState({msgClicked: true})
  }

  render() {
    if (this.state.bioClicked === true && this.state.msgClicked === true) {
      return(
        <div>
          <ul className="dropdown">
            <MenuButton name="Message Me" icon={<FontAwesome.FaEnvelope />}/>
            <MenuButton name="Twitter" icon={<FontAwesome.FaTwitter />} />
            <MenuButton name="SoundCloud" icon={<FontAwesome.FaSoundcloud/>}/>
            <span onClick={this.bioClick.bind(this)}><MenuButton name="Bio" icon={<FontAwesome.FaAngleDown/>} onClick={this.bioClick.bind(this)}/></span>
          </ul>
          <Message />
          <Bio modal="web"/>
          <Bio modal="resume"/>
        </div>
        )
    } else if (this.state.bioClicked === true && this.state.msgClicked === false) {
      return(
        <div>
          <ul className="dropdown">
            <span onClick={this.msgClick.bind(this)}><MenuButton name="Message Me" icon={<FontAwesome.FaEnvelope />}/></span>
            <MenuButton name="Twitter" icon={<FontAwesome.FaTwitter />} />
            <MenuButton name="SoundCloud" icon={<FontAwesome.FaSoundcloud/>}/>
            <span onClick={this.bioClick.bind(this)}><MenuButton name="Bio" icon={<FontAwesome.FaAngleDown/>} /></span>
          </ul>
          <Bio modal="web"/>
          <Bio modal="resume"/>
        </div>
      );
    } else if (this.state.msgClicked === true) {
      return(
        <div>
          <ul className="dropdown">
            <span onClick={this.msgClick.bind(this)}><MenuButton name="Message Me" icon={<FontAwesome.FaEnvelope />}/></span>
            <MenuButton name="Twitter" icon={<FontAwesome.FaTwitter />} />
            <MenuButton name="SoundCloud" icon={<FontAwesome.FaSoundcloud/>}/>
            <span onClick={this.bioClick.bind(this)}><MenuButton name="Bio" icon={<FontAwesome.FaAngleDown/>} /></span>
          </ul>
          <Message />
        </div>
      )
    } else {
      return(
        <ul className="dropdown">
          <span onClick={this.msgClick.bind(this)}><MenuButton name="Message Me" icon={<FontAwesome.FaEnvelope />}/></span>
          <MenuButton name="Twitter" icon={<FontAwesome.FaTwitter />} />
          <MenuButton name="SoundCloud" icon={<FontAwesome.FaSoundcloud/>}/>
          <span onClick={this.bioClick.bind(this)}><MenuButton name="Bio" icon={<FontAwesome.FaAngleDown/>} /></span>
        </ul>
      )
    }
  }
}


// (  <ul class="sub_menu">
//            <li><a href="bio.html">Bio</a></li>
//            <li><a href="http://www.github.com/phant0mnyc" target="_blank">Github</a></li>
//            <li><a href="http://linkedin.com" target="_blank">LinkedIn</a></li>
//         </ul> 
// )