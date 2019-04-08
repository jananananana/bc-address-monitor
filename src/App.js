import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Ledger from './components/Ledger';

class App extends Component {
  constructor(props) {
    super(props);

    console.log(props);

    // Create a new socket connection with relative URL
    let bta = '1dice8EMZmqKvrGE4Qc9bUFf9PX3xaYDp',
      sock = new WebSocket('wss://ws.blockchain.info/inv');

    sock.onopen = function() {
      console.log('open');
    };

    let self = this;

    sock.onmessage = function(e) {
      console.log('message', e.data);
      // messages from server, store in state
      let parsedE = JSON.parse(e.data);
      self.setState( { messages: [...self.state.messages, parsedE]});


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
        <header>
        </header>
        <Ledger {... this.state} />
      </div>
    );
  }
}

export default App;
