import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Ledger extends Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this); 
  }

  handleFormSubmit(e) {
    // sample address 1dice8EMZmqKvrGE4Qc9bUFf9PX3xaYDp
    e.preventDefault();
    debugger;
    let text = this.refs.addressInput.value;
    this.props.actions.send(JSON.stringify({"op":"addr_sub", "addr":"#{text}"}));
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
          <label htmlFor="address-input">Bitcoin Address</label>
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
