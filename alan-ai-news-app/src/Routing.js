import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
// import HomePage from './components/Home/HomePage';
import StickyBar from './components/StickyBar/StickyBar';
import Contact from './components/StickyBar/Contact';
import About from './components/StickyBar/About';
import Profile from './components/Login/Profile';
import MainAlan from './components/Alan/MainAlan';
// import App from './App';
const Routing = () => {
    return (
        <BrowserRouter>
            <StickyBar/>
            <Route exact path="/" component={MainAlan}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/profile" component={Profile}/>
        </BrowserRouter>
    )
}

export default Routing
