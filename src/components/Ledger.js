import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Ledger extends Component {
  formHandler (e) {
    e.preventDefault();
    const text = this.refs.addressInput.value;
    this.props.actions.send(
      JSON.stringify(
        //{"op":"unconfirmed_sub"}
        { 
          op: "addr_sub",
          addr: `${text}`
        }
      )
    );
    // Use fetch to get the data from the API
    // Put the most recent transactions in the messages
  } 

  render() {
    let i = 0,
      messages = this.props.messages.map(message => {
        return <li key={i++}>{message}</li>
      });

    return (
      <div className="c-ledger">
        <form action="https://blockchain.info/rawaddr/$bitcoin_address"></form>
        <form 
          onSubmit={e => this.formHandler(e)}
          >
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
