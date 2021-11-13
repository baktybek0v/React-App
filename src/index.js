import React from 'react';
import ReactDOM from 'react-dom';


import './css/default.css';
import './css/gradient.css';

import './my_modules/Modal/modal.css';
import './css/neon-btn.css';
import './css/panel-control-btn.css';
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
