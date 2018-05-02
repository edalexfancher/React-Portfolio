import React from 'react';
import './Twitter.css';
import { Timeline } from 'react-twitter-widgets';
import { Follow } from 'react-twitter-widgets';

export class Twitter extends React.Component {
  render() {
    return( 
      <div>
        <div className="Overlay"></div>
        <div id="Twitter">
        
          <Follow username="EDMLounge"/>
          <div id="Timeline">
            <Timeline dataSource={{sourceType: 'profile', screenName: 'EDMLounge'}} options={{theme: 'dark'}} />
          </div>
        </div>
      </div>
    )
  }
}
 
