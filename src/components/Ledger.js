import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ParseMessage from "./../services/ParseMessage.js";

class Ledger extends Component {

  constructor(props) {
    super(props);

    // Save the messages from the server in messages, and then used to render
    this.state = { messages: [] };
  }

  // Move this into ledger
  componentDidMount() {
    // Create a new socket connection with relative URL
    const sock = new WebSocket('wss://ws.blockchain.info/inv');

    sock.onopen = () => {
      console.log('open');
      this.setState({ actions: sock });
    };

    sock.onmessage = (e) => {
      console.log('message', e.data);
      // messages from server, store in state
      const transactions = ParseMessage.extractTransactionInfo(e.data);

      this.setState({ messages: [...this.state.messages, transactions] });
    };

    sock.onclose = () => console.log('close');

    sock.onerror = e => console.error(e.message);

  }

  fetchAddressData (address) {
    const fetchOptions = {
            method: 'GET',
            headers: new Headers({
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*://*/*",
              "Access-Control-Allow-Methods": "GET, POST",
              "Access-Control-Allow-Headers": "Content-Type"
            }),
            mode: 'no-cors'
          };

    fetch(`https://blockchain.info/rawaddr/${address}&cors=true?callback=foo`, fetchOptions)
      .then (function(response) {
        if (!response.ok) {
          throw new Error('HTTP error, status = ' + response.status)
        } else {
          function foo(response) {
            console.log(response);
          }
        }
      })

    // fetch('https://blockchain.info/rawaddr/'+address,{
    //     method: 'GET',
    //     mode: 'no-cors',
    //     referrer: 'no-referral',
    //     headers: {
    //       'Content-Type':'application/json',
    //       'Access-Control-Allow-Origin': '*',
    //     }
    //   })
    // .then(res => res)
    // .then(
    //     (result) => console.log("result: ", result),
    //     (error) => {
    //       console.log('error');
    //       console.log(error);
    //     }
    // );


  }

  formHandler (e) {
    e.preventDefault();
    const addr = this.refs.addressInput.value;
    this.state.actions.send(
      JSON.stringify(
        //{"op":"unconfirmed_sub"}
        { 
          op: "addr_sub",
          addr,
        }
      )
    );
    this.fetchAddressData(addr);
    // Put the most recent transactions in the messages
  } 

  render() {
    let i = 0,
      messages = this.state.messages.map(message => {
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
