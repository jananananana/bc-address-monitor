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

    sock.onmessage = function(e) {
      console.log('message', e.data);
      sock.close();
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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Ledger />
      </div>
    );
  }
}

export default App;
