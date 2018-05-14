import React, { Component } from 'react';
import './App.css';
import { Carousel, images } from './Carousel';
import { Header } from './Header';
import { Message } from './Message';
import { Bio } from './Bio';
import { Twitter } from './Twitter';
import { Footer } from './Footer';


export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { current: 0, bioClicked: false, locked: false, twitterClicked: false, messageClicked: false}; 
  }

  componentDidMount() {
    this.timeID = setInterval( () => this.handleTimer(), 4000);
  }

  handleTimer() {
    if (!this.state.locked) {
      let length = images.length - 1;
      let current = this.state.current;
      (current === length) ? current = 0 : current++
      this.setState({current: current})
    }
  }

  unclickAll() {
    this.setState({twitterClicked: false, messageClicked: false, bioClicked: false});
  }

  handleBioClick() {
    if (this.state.twitterClicked) {
      this.setState({twitterClicked: false});
    } else if (this.state.messageClicked) {
      this.setState({messageClicked: false});
    }
    this.setState({bioClicked: !this.state.bioClicked, locked: !this.state.locked});
  }

  handleMessageClick() {
    if (this.state.twitterClicked) {
      this.setState({twitterClicked: false});
    } else if (this.state.bioClicked) {
      this.setState({bioClicked: false});
    }
    this.setState({messageClicked: !this.state.messageClicked, locked: !this.state.locked})
  }

  handleTwitterClick() {
    if (this.state.bioClicked) {
      this.setState({bioClicked: false});
    } else if (this.state.messageClicked) {
      this.setState({messageClicked: false});
    }
    this.setState({twitterClicked: !this.state.twitterClicked, locked: !this.state.locked});
  }

  render() {
    const bio = this.state.bioClicked ? <Bio /> : null;

    const twitter = this.state.twitterClicked ? <Twitter /> : null;

    const message = this.state.messageClicked ? <Message /> : null;

    return(
      <div className="App">
        <Header handleBioClick={this.handleBioClick.bind(this)} 
        handleTwitterClick={this.handleTwitterClick.bind(this)}
        handleMessageClick={this.handleMessageClick.bind(this)}
        unclickAll={this.unclickAll.bind(this)} />
        {message}
        {bio}
        {twitter}
        <div className="carousel-wrap">
          <Carousel current={this.state.current} />
        </div>
        <footer>
          <Footer handleBioClick={this.handleBioClick.bind(this)} 
        handleTwitterClick={this.handleTwitterClick.bind(this)}
        handleMessageClick={this.handleMessageClick.bind(this)}
        unclickAll={this.unclickAll.bind(this)}/>
        </footer>
      </div>
    )
  }
}

export default App;