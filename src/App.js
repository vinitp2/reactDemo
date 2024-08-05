import React from 'react';
import Navbar from './components/Navbar';
// import logo from './logo.svg';
import { BrowserRouter as Router} from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './components/pages/Home';
import Services from './components/pages/services';
import Products from './components/pages/products';
import SignUp from './components/pages/SignUp';

const App = () => {
    return (
    <>
    <Router>
        <Navbar />
        <Routes>
            <Route exact path="/" element={<Home />}/>    
            <Route path="/services" element={<Services />}/>
            <Route path='/products' element={<Products/>} />
            <Route path='/sign-up' element={<SignUp/>} />
        </Routes>    
    </Router>    

    </>

    );
}

export default App;