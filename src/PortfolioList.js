import React from 'react';
import { PortfolioItem } from './PortfolioItem';
import './PortfolioList.css';

const edmDescription1 =
  "EDM Lounge is an online promotion platform launched by me in 2012."
  + " It has covered press officially at events including: "
  + "Tomorrowland, Ultra Music Festival, and Movement Detroit.";
const edmDescription2 =
  "The platform has hosted private parties in New York City, and promoted for world-class venues including: Output, " +
  "Pacha NYC, Webster Hall, and Amnesia Ibiza.";
const urlDescription1 =
  "This is a custom URL shortener I built with Ruby on Rails. An added feature is that the server can verify" + 
  " if someone else has already submitted your URL, so there will be no duplicate shortcuts created in our system.";
const clockAppDescription1 =
  "A world clock app I built with React JS. The app can instantly detect where there is daylight and adjusts the styles accordingly.";
const clockAppDescription2 =
  "When a city is clicked, more information including the current weather, news, and photos load. This incorporates two APIs.";
const casinoDescription1 =
  "This is an online Bitcoin-powered casino concept I built with Rails. It uses WebSockets and animations to create instant, entertaining multiplayer gameplay.";
const casinoDescription2 =
  "Users can view their online friends list and create private poker rooms that support up to eight players. A private Bitcoin wallet is initialized for every user on account creation, with the private key stored encrypted in our SQL database.";

export class PortfolioList extends React.Component {
  render() {
    return(
      <div className="PortfolioList">
        <PortfolioItem link="http://www.edmlounge.com" id="edm" title="EDM Lounge" images={
          {'./pretty-lights-nyc.jpg': null,
          './pretty-lights-nyc-2.jpg': edmDescription1,
          './beetroots-edc.jpg': edmDescription2
          }} />
        <PortfolioItem title="React JS World Clock" id="clock" link="http://react-world-clock-app.com" images={
          {'./world-clock-app-1.png': clockAppDescription1, './world-clock-app-2.png': clockAppDescription2}} />
        <PortfolioItem title="Rails Casino" link="" id="casino" images={
          {'./casino2.png': casinoDescription1,
           './casino1.png': casinoDescription2}} />
      </div>
    )
  }
}

// (<PortfolioItem link="" title="Bitcoin Casino"  />
//         <PortfolioItem link="" title="URL Shortener" />
// (<PortfolioItem link="http://url-shortener.com" description1={urlDescription1} title="Custom URL Shortener" images={{}} />)