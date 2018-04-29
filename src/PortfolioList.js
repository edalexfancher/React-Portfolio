import React from 'react';
import { PortfolioItem } from './PortfolioItem';
import './PortfolioList.css';

const edmDescription1 =
  "EDM Lounge is a promotion platform & blog launched by me in 2012."
  + " We have officially covered press at events including: "
  + "Tomorrowland, Ultra Music Festival, Electric Daisy Carnival, & more.";
const edmDescription2 =
  "We have hosted our own parties and promoted for world-class venues including Output Brooklyn, " +
  "Pacha NYC, Webster Hall, and Amnesia Ibiza.";

export class PortfolioList extends React.Component {
  render() {
    return(
      <div className="PortfolioList">
        <PortfolioItem link="http://www.edmlounge.com" description1={edmDescription1} description2={edmDescription2} title="EDMLounge.com" images={{
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