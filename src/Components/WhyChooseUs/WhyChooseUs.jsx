import React from 'react';

const WhyChooseUs = () => {
  return (
    <section style={{
      padding: '60px 100px',
      backgroundColor: '#E6F0FA', // Light blue background from the image
      textAlign: 'center',
      height:'100vh',
    }}>
      <h2 style={{
        fontFamily: '"Marion", serif',
        fontWeight: 419,
        fontSize: '36px',
        color: '#121212', // Black color for the heading
        marginBottom: '40px'
      }}>
        Why Choose LibraDream?
      </h2>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '30px',
        flexWrap: 'wrap'
      }}>
        {/* Card 1: Curated Content */}
        <div style={{
          maxWidth: '300px',
          padding: '20px',
          backgroundColor: '#FFFFFF',
          borderRadius: '10px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
        }}>
          <img
            src="/public/1.png" // Replace with actual image path
            alt="Curated Content"
            style={{
              width: '100%',
              height: 'auto',
              marginBottom: '15px'
            }}
          />
          <h3 style={{
            fontFamily: '"Gothic A1", sans-serif',
            fontWeight: 500,
            fontSize: '20px',
            color: '#121212',
            marginBottom: '10px',
           
          }}>
            Curated Content
          </h3>
          <p style={{
           fontFamily: '"Gothic A1", sans-serif',
            fontWeight: 400,
            fontSize: '16px',
            color: '#121212',
            lineHeight: '1.5'
          }}>
            Discover stories handpicked by our team to match your interest.
          </p>
        </div>
        {/* Card 2: Save & Organize */}
        <div style={{
          maxWidth: '300px',
          padding: '20px',
          backgroundColor: '#FFFFFF',
          borderRadius: '10px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
        }}>
          <img
            src="/public/img-2.png" // Replace with actual image path
            alt="Save & Organize"
            style={{
              width: '100%',
              height: 'auto',
              marginBottom: '15px'
            }}
          />
          <h3 style={{
            fontFamily: '"Gothic A1", sans-serif',
            fontWeight: 500,
            fontSize: '20px',
            color: '#121212',
            marginBottom: '10px'
          }}>
            Save & Organize
          </h3>
          <p style={{
            fontFamily: '"Gothic A1", sans-serif',
            fontWeight: 400,
            fontSize: '16px',
            color: '#121212',
            lineHeight: '1.5'
          }}>
            Easily save your favorite stories and organize them into collections.
          </p>
        </div>
        {/* Card 3: Mood Discovery */}
        <div style={{
          maxWidth: '300px',
          padding: '20px',
          backgroundColor: '#FFFFFF',
          borderRadius: '10px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
        }}>
          <img
            src="/public/img-3.png" // Replace with actual image path
            alt="Mood Discovery"
            style={{
              width: '100%',
              height: 'auto',
              marginBottom: '15px'
            }}
          />
          <h3 style={{
            fontFamily: '"Gothic A1", sans-serif',
            fontWeight: 500,
            fontSize: '20px',
            color: '#121212',
            marginBottom: '10px'
          }}>
            Mood Discovery
          </h3>
          <p style={{
            fontFamily: '"Gothic A1", sans-serif',
            fontWeight: 400,
            fontSize: '16px',
            color: '#121212',
            lineHeight: '1.5'
          }}>
            LibraDream let you explore content base on how you feel and interest.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;