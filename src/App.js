import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Prices from './pages/Prices';
import FindLocation from './pages/FindLocation';
import MyAccount from './pages/MyAccount';
import Myform from './components/Myform';


const App = () => {
    return (
        <Router>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/prices" element={<Prices />} />
                <Route path="/find-location" element={<FindLocation />} />
                <Route path="/my-account" element={<MyAccount />} />
                <Route path="/login" element={Myform} />
            </Routes>

            
        </Router>
    );
};

export default App;