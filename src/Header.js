import React from 'react';
import { TopMenu } from './TopMenu';
import { Eddie } from './Eddie';
import './Header.css';

export class Header extends React.Component {
  constructor() {
    super();
    this.state = {clicked: false};
  }

  handleClick() {
    this.props.handleBioClick();
    this.setState({clicked: !this.state.clicked});
  }

  render() {
    const isClicked = this.state.clicked;
    return(
      <div className={isClicked ? "Clicked Header": "Header"}>
        <Eddie />
        <TopMenu handleBioClick={this.handleClick.bind(this)}/>
      </div>
    )
  }
}