import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.jsx';
import AppRoutes from './Routes.jsx';

function App() {
  const location = useLocation();
  const hideNavbarRoutes = ['/login', '/signup', '/forgot-password', '/terms', '/privacy'];
  const showNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <div className="App">
      {showNavbar && <Navbar />}
      <AppRoutes />
    </div>
  );
}

export default App;