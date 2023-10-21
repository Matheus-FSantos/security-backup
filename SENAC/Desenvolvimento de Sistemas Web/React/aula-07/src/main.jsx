import React from 'react';
import ReactDOM from 'react-dom/client';

/* Handle App Routes */
import { Router } from './router/'; 
import { GlobalStyle } from './styles/global/global';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
    <GlobalStyle />
  </React.StrictMode>
)
