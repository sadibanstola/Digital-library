import React from 'react';

const About = () => {
  return (
    <div
      className="relative min-h-screen"
      style={{
        backgroundColor: '#FFFFFF', 
        paddingTop: '100px', 
      }}
    >
      {/* Top Banner Image */}
      <img
        src="/img.png"
        alt="About Banner"
        className="w-full"
        style={{
          width: '1440px',
          height: '407px',
          margin: '0 auto',
          display: 'block',
        }}
      />
      {/* Logo Image */}
      <img
        src="/logo.png"
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
        className='absolute'
        style={{
          width: '335px',
          height: '27px',
          top: '657.08px',
          left: '100px',
          fontFamily: 'Marion',
          fontWeight: 700,
          fontSize: '24px',
          lineHeight: '100%',
          letterSpacing: '1%',
          color: '#121212',
        }}
      >
        LibraDreams Explorer
      </div> 
      
      <div
         className='absolute'
        style={{
          width: '1030px',
          height: '135px',
          top: '714px',
          left: '100px',
         fontFamily: 'Gothic A1',
          fontWeight: 400,
          fontSize: '18px',
          lineHeight: '27px',
          letterSpacing: '2%',
          color: '#121212',
        }}
      >
       LibraDream is a free digital library platform that helps readers explore stories that match their imagination. Whether you're a student, a casual reader, or a lifelong learner, LibraDream makes discovering new content easy and inspiring. LibraDream is your personal gateway to a universe of knowledge, imagination and discovery. Our goal is to make books accessible to everyone, anytime and anywhere.

      </div>

      <div
         className='absolute'
        style={{
          width: '1030px',
          height: '54px',
          top: '869.08px',
          left: '100px',
         fontFamily: 'Gothic A1',
          fontWeight: 400,
          fontSize: '18px',
          lineHeight: '27px',
          letterSpacing: '2%',
          color: '#121212',
        }}
      >
       Free timeless literay classic to trending cintemporary reads, LibraDream offer something for every type of reader. Whether you’re here to study, relax, or explore something. We’ve got you covered.

      </div>
      <div
         className='absolute'
        style={{
          width: '148px',
          height: '27px',
          top: '1043.08px',
          left: '100px',
         fontFamily: 'Marion',
          fontWeight: 700,
          fontSize: '24px',
          lineHeight: '100%',
          letterSpacing: '1%',
          color: '#000000',
        }}
      >
       Our Mission
      </div>
      <div
         className='absolute'
        style={{
          width: '1030px',
          height: '78px',
          top: '1100.8px',
          left: '100px',
         fontFamily: 'Gothic A1',
          fontWeight: 400,
          fontSize: '18px',
          lineHeight: '27px',
          letterSpacing: '2%',
          color: '#121212',
        }}
      >
      To create a personalized, emotion-based digital reading experience that connects users with stories they'll love. We believe in making knowledge accessible, fun, and meaningful for everyone.
      </div>
      <div
         className='absolute'
        style={{
          width: '305px',
          height: '27px',
          top: '1298.08px',
          left: '100px',
         fontFamily: 'Marion',
          fontWeight: 700,
          fontSize: '24px',
          lineHeight: '100%',
          letterSpacing: '1%',
          color: '#000000',
        }}
      >
      Why Choose LibraDream?
      </div>

      <div
  className="absolute"
  style={{
    width: '1030px',
    height: '189px',
    top: '1355.08px',
    left: '100px',
    fontFamily: 'Gothic A1',
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '27px',
    letterSpacing: '2%',
    color: '#121212',
  }}
>
  <ul className="list-disc pl-5 space-y-2">
    <li className="marker:text-black">Thousands of free eBooks across all genres.</li>
    <li className="marker:text-black">Ad-free, clean reading interfaces.</li>
    <li className="marker:text-black">Request a new book and get it added within 24 hours.</li>
    <li className="marker:text-black">Support Bookmark.</li>
    <li className="marker:text-black">Save and Organize.</li>
    <li className="marker:text-black">Curated Content.</li>
    <li className="marker:text-black">Discovery by Mood.</li>
  </ul>
</div>
  
{/************************** cards ************************/}
<div
  className="absolute"
  style={{
    display: 'flex',
    justifyContent: 'center',
    gap: '31px',
    flexWrap: 'wrap',
    width: '1238px',
    height: '443.57px',
    top: '1600px',
    left: '101px',
  }}
>
  {/* Card 1: Thousands of Free eBooks */}
  <div
    className="bg-white hover:bg-[#E5E5E5] transition-colors duration-300 group"
    style={{
      maxWidth: '392px',
      height: '460px',
      padding: '20px',
      borderRadius: '6px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    }}
  >
    <img
      src="/book.png"
      alt="Curated Content"
      className="w-full h-auto mb-[15px] transform group-hover:scale-90 transition-transform duration-300"
      style={{
        width: '100%',
        height: 'auto',
        marginBottom: '15px',
      }}
    />
    <h3
      style={{
        fontFamily: '"Gothic A1", sans-serif',
        fontWeight: 600,
        fontSize: '20px',
        color: '#121212',
        marginBottom: '10px',
      }}
    >
      Thousands of Free eBooks
    </h3>
    <p
      style={{
        fontFamily: '"Gothic A1", sans-serif',
        fontWeight: 400,
        fontSize: '16px',
        color: '#121212CC',
        lineHeight: '1.5',
      }}
    >
      Access a vast collection of stories across every genre, completely free.
    </p>
  </div>
  {/* Card 2: Save & Organize */}
  <div
    className="bg-white hover:bg-[#E5E5E5] transition-colors duration-300 group"
    style={{
      maxWidth: '392px',
      height: '460px',
      padding: '20px',
      borderRadius: '6px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    }}
  >
    <img
      src="/person.png"
      alt="Save & Organize"
      className="w-full h-auto mb-[15px] transform group-hover:scale-90 transition-transform duration-300"
      style={{
        width: '100%',
        height: 'auto',
        marginBottom: '15px',
      }}
    />
    <h3
      style={{
        fontFamily: '"Gothic A1", sans-serif',
        fontWeight: 600,
        fontSize: '20px',
        color: '#121212',
        marginBottom: '10px',
      }}
    >
      Ads Free, Clean Interface
    </h3>
    <p
      style={{
        fontFamily: '"Gothic A1", sans-serif',
        fontWeight: 400,
        fontSize: '16px',
        color: '#121212CC',
        lineHeight: '1.5',
        width: '274px',
      }}
    >
      Enjoy a peaceful reading experience with zero distractions.
    </p>
  </div>
  {/* Card 3: Mood Discovery */}
  <div
    className="bg-white hover:bg-[#E5E5E5] transition-colors duration-300 group"
    style={{
      maxWidth: '392px',
      height: '460px',
      padding: '20px',
      borderRadius: '6px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    }}
  >
    <img
      src="/family.png"
      alt="Mood Discovery"
      className="w-full h-auto mb-[15px] transform group-hover:scale-90 transition-transform duration-300"
      style={{
        width: '100%',
        height: 'auto',
        marginBottom: '15px',
      }}
    />
    <h3
      style={{
        fontFamily: '"Gothic A1", sans-serif',
        fontWeight: 600,
        fontSize: '20px',
        color: '#121212',
        marginBottom: '10px',
      }}
    >
      For All Types of Readers
    </h3>
    <p
      style={{
        fontFamily: '"Gothic A1", sans-serif',
        fontWeight: 400,
        fontSize: '16px',
        color: '#121212CC',
        lineHeight: '1.5',
      }}
    >
      Designed for students, casual readers, and lifelong learners alike.
    </p>
  </div>
</div>

<div
         className='absolute'
        style={{
          width: '130px',
          height: '27px',
          top: '2127.65px',
          left: '100px',
         fontFamily: 'Marion',
          fontWeight: 700,
          fontSize: '24px',
          lineHeight: '100%',
          letterSpacing: '1%',
          color: '#000000',
        }}
      >
    Our Values
      </div>

      <div
         className='absolute'
        style={{
          width: '1030px',
          height: '54px',
          top: '2184.65px',
          left: '100px',
         fontFamily: 'Gothic A1',
          fontWeight: 400,
          fontSize: '18px',
          lineHeight: '27px',
          letterSpacing: '2%',
          color: '#121212',
        }}
      >
     At LibraDream, we are committed to accessibility, quality, and innovation. We believe in providing a platform that is inclusive, reliable, and constantly evolving to meet the need of our users.
      </div>

      <div
         className='absolute'
        style={{
          width: '127px',
          height: '27px',
          top: '2358.65px',
          left: '100px',
         fontFamily: 'Marion',
          fontWeight: 700,
          fontSize: '24px',
          lineHeight: '100%',
          letterSpacing: '1%',
          color: '#000000',
        }}
      >
   Contact Us
      </div>

      <div
         className='absolute'
        style={{
          width: '1030px',
          height: '54px',
          top: '2415.65px',
          left: '100px',
         fontFamily: 'Gothic A1',
          fontWeight: 400,
          fontSize: '18px',
          lineHeight: '27px',
          letterSpacing: '2%',
          color: '#121212',
        }}
      >
      We love hearing from our users. Whether it’s a book request, suggestion, or feedback and we’re always listening to our customers

      </div>
      <div
  className="absolute"
  style={{
    width: '1030px',
    height: '27px',
    top: '2489.65px',
    left: '100px',
    fontFamily: 'Gothic A1',
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '27px',
    letterSpacing: '2%',
    color: '#121212',
  }}
>
  Email:{' '}
  <span
    style={{
      padding: '2px 6px',
      borderRadius: '4px',
      color: '#CB602B',
    }}
  >
    LibraDreamtech@gmail.com
  </span>
</div>

{/* Footer */}
<div
  className="absolute w-full"
  style={{
    width: '1440px',
    height: '400px',
    top: '2636.65px',
    left: '0',
    backgroundColor: '#121212',
    color: '#FFFFFF',
    padding: '50px 100px',
    fontFamily: 'Gothic A1, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }}
>
  {/* Footer Content */}
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
     
    }}
  >
    {/* LibraDream Description */}
    <div
      style={{
        width: '400px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <img
          src="/logo.png"
          alt="LibraDream Logo"
          style={{
            width: '40px',
            height: '40px',
            marginRight: '10px',
            borderRadius: '5px',
          }}
        />
        <h3
          style={{
            fontFamily: 'Marion, sans-serif',
            fontWeight: 700,
            fontSize: '24px',
            color: '#FFFFFF',
          }}
        >
          LibraDream
        </h3>
      </div>
      <p
        style={{
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '24px',
          letterSpacing: '2%',
          color: '#FFFFFF',
          fontFamily: 'Gothic A1',
          width:'505px'
        }}
      >
        The Digital Library of Dreams is an immersive, personalized
        platform that reimagines how users explore, save, and engage with
        digital literature and media. Designed for students, creatives, and
        lifelong learners, it curates content based on users’ interests,
        emotions, and aspirations and turn learning into a journey of
        discovery. With features like a personalized library, emotional
        mood tagging, and a dynamic Discovery feed, the platform offers a
        seamless and inspiring way to access knowledge anytime, anywhere.
      </p>
    </div>

    {/* Quick Links */}
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        fontFamily: 'Gothic A1',
      }}
    >
      <h4
        style={{
          fontWeight: 500,
          fontSize: '24px',
          color: '#FFFFFF',
          marginBottom: '10px',
        }}
      >
        QUICK LINKS
      </h4>
      <a
        href="#"
        style={{
          fontWeight: 400,
          fontSize: '16px',
          color: '#B0B0B0',
          textDecoration: 'none',
        }}
      >
        Home
      </a>
      <a
        href="/home"
        style={{
          fontWeight: 400,
          fontSize: '16px',
          color: '#B0B0B0',
          textDecoration: 'none',
        }}
      >
        About Us
      </a>
      <a
        href="/about"
        style={{
          fontWeight: 400,
          fontSize: '16px',
          color: '#B0B0B0',
          textDecoration: 'none',
        }}
      >
        Discovery
      </a>
      <a
        href="#"
        style={{
          fontWeight: 400,
          fontSize: '16px',
          color: '#B0B0B0',
          textDecoration: 'none',
        }}
      >
        MyLibrary
      </a>
      <a
        href="#"
        style={{
          fontWeight: 400,
          fontSize: '16px',
          color: '#B0B0B0',
          textDecoration: 'none',
        }}
      >
        Help
      </a>
    </div>

    {/* Social Media */}
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '25px',
      }}
    >
      <h4
        style={{
          fontWeight: 700,
          fontSize: '26px',
          color: '#FFFFFF',
          marginBottom: '10px',
           fontFamily: 'Gothic A1',
        }}
      >
        Social Media
      </h4>
      <div
        style={{
          display: 'flex',
           flexDirection: 'column',
          gap: '10px',
        }}
      >
        <a href="#">
          <img
            src="/Facebook.png"
            alt="Facebook"
            style={{
              width: '35px',
              height: '35px',
            }}
          />
        </a>
        <a href="#">
          <img
            src="/Logo_of_Twitter.svg.png"
            alt="Twitter"
            style={{
              width: '33px',
              height: '33px',
            }}
          />
        </a>
        <a href="#">
          <img
            src="/Instagram_logo_2022.svg.png" 
            alt="Instagram"
            style={{
              width: '33px',
              height: '33px',
            }}
          />
        </a>
        <a href="#">
          <img
            src="/flat-icon-unread-message-blue-600nw-1909756030.jpg.webp" 
            alt="Email"
            style={{
              width: '33px',
              height: '33px',
            }}
          />
        </a>
      </div>
    </div>
  </div>

  {/* Copyright */}
  <div className="border-b-2 border-[#5D38DE] pt-6 text-center font-normal text-sm text-[#B0B0B0] font-['Gothic_A1']">
        © LibraDream Inc. ALL RIGHTS RESERVED.
      </div>
</div>
    </div>
    
  );
};

export default About;