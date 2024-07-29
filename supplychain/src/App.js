import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import RegistrationForm from './RegistrationForm';
import OtpVerificationForm from './OtpVerificationForm';
import LoginPage from './LoginPage';
import Home from './Home';
import PurchaseOrders from './PurchaseOrders';
import Rawmaterials from './rawmaterials'



function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/otpverification" element={<OtpVerificationForm />} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/Home" element={<Home/>} />
            <Route path='/PurchaseOrders' element={<PurchaseOrders/>} />
            <Route path='/rawmaterials' element= {<Rawmaterials/>}/>
            
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
