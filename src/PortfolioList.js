import React from 'react';
import './PortfolioList.css';
import { PortfolioItem} from './PortfolioItem';

export class PortfolioList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {current: null};
    this.toggleCurrent = this.toggleCurrent.bind(this);
  }

  toggleCurrent(name) {
    this.props.handlePreviewClick(name);
    this.setState({current: name});
  }

  portfolioLoop() {
    let html = [];
    for (var i = 0; i < items.length; i++) {
      if (items[i] === this.state.current) {
        html.push(<PortfolioItem toggleCurrent={this.toggleCurrent.bind(this)} handlePreviewClick={this.props.handlePreviewClick} name={items[i]} current='yes'/>);
      } else {
        html.push(<PortfolioItem toggleCurrent={this.toggleCurrent.bind(this)} handlePreviewClick={this.props.handlePreviewClick} name={items[i]}/>);
      }
    }
    return html;
  }

  render() {
    return(
      <div className="Bio Portfolio-List">
        <ul className="Portfolio">
          {this.portfolioLoop()}
        </ul>
      </div>
    )
  }
}

const items = 
  ["EDM Lounge", "Bitcoin Casino", "Private IM",
  "React World Clock", "Trance Music Player", "EDM Lounge",
  "Bitcoin Casino", "Private IM",
  "React World Clock", "Trance Music Player"];