import React from 'react';
import './TopMenu.css';
import * as FontAwesome from 'react-icons/lib/fa';
import { Header } from './Header';
import { Bio } from './Bio';
import { Message } from './Message';
import { MenuButton } from './MenuButton';
import { Twitter } from './Twitter';

export class TopMenu extends React.Component {
  constructor() {
    super();
    this.state = {bioClicked: false, msgClicked: false, twitterClicked: false};
  }

  bioClick() {
    if (this.state.bioClicked == true) {
      console.log('hi');
      this.setState({bioClicked: false});
    } else {
      this.setState({bioClicked: true});
      if (this.state.twitterClicked) {
        this.twitterClick();
      }
    }  
  }

  msgClick() {
    if (this.state.bioClicked) {
      this.setState({bioClicked: false});
    } else if (this.state.twitterClicked) {
        this.setState({twitterClicked: false})
    }
    this.state.msgClicked ? this.setState({msgClicked: false}) : this.setState({msgClicked: true})
  }

  twitterClick() {
    this.state.twitterClicked ? this.setState({twitterClicked: false}) : this.setState({twitterClicked: true})
  }

  render() {
    if (this.state.twitterClicked) {
      return(
        <div className="Top-Menu">
        <Header />
          <ul className="dropdown">
            <span onClick={this.msgClick.bind(this)}><MenuButton name="Message Me" icon={<FontAwesome.FaEnvelope />}/></span>
            <span onClick={this.twitterClick.bind(this)}><MenuButton name="Twitter" icon={<FontAwesome.FaTwitter />} /></span>
            <MenuButton name="SoundCloud" icon={<FontAwesome.FaSoundcloud/>}/>
            <a target="_blank" href="http://www.github.com/phant0mnyc"><MenuButton name="Github" icon={<FontAwesome.FaGithub />}/></a>
            <a target="_blank" href="https://www.linkedin.com/in/eafancher/"><MenuButton name="LinkedIn" icon={<FontAwesome.FaLinkedinSquare />} /></a>
            <span onClick={this.bioClick.bind(this)}><MenuButton name="Bio" icon={<FontAwesome.FaAngleDown/>}/></span>
          </ul>
          <Twitter />
        </div>
      )
    }
    else if (this.state.bioClicked) {
      return(
        <div className="Top-Menu">
          <Header />
          <ul className="dropdown">
            <span onClick={this.msgClick.bind(this)}><MenuButton name="Message Me" icon={<FontAwesome.FaEnvelope />}/></span>
            <span onClick={this.twitterClick.bind(this)}><MenuButton name="Twitter" icon={<FontAwesome.FaTwitter />} /></span>
            <MenuButton name="SoundCloud" icon={<FontAwesome.FaSoundcloud/>}/>
            <a target="_blank" href="http://www.github.com/phant0mnyc"><MenuButton name="Github" icon={<FontAwesome.FaGithub />}/></a>
            <a target="_blank" href="https://www.linkedin.com/in/eafancher/"><MenuButton name="LinkedIn" icon={<FontAwesome.FaLinkedinSquare />} /></a>
            <span onClick={this.bioClick.bind(this)}><MenuButton name="Bio" icon={<FontAwesome.FaAngleDown/>}/></span>
          </ul>
          <div className="Bio-Wrap">
            <div className="Overlay"></div>
            <Bio modal="web"/>
            <Bio modal="resume"/>
          </div>
        </div>
        )
    } else if (this.state.msgClicked) {
      return(
        <div>
        <Header />
        <div className="Top-Menu">
          <ul className="dropdown">
            <span onClick={this.msgClick.bind(this)}><MenuButton name="Message Me" icon={<FontAwesome.FaEnvelope />}/></span>
            <span onClick={this.twitterClick.bind(this)}><MenuButton name="Twitter" icon={<FontAwesome.FaTwitter />} /></span>
            <MenuButton name="SoundCloud" icon={<FontAwesome.FaSoundcloud/>}/>
            <a target="_blank" href="http://www.github.com/phant0mnyc"><MenuButton name="Github" icon={<FontAwesome.FaGithub />}/></a>
            <a target="_blank" href="https://www.linkedin.com/in/eafancher/"><MenuButton name="LinkedIn" icon={<FontAwesome.FaLinkedinSquare />} /></a>
            <span onClick={this.bioClick.bind(this)}><MenuButton name="Bio" icon={<FontAwesome.FaAngleDown/>}/></span>
          </ul>
        </div>
        <Message />
        </div>
      )
    } else {
      return(
      <div className="Top-Menu">
        <ul className="dropdown">
            <span onClick={this.msgClick.bind(this)}><MenuButton name="Message Me" icon={<FontAwesome.FaEnvelope />}/></span>
            <span onClick={this.twitterClick.bind(this)}><MenuButton name="Twitter" icon={<FontAwesome.FaTwitter />} /></span>
            <MenuButton name="SoundCloud" icon={<FontAwesome.FaSoundcloud/>}/>
            <a target="_blank" href="http://www.github.com/phant0mnyc"><MenuButton name="Github" icon={<FontAwesome.FaGithub />}/></a>
            <a target="_blank" href="https://www.linkedin.com/in/eafancher/"><MenuButton name="LinkedIn" icon={<FontAwesome.FaLinkedinSquare />} /></a>
            <span onClick={this.bioClick.bind(this)}><MenuButton name="Bio" icon={<FontAwesome.FaAngleDown/>}/></span>
        </ul>
      </div>
      )
    }
  }
}