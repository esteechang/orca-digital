import React, { useEffect } from 'react';
// import Navbar from './components/navbar/Navbar';
import GlobalFonts from './assets/fonts/fonts';
import { BrowserRouter as Router, Route, useLocation } from 'react-router-dom';
import './App.css';

import ScrollToTop from './components/ScrollToTop';
import Home from './pages/home';
import About from './pages/about';

const App = () => {
    

    return (
        <Router>
            <GlobalFonts />
            <ScrollToTop />
            <Route path="/" exact component={Home} />
            <Route path="/about-us" exact component={About} />
        </Router>
    );
};

export default App;
