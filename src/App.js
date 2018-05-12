import React, { Component } from 'react';
import './App.css';
import { Carousel, images } from './Carousel';
import { Header } from './Header';
import { Bio } from './Bio';
import { Footer } from './Footer';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { current: 0, locked: false };
    this.handleBioClick = this.handleBioClick.bind(this);
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

   handleBioClick() {
     this.setState({bioClicked: !this.state.bioClicked, locked: !this.state.locked});
   }

  render() {
    const bio = this.state.bioClicked ?
      <Bio />
      : null;

    return(
      <div className="App">
        <Header handleBioClick={this.handleBioClick.bind(this)} />
        {bio}
        <div className="carousel-wrap">
          <Carousel current={this.state.current} />
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
}

export default App;