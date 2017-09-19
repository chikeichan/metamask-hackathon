import React from 'react';
import ReactDOM from 'react-dom';
import metamask from 'metamascara';
import EthJs from 'ethjs';
import './index.css';
import App from './App';

const ethereumProvider = metamask.createDefaultProvider({});
const eth = new EthJs(ethereumProvider)


ReactDOM.render(<App eth={eth} />, document.getElementById('root'));
