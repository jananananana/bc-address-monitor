import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Ledger from './components/Ledger';
import SockJS from 'sockjs-client';

class App extends Component {
  constructor(props) {
    super(props);

    // Create a new socket connection with relative URL
    var sock = new SockJS('/ws.blockchain.info/inv');
    sock.onopen = function() {
      console.log('open');
      sock.send({"op":"ping"});
      sock.send({"op":"addr_sub", "addr":"1dice8EMZmqKvrGE4Qc9bUFf9PX3xaYDp"});
    };

    let self = this;

    sock.onmessage = function(e) {
      console.log('message', e.data);
      //sock.close();
      // messages from server, store in state
      self.setState( { messages: [...self.state.messages, e.data]});
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
