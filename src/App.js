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
import OrderInformationPage from './pages/OrderInformation';
import DeliveryPage from './pages/DeliveryPage';
import LoyaltyRewards from './pages/Reward';

//use base url so i dont type again and again
axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.withCredentials = true


const App = () => {
    return (
        <Router>
            <Link to="/#about-us"><NavigationBar /></Link>
            
            <Toaster position='bottom-right' toastOptions={{duration: 4000}}/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/prices" element={<Prices />} />
                <Route path="/find-location" element={<FindLocation />} />
                <Route path="/my-account" element={<MyAccount />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/order-information" element={<OrderInformationPage />} />
                <Route path="/delivery-page" element={<DeliveryPage />} />
                <Route path="/rewards" element={<LoyaltyRewards />} />
            </Routes>

            
        </Router>
    );
};

export default App;