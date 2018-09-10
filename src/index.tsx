import * as React from 'react';
import * as ReactDOM from 'react-dom'

import 'whatwg-fetch'
import * as e6p from 'es6-promise';
(e6p as any).polyfill();

import { BrowserRouter } from 'react-router-dom'

import App from './App'


ReactDOM.render(
  <BrowserRouter basename={'/panel'}>
    <App/>
  </BrowserRouter>,
  document.getElementById('app')
);