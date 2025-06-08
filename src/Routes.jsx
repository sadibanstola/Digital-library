import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import Login from './Pages/Login/Login.jsx';
import SignUp from './Pages/SignUp/SignUp.jsx';
import About from './Pages/About/About.jsx';
import Explore from './Pages/Explore/Explore.jsx';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
     
      <Route path="/my-library" element={<MyLibrary />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

const MyLibrary = () => (
  <div style={{ padding: '120px 20px', minHeight: '100vh', backgroundColor: '#e6fae6' }}>
    <h1>My Library Page</h1>
    <p>View your collection of books and resources here.</p>
  </div>
);

const Discover = () => (
  <div style={{ padding: '120px 20px', minHeight: '100vh', backgroundColor: '#fae6e6' }}>
    <h1>Discover Page</h1>
    <p>Explore new books and recommendations.</p>
  </div>
);

const ForgotPassword = () => (
  <div style={{ padding: '120px 20px', minHeight: '100vh', backgroundColor: '#f0e6fa' }}>
    <h1>Forgot Password Page</h1>
    <p>Reset your password here.</p>
  </div>
);

const Terms = () => (
  <div style={{ padding: '120px 20px', minHeight: '100vh', backgroundColor: '#f0e6fa' }}>
    <h1>Terms of Use</h1>
    <p>Read our terms of use here.</p>
  </div>
);

const Privacy = () => (
  <div style={{ padding: '120px 20px', minHeight: '100vh', backgroundColor: '#f0e6fa' }}>
    <h1>Privacy Policy</h1>
    <p>Read our privacy policy here.</p>
  </div>
);

export default AppRoutes;