import React from 'react';
import './PortfolioImage.css';

export class PortfolioImage extends React.Component {
  constructor() {
    super();
    this.state = {scrolled: false}
  }

  scroll() {
    this.setState({scrolled: true});
      // alert('scrollin yall');
  }

  componentWillMount() {
    window.addEventListener('scroll', this.scroll.bind(this));
  }

  render() {
    if (this.props.description) {
      if (this.state.scrolled) {
        return(
          <div className="PortfolioImage" onscroll={this.scroll.bind(this)}>
            <img src={require(`${this.props.src}`)} alt="A screenshot of Eddie's page" description={this.props.description} />
            <p className="description" >
              {this.props.description}
            </p>
          </div>
        )
      } else {
        return(
        <div className="PortfolioImage" onscroll={this.scroll.bind(this)}>
          <img src={require(`${this.props.src}`)} alt="A screenshot of Eddie's page" description={this.props.description} />
        </div>
      )
      }
    } else {
      return(
        <div className="PortfolioImage" onscroll={this.scroll.bind(this)}>
          <img src={require(`${this.props.src}`)} alt="A screenshot of Eddie's page" description={this.props.description} />
        </div>
      )
    }
    
  }
}