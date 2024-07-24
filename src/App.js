import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Prices from './pages/Prices';
import FindLocation from './pages/FindLocation';
import MyAccount from './pages/MyAccount';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import Login from './pages/Login';

//use base url so i dont type again and again
axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.withCredentials = true


const App = () => {
    return (
        <Router>
            <NavigationBar />
            <Toaster position='bottom-right' toastOptions={{duration: 4000}}/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/prices" element={<Prices />} />
                <Route path="/find-location" element={<FindLocation />} />
                <Route path="/my-account" element={<MyAccount />} />
                <Route path="/login" element={<Login/>} />
            </Routes>

            
        </Router>
    );
};

export default App;