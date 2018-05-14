import React from 'react';
import './Footer.css';
import { BottomMenu } from './BottomMenu';

export class Footer extends React.Component {
  render() { 
    return (
      <div>
      <BottomMenu handleBioClick={this.props.handleBioClick} 
        handleTwitterClick={this.props.handleTwitterClick}
        handleMessageClick={this.props.handleMessageClick}
        unclickAll={this.props.unclickAll}/>
      <div className="Footer">
        All images &copy; 2012-2018 Edward A. Fancher
      </div>
      </div>
      );
  }
}