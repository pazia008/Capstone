import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Travel } from './Travel';
import { BrowserRouter as Router } from "react-router-dom"


ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Travel />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
