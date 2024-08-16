import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Prices from './pages/Prices';
import BookingPage from './pages/BookingPage';
import MyAccount from './pages/MyAccount';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import Login from './pages/Login';
import OrderInformationPage from './pages/OrderInformation';
import DeliveryPage from './pages/DeliveryPage';
import LoyaltyRewards from './pages/Reward';
import PickupSchedulingPage from './pages/PickupSchedulingPage';


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
                <Route path="/services" element={<Services />} />
                <Route path="/prices" element={<Prices />} />
                <Route path="/booking-page" element={<BookingPage />} />
                <Route path="/my-account" element={<MyAccount />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/order-information" element={<OrderInformationPage />} />
                <Route path="/delivery-page" element={<DeliveryPage />} />
                <Route path="/rewards" element={<LoyaltyRewards />} />
                <Route path="/pickup-scheduling-page" element={<PickupSchedulingPage />} />
            </Routes>

            
        </Router>
    );
};

export default App;