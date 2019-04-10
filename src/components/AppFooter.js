import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AppFooter extends Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this); 
  }

  handleFormSubmit(e) {
    // sample address 1dice8EMZmqKvrGE4Qc9bUFf9PX3xaYDp
    e.preventDefault();
    let text = this.refs.addressInput.value;
    // TODO add address validation
    this.props.actions.send(JSON.stringify({"op":"addr_sub", "addr":"#{text}"}));
  } 

  render() {

   

    return (
        <h1>hey</h1>
     );
  }
}


export default AppFooter;
