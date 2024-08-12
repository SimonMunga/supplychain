import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import RegistrationForm from './RegistrationForm';
import OtpVerificationForm from './OtpVerificationForm';
import LoginPage from './LoginPage';
import Home from './Home';
import PurchaseOrders from './PurchaseOrders';
import Rawmaterials from './rawmaterials';
import Configuration from './configuration';
import Admin from "./admin"



function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/otpverification" element={<OtpVerificationForm />} />
            <Route path="" element={<LoginPage/>} />
            <Route path="/Home" element={<Home/>} />
            <Route path='/PurchaseOrders' element={<PurchaseOrders/>} />
            <Route path='/rawmaterials' element= {<Rawmaterials/>}/>
            <Route path='/configuration' element={<Configuration/>}/>
            <Route path = "/admin" element={<Admin/>}/>
            
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
