import React from 'react';
// import Navbar from './components/navbar/Navbar';
import GlobalFonts from './assets/fonts/fonts';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import ScrollToTop from './components/ScrollToTop';
import Home from './pages/home';

const App = () => {
    return (
        <Router>
            <GlobalFonts />
            <ScrollToTop />
            <Route path="/" exact component={Home} />
        </Router>
    );
};

export default App;
