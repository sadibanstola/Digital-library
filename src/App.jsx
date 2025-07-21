import { useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { FavoritesProvider } from './context/FavoritesContext';
import { createContext, useContext, useState } from 'react';
import Navbar from './Components/Navbar/Navbar.jsx';
import AppRoutes from './Routes.jsx';
import ScrollToTop from './ScrollToTop.jsx';

// Create Navigation Context
const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [origin, setOrigin] = useState('/home');
  return (
    <NavigationContext.Provider value={{ origin, setOrigin }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => useContext(NavigationContext);

function App() {
  const location = useLocation();
  const hideNavbarRoutes = ['/login', '/signup', '/mood', '/account', '/read'];
  const showNavbar = !hideNavbarRoutes.some(
    (route) => location.pathname === route || location.pathname.startsWith(route)
  );

  return (
    <AuthProvider>
      <FavoritesProvider>
        <NavigationProvider>
          <div className="App">
            <ScrollToTop />
            {showNavbar && <Navbar />}
            <AppRoutes />
          </div>
        </NavigationProvider>
      </FavoritesProvider>
    </AuthProvider>
  );
}

export default App;