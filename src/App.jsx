import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.jsx';
import AppRoutes from './Routes.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Start as not logged in

  const location = useLocation();
  const hideNavbarRoutes = ['/login', '/signup', '/forgot-password', '/terms', '/privacy'];
  const showNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <div className="App">
      {showNavbar && <Navbar />}
      {/* Pass both login state & setter to routes */}
      <AppRoutes isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
}

export default App;
