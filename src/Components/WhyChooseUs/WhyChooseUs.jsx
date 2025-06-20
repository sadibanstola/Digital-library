import React from 'react';

const WhyChooseUs = () => {
  return (
    <section style={{
      padding: '60px 100px',
      backgroundColor: '#E6F0FA', // Light blue background from the image
      textAlign: 'center',
      height:'680px',
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

        
        <div style={{
  maxWidth: '350px',
  padding: '20px',
  backgroundColor: '#FFFFFF',
  borderRadius: '10px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  transition: 'background-color 0.3s ease', // Added for smooth hover transition
  ':hover': {
    backgroundColor: '#E5E5E5' // Hover background color
  }
}}>
  <img
    src="/1.png"
    style={{
      width: '100%',
      height: 'auto',
      marginBottom: '15px',
      transition: 'transform 0.3s ease', // Added for smooth image animation
      ':hover': {
        transform: 'scale(1.05)' // Slight scale up on image hover
      }
    }}
  />
  <h3 style={{
    fontFamily: '"Gothic A1", sans-serif',
    fontWeight: 500,
    fontSize: '20px',
    color: '#5352ED',
    marginBottom: '10px',
    textAlign: 'left'
  }}>
    Curated Content
  </h3>
  <p style={{
    fontFamily: '"Gothic A1", sans-serif',
    fontWeight: 300,
    fontSize: '16px',
    color: '#121212CC',
    lineHeight: '1.5',
    textAlign: 'left'
  }}>
    Discover stories handpicked by our team to match your interest.
  </p>
</div>
        {/* Card 2: Save & Organize */}
        <div style={{
          maxWidth: '350px',
          padding: '20px',
          backgroundColor: '#FFFFFF',
          borderRadius: '10px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
        }}>
          <img
            src="/img-2.png" 
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
            color: '#5352ED',
            marginBottom: '10px',
            textAlign:'left',
          }}>
            Save & Organize
          </h3>
          <p style={{
            fontFamily: '"Gothic A1", sans-serif',
            fontWeight: 300,
            fontSize: '16px',
            color: '#121212CC',
            lineHeight: '1.5',
           textAlign:'left',
          }}>
            Easily save your favorite stories and organize them into collections.
          </p>
        </div>
        {/* Card 3: Mood Discovery */}
        <div style={{
          maxWidth: '350px',
          padding: '20px',
          backgroundColor: '#FFFFFF',
          borderRadius: '10px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
        }}>
          <img
            src="/img-3.png" 
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
            color: '#5352ED',
            marginBottom: '10px',
            textAlign:'left',
          }}>
            Mood Discovery
          </h3>
          <p style={{
            fontFamily: '"Gothic A1", sans-serif',
            fontWeight: 300,
            fontSize: '16px',
            color: '#121212CC',
            lineHeight: '1.5',
           textAlign:'left',
          }}>
            LibraDream let you explore content base on how you feel and interest.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;