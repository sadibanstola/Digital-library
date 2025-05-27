import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';

const About = () => (
  <div style={{ padding: '120px 20px', minHeight: '100vh', backgroundColor: '#e6f0fa' }}>
    <h1>About Page</h1>
    <p>Learn more about LibraDream and our mission.</p>
  </div>
);

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

const RegisterLogin = () => (
  <div style={{ padding: '120px 20px', minHeight: '100vh', backgroundColor: '#f0e6fa' }}>
    <h1>Register/Login Page</h1>
    <p>Sign up or log in to access your account.</p>
  </div>
);

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/my-library" element={<MyLibrary />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/register-login" element={<RegisterLogin />} />
    </Routes>
  );
};

export default AppRoutes;