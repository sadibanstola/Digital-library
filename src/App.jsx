import { useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { FavoritesProvider } from './context/FavoritesContext';
import Navbar from './Components/Navbar/Navbar.jsx';
import AppRoutes from './Routes.jsx';
import ScrollToTop from './ScrollToTop.jsx';

function App() {
  const location = useLocation();
  // hideNavbarRoutes 
  const hideNavbarRoutes = ['/login', '/signup', '/mood', '/account', '/read'];
  const showNavbar = !hideNavbarRoutes.some(route => 
    location.pathname === route || location.pathname.startsWith(route)
  );

  return (
    <AuthProvider>
      <FavoritesProvider>
        <div className="App">
          <ScrollToTop /> 
          {showNavbar && <Navbar />}
          <AppRoutes />
        </div>
      </FavoritesProvider>
    </AuthProvider>
  );
}

export default App;