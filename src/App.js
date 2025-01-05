import React, { useState, useEffect } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useThemeHook } from './GlobalComponents/ThemeProvider';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Pages
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import ProductDetails from "./Pages/ProductDetails";
import SignIn from "./Pages/SignIn";
import Register from "./Pages/Register";
import MyAccount from "./Pages/MyAccount";
import Loader from "./Loader";

function App() {
  const [theme] = useThemeHook();
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true); // Start loading when route changes

    // Simulate async route loading or component mounting delay
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after content is ready (e.g., after a delay)
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]); // Runs every time the route changes

  return (
    <main
      className={theme ? 'bg-black' : 'bg-light-2'}
      style={{ height: '100vh', overflowY: 'auto' }}
    >
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="my-account" element={<MyAccount />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="register" element={<Register />} />
          <Route path="product-details/:productId" element={<ProductDetails />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      )}
    </main>
  );
}

export default App;