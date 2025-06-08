import React from 'react';
import { Link } from 'react-router-dom';
import WhyChooseUs from '../../Components/WhyChooseUs/WhyChooseUs';
import Explore from '../Explore/Explore';

const Home = () => (
  <div style={{
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
     // Stack sections vertically
  }}>
    {/* Hero Section */}
    <section style={{
      padding: '120px 100px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '50px',
      height:'100vh',
    }}>
      <div style={{ maxWidth: '50%' }}>
        <h1 style={{
          fontFamily: '"Marion", serif',
          fontWeight: 400, // Fixed typo: '400px' to 400
          fontSize: '80px',
          lineHeight: '115px',
          color: '#5352ED',
          marginBottom: '20px'
        }}>
          Start Exploring <br /> Your Dreams
        </h1>
        <p style={{
          fontFamily: '"Gothic A1", sans-serif',
          fontWeight: 400,
          fontSize: '36px',
          lineHeight: '47px',
          color: '#121212',
          marginBottom: '30px'
        }}>
          Discover books, stories, and ideas that match your imagination.
        </p>
        <Link to="/discover">
          <button style={{
            padding: '12px 24px',
            background: '#CB602B',
            border: 'none',
            borderRadius: '6px',
            color: '#FFFFFF',
            fontFamily: '"Gothic A1", sans-serif',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '16px',
            letterSpacing: '0%',
            cursor: 'pointer',
            width: '200px',
            height: '56px'
          }}>
            Explore Now
          </button>
        </Link>
      </div>
      <div style={{ maxWidth: '50%' }}>
        <img
          src="./sitting.png"
          alt="Person sitting on books"
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: '500px',
            objectFit: 'contain'
          }}
        />
      </div>
    </section>
    {/* Why Choose Us Section */}
    <WhyChooseUs />
    {/* Why Choose Us Section */}
    <Explore />
  </div>
);

export default Home;