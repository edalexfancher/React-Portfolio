import React from 'react';
import './TopMenu.css';
import * as FontAwesome from 'react-icons/lib/fa';
import { Bio } from './Bio';
import { Message } from './Message';
import { MenuButton } from './MenuButton';
import { Twitter } from './Twitter';

export class TopMenu extends React.Component {
  constructor() {
    super();
    this.state = {bioClicked: false, msgClicked: false, twitterClicked: false}
  }

  bioClick() {
    if (this.state.bioClicked) {
      this.setState({bioClicked: false});
    } else {
      if (this.state.twitterClicked) {
        this.twitterClick();
      }
      this.setState({bioClicked: true});
    }  
  }

  msgClick() {
    this.state.msgClicked ? this.setState({msgClicked: false}) : this.setState({msgClicked: true})
  }

  twitterClick() {
    this.state.twitterClicked ? this.setState({twitterClicked: false}) : this.setState({twitterClicked: true})
  }

  render() {
    if (this.state.twitterClicked === true) {
      return(
        <div>
          <div className="Overlay"></div>
          <div className="Top-Menu">
            <ul className="dropdown">
              <MenuButton name="Message Me" icon={<FontAwesome.FaEnvelope />}/>
              <span onClick={this.twitterClick.bind(this)}><MenuButton name="Twitter" icon={<FontAwesome.FaTwitter />} /></span>
              <a href="https://soundcloud.com/edm-lounge" target="_blank"><MenuButton name="SoundCloud" icon={<FontAwesome.FaSoundcloud/>} /></a>
              <a href="https://github.com/phant0mnyc" target="_blank"><MenuButton name="Github" icon={<FontAwesome.FaGithub />} /></a>
              <a href="https://www.linkedin.com/in/eafancher/" target="_blank"><MenuButton name="LinkedIn" icon={<FontAwesome.FaLinkedinSquare />}/></a>
              <span onClick={this.bioClick.bind(this)}><MenuButton name="Bio" icon={<FontAwesome.FaAngleDown/>} onClick={this.bioClick.bind(this)}/></span>
            </ul>
            <Twitter />
          </div>
        </div>
      )
    }
    else if (this.state.bioClicked === true && this.state.msgClicked === true) {
      return(

        <div className="Top-Menu">
          <ul className="dropdown">
           <MenuButton name="Message Me" icon={<FontAwesome.FaEnvelope />}/>
            <span onClick={this.twitterClick.bind(this)}><MenuButton name="Twitter" icon={<FontAwesome.FaTwitter />} /></span>
            <a href="https://soundcloud.com/edm-lounge" target="_blank"><MenuButton name="SoundCloud" icon={<FontAwesome.FaSoundcloud/>} /></a>
            <a href="https://github.com/phant0mnyc" target="_blank"><MenuButton name="Github" icon={<FontAwesome.FaGithub />} /></a>
            <a href="https://www.linkedin.com/in/eafancher/" target="_blank"><MenuButton name="LinkedIn" icon={<FontAwesome.FaLinkedinSquare />}/></a>
            <span onClick={this.bioClick.bind(this)}><MenuButton name="Bio" icon={<FontAwesome.FaAngleDown/>} onClick={this.bioClick.bind(this)}/></span>
          </ul>
          <Message />
          <div className="Bio-Wrap">
            <Bio modal="web"/>
            <Bio modal="resume"/>
          </div>
        </div>
        )
    } else if (this.state.bioClicked === true && this.state.msgClicked === false) {
      return(
        <div>
          <div className="Overlay"></div>
          <div className="Top-Menu">
            <ul className="dropdown">
             <MenuButton name="Message Me" icon={<FontAwesome.FaEnvelope />}/>
              <span onClick={this.twitterClick.bind(this)}><MenuButton name="Twitter" icon={<FontAwesome.FaTwitter />} /></span>
              <a href="https://soundcloud.com/edm-lounge" target="_blank"><MenuButton name="SoundCloud" icon={<FontAwesome.FaSoundcloud/>} /></a>
              <a href="https://github.com/phant0mnyc" target="_blank"><MenuButton name="Github" icon={<FontAwesome.FaGithub />} /></a>
              <a href="https://www.linkedin.com/in/eafancher/" target="_blank"><MenuButton name="LinkedIn" icon={<FontAwesome.FaLinkedinSquare />}/></a>
              <span onClick={this.bioClick.bind(this)}><MenuButton name="Bio" icon={<FontAwesome.FaAngleDown/>} onClick={this.bioClick.bind(this)}/></span>
            </ul>
            <div className="Bio-Wrap">
              <Bio modal="web"/>
              <Bio modal="resume"/>
            </div>
          </div>
        </div>
      );
    } else if (this.state.msgClicked === true) {
      return(
        <div className="Top-Menu">
          <ul className="dropdown">
            <MenuButton name="Message Me" icon={<FontAwesome.FaEnvelope />}/>
            <span onClick={this.twitterClick.bind(this)}><MenuButton name="Twitter" icon={<FontAwesome.FaTwitter />} /></span>
            <a href="https://soundcloud.com/edm-lounge" target="_blank"><MenuButton name="SoundCloud" icon={<FontAwesome.FaSoundcloud/>} /></a>
            <a href="https://github.com/phant0mnyc" target="_blank"><MenuButton name="Github" icon={<FontAwesome.FaGithub />} /></a>
            <a href="https://www.linkedin.com/in/eafancher/" target="_blank"><MenuButton name="LinkedIn" icon={<FontAwesome.FaLinkedinSquare />}/></a>
            <span onClick={this.bioClick.bind(this)}><MenuButton name="Bio" icon={<FontAwesome.FaAngleDown/>} onClick={this.bioClick.bind(this)}/></span>
          </ul>
          <Message />
        </div>
      )
    } else {
      return(
      <div className="Top-Menu">
        <ul className="dropdown">
            <MenuButton name="Message Me" icon={<FontAwesome.FaEnvelope />}/>
            <span onClick={this.twitterClick.bind(this)}><MenuButton name="Twitter" icon={<FontAwesome.FaTwitter />} /></span>
            <a href="https://soundcloud.com/edm-lounge" target="_blank"><MenuButton name="SoundCloud" icon={<FontAwesome.FaSoundcloud/>} /></a>
            <a href="https://github.com/phant0mnyc" target="_blank"><MenuButton name="Github" icon={<FontAwesome.FaGithub />} /></a>
            <a href="https://www.linkedin.com/in/eafancher/" target="_blank"><MenuButton name="LinkedIn" icon={<FontAwesome.FaLinkedinSquare />}/></a>
            <span onClick={this.bioClick.bind(this)}><MenuButton name="Bio" icon={<FontAwesome.FaAngleDown/>} onClick={this.bioClick.bind(this)}/></span>
        </ul>
      </div>
      )
    }
  }
}