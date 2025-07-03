// src/Routes.jsx
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Home from './Pages/Home/Home.jsx';
import Login from './Pages/Login/Login.jsx';
import SignUp from './Pages/SignUp/SignUp.jsx';
import About from './Pages/About/About.jsx';
import GenreBooks from './Pages/GenreBooks/GenreBooks.jsx'; 
import Mood from './Private/Mood/Mood.jsx';
import MyLibrary from './Pages/MyLibrary/MyLibrary.jsx';
import Privacy from './Private/Privacy/Privacy.jsx';
import Account from './Private/Account/Account.jsx';
import Cards from './Private/Cards/Cards.jsx';
import BookDetails from './Private/BookDetails/BookDetails.jsx';

const ProtectedRoute = () => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      
     
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      {/* Protected routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/mood" element={<Mood />} />
        <Route path="/mylibrary" element={<MyLibrary />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/genre/:genreName" element={<GenreBooks />} /> {/* New route */}
        <Route path="/book/:bookId" element={<BookDetails  />} /> {/* New route */}
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;