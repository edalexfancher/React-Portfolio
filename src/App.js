import React, { Component } from 'react';
import './App.css';
import { TopMenu } from './TopMenu';
import { Footer } from './Footer';
import { PortfolioList } from './PortfolioList';
import { Bio } from './Bio';


export class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="Eddie-Alex">Eddie Alex</h1>
          <TopMenu/>
        </header>
        <Bio />
        <PortfolioList />
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;