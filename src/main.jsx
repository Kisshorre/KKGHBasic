
import ReactDOM from 'react-dom/client';
import React from 'react';       // required by ESLint
import { createRoot } from 'react-dom/client';
import App from './App';         // define App

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
