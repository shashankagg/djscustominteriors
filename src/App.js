import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/home';
import Footer from './components/Footer';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import About from './pages/about';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
            <Navbar></Navbar>
            <Routes>
                <Route path="/" exact element={<Home />}></Route>
                <Route path="/portfolio" exact element={<Portfolio />}></Route>
                <Route path="/about" exact element={<About />}></Route>
                <Route path="/contact" exact element={<Contact />}></Route>

            </Routes>
            <Footer />
        </Router>
    </div>
  );
}

export default App;
