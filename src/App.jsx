import React from 'react';
import Navbar from './Components/Navbar/Navbar.jsx';
import AppRoutes from './Routes.jsx';
import Home from './Pages/Home/Home.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRoutes />
      
    </div>
  );
}

export default App;