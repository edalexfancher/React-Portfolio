import React, { Component } from 'react';
import './App.css';
import { Carousel, images } from './Carousel';
import { Header } from './Header';
import { Footer } from './Footer';
// import { PortfolioList } from './PortfolioList';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { current: 0 };
  }

  componentDidMount() {
    this.timeID = setInterval( () => this.handleTimer(), 2000);
  }

  handleTimer() {
    let length = images.length - 1;
    let current = this.state.current;
    (current === length) ? current = 0 : current++
    this.setState({current: current})
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Carousel current={this.state.current} />
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;

// (<PortfolioList />)