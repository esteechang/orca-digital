import React from 'react';
// import Navbar from './components/navbar/Navbar';
import GlobalFonts from './assets/fonts/fonts';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';

import ScrollToTop from './components/ScrollToTop';
import Home from './pages/home';
import About from './pages/about';

import TagManager from 'react-gtm-module';
import GogoReviews from './components/reviews/GogoReviews';

const App = () => {
    const tagManagerArgs = {
        gtmId: 'UA-213450721-1',
    };
    TagManager.initialize(tagManagerArgs);
    window.dataLayer.push({
        event: 'pageview',
    });
    console.log(window.dataLayer);
    return (
        <Router basename="/">
            <GlobalFonts />
            <ScrollToTop />
            <Route path="/" exact component={Home} />
            <Route path="/about-us" exact component={About} />
            <Route path="/gogoproperties" exact component={GogoReviews} />
        </Router>
    );
};

export default App;
