import React from 'react';
// import Navbar from './components/navbar/Navbar';
import GlobalFonts from './assets/fonts/fonts';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import ScrollToTop from './components/ScrollToTop';
import Home from './pages';
import Careers from './pages/careers';

const App = () => {
    return (
        <Router>
            <GlobalFonts />
            <ScrollToTop />
            <Route path="/" exact component={Home} />
            <Route path="/careers" exact component={Careers} />
        </Router>
    );
};

export default App;
