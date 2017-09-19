import React, { Component, PropTypes } from 'react';
import BN from 'bn.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  static propTypes = {
    eth: PropTypes.object.isRequired,
  };

  static childContextTypes = {
    eth: PropTypes.object.isRequired,
  };

  getChildContext() {
    return {
      eth: this.props.eth,
    };
  }

  render() {
    const { eth } = this.props;
    console.log({ eth })
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <button
          style={{
            margin: '16px',
            cursor: 'pointer',
          }}
          onClick={async e => {
            e.persist();

            const [account] = await eth.accounts();

            eth.sendTransaction({
              from: account,
              to: '0x4a7c8136DAe77661b001b5aAb53d4467A302402A',
              value: new BN('6500000'),
              gas: 3000000,
              data: '0x',
            });

            window.dispatchEvent(e.nativeEvent);
          }}
        >
          Send Tip
        </button>
      </div>
    );
  }
}

export default App;
