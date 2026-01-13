
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// Import your custom CSS
import './assets/styles/variables.css'
import './assets/styles/custom.css'
// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);