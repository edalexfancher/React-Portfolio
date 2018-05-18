import React from 'react';
import './Bio.css';
import { Preview } from './Preview';
import { TechCoverflow } from './TechCoverflow';
import { PortfolioList } from './PortfolioList';


export class Bio extends React.Component {
  constructor() {
    super();
    this.state = {portfolioClicked: false, previewClicked: false, preview: null};
  }

  handlePortfolioClick() {
    this.setState({portfolioClicked: !this.state.portfolioClicked});
  }

  handlePreviewClick(name) {
    this.setState({previewClicked: true, preview: name});
  }

  render() {
    if (this.state.previewClicked) {
      return(
        <div className="Bio-Wrap">
          <div className="Overlay"></div>
            <div className="Bio-Grid">
              <Preview name={this.state.preview} />
            <div className="Bio" id="Portfolio" onClick={this.handlePortfolioClick.bind(this)}>
              <h3 onClick={this.handlePortfolioClick.bind(this)}>Current Projects & Portfolio</h3>
            </div>
            <PortfolioList handlePreviewClick={this.handlePreviewClick.bind(this)} />
          </div>
        </div>
      )
    } else return (
        <div className="Bio-Wrap">
          <div className="Overlay"></div>
            <div className="Bio-Grid">
            <div className="Bio" id="Resume">
              <div id="Ed"><h3>Education</h3>
                <h4>New York University</h4><p id="Stern">Stern School of Business</p>
                <p><em>B.S. in Business/Finance</em></p><br/>
                <hr/>
                <h4>Wyncode Academy</h4>
                <p><em>Web Immersive Program<br/>300+ Hours</em></p>
                <br/><br/><br/><br/><br/>
              </div>
            </div>    
            <TechCoverflow />
            <div className="Bio" id="Bio-Paragraph">
              <h3>Bio</h3>
              <div id="paragraph"><p>I am a coder who likes both programming servers and designing modern web interfaces.</p><p>
              I first got involved with computer programming in elementary school, when I studied C++ at a summer camp over two consecutive years.</p>
              <p>Some of my favorite Internet inventions include: <strong>Twitter</strong>, <strong>React JS</strong>, and <strong>Ruby on Rails</strong>.
              I enjoy high-level design, and can pick up any language or framework.</p></div>
            </div>
            <div className="Bio intro">
              <h3>I am a Full-Stack Developer in Miami, Florida</h3>
            </div>
        </div>
      </div>
      )
  }
}