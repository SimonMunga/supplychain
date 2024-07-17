import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import RegistrationForm from './RegistrationForm';
import OtpVerificationForm from './OtpVerificationForm';
import LoginPage from './LoginPage';
import Home from './Home';


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
            
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
