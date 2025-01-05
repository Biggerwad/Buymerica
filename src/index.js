import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './GlobalComponents/ThemeProvider';
import { CartProvider } from 'react-use-cart';
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <CartProvider>
        <Router>
          <App />
        </Router>
      </CartProvider>
    </ThemeProvider>
  </React.StrictMode>
);