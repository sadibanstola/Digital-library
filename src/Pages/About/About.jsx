import React from 'react';

const About = () => {
  return (
    <div
      className="relative min-h-screen"
      style={{
        backgroundColor: '#FFFFFF', // Consistent with previous design
        paddingTop: '100px', // Accounts for fixed navbar height
      }}
    >
      {/* Top Banner Image */}
      <img
        src="/public/img.png"
        alt="About Banner"
        className="w-full"
        style={{
          width: '1439px',
          height: '407px',
          margin: '0 auto',
          display: 'block',
        }}
      />
      {/* Logo Image */}
      <img
        src="/public/logo.png"
        alt="LibraDream Logo"
        className="absolute"
        style={{
          width: '237.08px',
          height: '237.08px',
          top: '340px',
          left: '601px',
          borderRadius: '20px',
          
        }}
      />
      {/* LibraDreams Explorer Text */}
      <div
        className="absolute"
        style={{
          width: '335px',
          height: '27px',
          top: '657.08px',
          left: '100px',
          fontFamily: 'Marion',
          fontWeight: 700,
          fontSize: '24px',
          lineHeight: '100%px',
          letterSpacing: '1%',
          color: '#121212',
        }}
      >
        LibraDreams Explorer
      </div>
    </div>
  );
};

export default About;