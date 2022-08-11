import React from 'react';
import ReactDOM from 'react-dom/client';
// import "./assets/css/bootstrap.css"
import "./assets/css/style.css"
import "./assets/css/animate.min.css"
import App from './App';
import {Provider} from 'react-redux';
import Store from './redux/store/Store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
);