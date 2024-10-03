import React, { Component, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

// Component import
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import CarList from "./components/CarList/CarList";
import Cars from "./components/Cars/Cars";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import AppStoreBanner from "./components/AppStoreBanner/AppStoreBanner";
import Contact from "./components/Contact/Contact";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";

const App = () => {

  const [cartItems, setCartItems] = useState([]); 

  const addToCart = (car) => {
    setCartItems((prevItems) => {
      const existingCar = prevItems.find(item => item.id === car.id);
      if (existingCar) {
        return prevItems.map(item =>
          item.id === car.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...car, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (carToRemove) => {
    setCartItems(prevItems => {
      const existingCar = prevItems.find(item => item.id === carToRemove.id);
      if (existingCar.quantity > 1) {
        return prevItems.map(item =>
          item.id === carToRemove.id ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        return prevItems.filter(item => item.id !== carToRemove.id);
      }
    });
  };

  // dark mode start
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  // dark mode end

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);


  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <Router>
      <Navbar theme={theme} setTheme={setTheme} cartCount={cartItems.length}/>
      
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero theme={theme} />
              <About />
              <Services />
              <CarList addToCart={addToCart} />
              <Testimonial />
              <AppStoreBanner />
              <Contact />
            </>
          }
        />

        <Route path="/Cars" element={<Cars addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
    </div>
  );
};

export default App;
