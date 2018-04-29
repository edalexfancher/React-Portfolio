import React from 'react';
import './Message.css';

export class Message extends React.Component {
  render() {
    return(
      <div className="Message-Wrapper">
        <form method="POST" action="https://formspree.io/edmlounge@gmail.com">
          <input type="email" name="email" placeholder="Your email" />
          <textarea name="message" placeholder="Your message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    )
  }
}