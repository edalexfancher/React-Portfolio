import React from 'react';
import './TopMenu.css';
import * as FontAwesome from 'react-icons/lib/fa';

export class TopMenu extends React.Component {
  render() {
    return(
      <ul className="dropdown">
        <li><a><span id="msg"><FontAwesome.FaEnvelope/></span></a></li>
        <li><a><span id="twitter-button"><FontAwesome.FaTwitter/></span></a></li>
        <li><a><FontAwesome.FaSoundcloud/></a></li>
        <li><a href="#"><FontAwesome.FaAngleDown/></a></li>
           <ul class="sub_menu">
           <li><a href="bio.html">Bio</a></li>
           <li><a href="http://www.github.com/phant0mnyc" target="_blank">Github</a></li>
           <li><a href="http://linkedin.com" target="_blank">LinkedIn</a></li>
        </ul> 
       <li><a><span id="moon"><FontAwesome.FaMoonO/></span></a></li>
      </ul>
    );
  }
}


  