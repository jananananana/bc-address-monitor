import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Ledger from './components/Ledger';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import ParseMessage from "./services/ParseMessage.js";

class App extends Component {
  constructor(props) {
    super(props);

    // Create a new socket connection with relative URL
    let sock = new WebSocket('wss://ws.blockchain.info/inv');

    sock.onopen = function() {
      console.log('open');
    };

    let self = this;

    sock.onmessage = function(e) {
      console.log('message', e.data);
      // messages from server, store in state
      let transactions = ParseMessage.extractTransactionInfo(e.data);

      self.setState( { messages: [...self.state.messages, transactions]});


    };

    sock.onclose = function() {
      console.log('close');
    };

    // Save the messages from the server in messages, and then used to render
    this.state = {
      actions: sock,
      messages: []
    }
  }

  render() {
    return (
      <div className="App">
        <AppHeader/>
        <Ledger {... this.state} />
        <AppFooter/>
      </div>
    );
  }
}

export default App;
