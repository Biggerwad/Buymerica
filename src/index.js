import React from 'react';
import ReactDOM from 'react-dom/client';
import { render } from 'react-dom';
import App from './App';
import { ThemeProvider } from './GlobalComponents/ThemeProvider';
import { CartProvider } from 'react-use-cart';

render(
  <React.StrictMode>
    <ThemeProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ThemeProvider>
  </React.StrictMode>
, document.getElementById('root'));
