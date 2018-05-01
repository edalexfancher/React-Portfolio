import React from 'react';
import { TopMenu } from './TopMenu';
import { Eddie } from './Eddie';
import './Header.css';

export class Header extends React.Component {
  render() {
    return(
      <div className="Header">
        <Eddie />
        <TopMenu/>
      </div>
    )
  }
}