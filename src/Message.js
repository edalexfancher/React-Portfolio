import React from 'react';
import './Message.css';

export class Message extends React.Component {
  componentDidMount() {
    this.nameInput.focus();
  }

  render() {
    return(
      <div className="Message-Wrapper">
        <div className="Overlay"></div>
        <form method="POST" action="https://formspree.io/edmlounge@gmail.com">
          <input ref={(input) => { this.nameInput = input; }} type="email" name="email" placeholder="Your email" />
          <textarea name="message" placeholder="Your message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    )
  }
}