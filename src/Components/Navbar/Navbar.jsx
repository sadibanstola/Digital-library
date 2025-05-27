import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'fixed',
      top: '0',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '1444px',
      height: '100px',
      padding: '24px 99px 24px 100px',
      background: '#F1F4FE',
      zIndex: 1000
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img src="/src/assets/image 163.png" alt="LibraDream Logo" style={{ width: '52px', height: '52px' }} />
        <span style={{
          fontFamily: '"Gothic A1", sans-serif', 
          fontWeight: 400,
          fontSize: '24px',
          lineHeight: '100%',
          letterSpacing: '6%',
          color: '#121212'
        }}>LibraDream</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
        <Link to="/" style={{
          fontFamily: '"Gothic A1", sans-serif', 
          fontWeight: 500,
          fontSize: '16px',
          lineHeight: '100%',
          letterSpacing: '0%',
          color: '#121212',
          textDecoration: 'none'
        }}>Home</Link>
        <Link to="/about" style={{
          fontFamily: '"Gothic A1", sans-serif', 
          fontWeight: 500,
          fontSize: '16px',
          lineHeight: '100%',
          letterSpacing: '0%',
          color: '#121212',
          textDecoration: 'none'
        }}>About</Link>
        <Link to="/my-library" style={{
          fontFamily: '"Gothic A1", sans-serif', 
          fontWeight: 500,
          fontSize: '16px',
          lineHeight: '100%',
          letterSpacing: '0%',
          color: '#121212',
          textDecoration: 'none'
        }}>My Library</Link>
        <Link to="/discover" style={{
          fontFamily: '"Gothic A1", sans-serif', 
          fontWeight: 500,
          fontSize: '16px',
          lineHeight: '100%',
          letterSpacing: '0%',
          color: '#121212',
          textDecoration: 'none'
        }}>Discover</Link>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <input type="text" placeholder="Search" style={{
          width: '200px',
          height: '40px',
          borderRadius: '10px',
          padding: '10px 12px',
          border: '0.8px solid #CB602B',
          outline: 'none'
          
        }} />
        <Link to="/register-login">
          <button style={{
            width: '133px',
            height: '40px',
            borderRadius: '6px',
            padding: '12px',
            background: '#CB602B',
            border: 'none',
            color: '#FFFFFF',
            fontFamily: '"Gothic A1", sans-serif', 
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '16px',
            letterSpacing: '0%',
            cursor: 'pointer'
          }}>Register/Login</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;