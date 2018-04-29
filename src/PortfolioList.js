import React from 'react';
import { PortfolioItem } from './PortfolioItem';
import './PortfolioList.css';

export class PortfolioList extends React.Component {
  render() {
    return(
      <div className="PortfolioList">
        <PortfolioItem link="http://www.edmlounge.com" title="EDMLounge.com" images={{
          './pretty-lights-nyc.jpg': 'Pretty Lights at Roseland Ballroom',
          './pretty-lights-nyc-2.jpg': 'Pretty Lights at Roseland Ballroom',
          './beetroots-edc.jpg': 'The Bloody Beetroots at EDC Las Vegas'
          }} />
      </div>
      )
  }
}

// (<PortfolioItem link="" title="Bitcoin Casino"  />
//         <PortfolioItem link="" title="URL Shortener" />)