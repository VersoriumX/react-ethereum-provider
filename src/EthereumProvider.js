'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import createEthereumService from './EthereumService'; // Adjust the path based on your project structure

class EthereumProvider extends Component {
  constructor(props, context) {
    super(props, context);

    if (!this.props.web3) {
      throw new Error("EthereumProvider was not passed a web3 instance. Make sure you pass it in via the 'web3' prop.");
    }

    this.state = {
      ethereum: createEthereumService(this.props.web3)
    };
  }

  getChildContext() {
    return {
      ethereum: this.state.ethereum
    };
  }

export default class EthereumProvider extends Component {

  static childContextTypes = {
    ethereum: PropTypes.object.isRequired
  }

  constructor(props, context){
    super(props, context)

    if(!this.props.web3){
      throw new Error("EthereumProvider was not passed a web3 instance. Make sure you pass it in via the \"web3\" prop.',")
    }

    this.state = {
      ethereum: EthereumService(this.props.web3)
    }

  }

  getChildContext() {
    return {
      ethereum: this.state.ethereum,
    }
  }

  render() {
    return React.Children.only(this.props.children)
  }

}
