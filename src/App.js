import React, { Component } from 'react';
import './App.css';
import { Header } from './Header';
import { Footer } from './Footer';
import { PortfolioList } from './PortfolioList';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <PortfolioList />
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;