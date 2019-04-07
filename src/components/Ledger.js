import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Ledger extends Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this); 
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let text = this.refs.addressInput.value;
    this.props.actions.send(text);
  } 

  render() {

    let i = 0,
      messages = this.props.messages.map(message => {
        return <li key={i++}>{message}</li>
      });

    return (
      <div className="c-ledger">
        <form action="https://blockchain.info/rawaddr/$bitcoin_address"></form>
        <form onSubmit={this.handleFormSubmit}>
          <input ref="addressInput" id="address-input" type="text"/>
          <label for="address-input"></label>
          <button type="submit">Look Up Address</button>
        </form>
        <ul>
          {messages}
        </ul>
      </div>
     );
  }
}

Ledger.propTypes = {
  actions: PropTypes.object,
  messages: PropTypes.array
};

export default Ledger;
