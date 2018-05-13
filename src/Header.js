import React from 'react';
import { TopMenu } from './TopMenu';
import { Eddie } from './Eddie';
import './Header.css';

export class Header extends React.Component {
  constructor() {
    super();
    this.state = {clicked: false};
  }

  handleBioClick() {
    this.props.handleBioClick();
    if (!this.state.clicked) {
      this.setState({clicked: true});
    }
  }

  handleTwitterClick() {
    this.props.handleTwitterClick();
    if (!this.state.clicked) {
      this.setState({clicked: true});
    }
  }

  handleMessageClick() {
    this.props.handleMessageClick();
    if (!this.state.clicked) {
      this.setState({clicked: true});
    }
  }

  render() {
    const isClicked = this.state.clicked;
    return(
      <div className={isClicked ? "Clicked Header": "Header"}>
        <Eddie />
        <TopMenu handleBioClick={this.handleBioClick.bind(this)}
        handleTwitterClick={this.handleTwitterClick.bind(this)}
        handleMessageClick={this.handleMessageClick.bind(this)} />
      </div>
    )
  }
}