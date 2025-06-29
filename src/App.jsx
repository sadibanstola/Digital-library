// src/App.jsx
import { useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { FavoritesProvider } from './context/FavoritesContext'; // Import FavoritesProvider
import Navbar from './Components/Navbar/Navbar.jsx';
import AppRoutes from './Routes.jsx';

function App() {
  const location = useLocation();
  const hideNavbarRoutes = ['/login', '/signup', '/mood', '/account'];
  const showNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <AuthProvider>
      <FavoritesProvider> {/* Wrap with FavoritesProvider */}
        <div className="App">
          {showNavbar && <Navbar />}
          <AppRoutes />
        </div>
      </FavoritesProvider>
    </AuthProvider>
  );
}

export default App;