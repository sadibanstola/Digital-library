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
import AuthorSearch from './Private/AuthorSearch/AuthorSearch.jsx';
import Notifications from './Private/Notifications/Notifications.jsx';
import BookReader from './Components/BookReader.jsx';




const ProtectedRoute = () => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Navigate to="/home" />} />

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
        <Route path="/author-search" element={<AuthorSearch />} />
        <Route path="/genre/:genreName" element={<GenreBooks />} />
        <Route path="/book/:bookId" element={<BookDetails />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/read/:bookId" element={<BookReader />} />

       
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;