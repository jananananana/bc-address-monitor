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
