import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const About = () => {
  return (
    <section>
      <div className="relative bg-white pt-[100px]" style={{ minHeight: '2600px' }}>
        {/* Top Banner Image */}
        <img
          src="/img.png"
          alt="About Banner"
          className="w-[1440px] h-[407px] mx-auto block"
        />
        {/* Logo Image */}
        <img
          src="/logo.png"
          alt="LibraDream Logo"
          className="absolute w-[237.08px] h-[237.08px] top-[340px] left-[601px] rounded-[20px]"
        />
        {/* LibraDreams Explorer Text */}
        <div
          className="absolute w-[335px] h-[27px] top-[657.08px] left-[100px] font-[Marion] font-bold text-[24px] leading-[100%] tracking-[1%] text-[#121212]"
        >
          LibraDreams Explorer
        </div>
        <div
          className="absolute w-[1030px] h-[135px] top-[714px] left-[100px] font-[Gothic_A1] font-normal text-[18px] leading-[27px] tracking-[2%] text-[#121212]"
        >
          LibraDream is a free digital library platform that helps readers explore stories that match their imagination. Whether you're a student, a casual reader, or a lifelong learner, LibraDream makes discovering new content easy and inspiring. LibraDream is your personal gateway to a universe of knowledge, imagination and discovery. Our goal is to make books accessible to everyone, anytime and anywhere.
        </div>
        <div
          className="absolute w-[1030px] h-[54px] top-[869.08px] left-[100px] font-[Gothic_A1] font-normal text-[18px] leading-[27px] tracking-[2%] text-[#121212]"
        >
          Free timeless literary classics to trending contemporary reads, LibraDream offers something for every type of reader. Whether you’re here to study, relax, or explore something, we’ve got you covered.
        </div>
        <div
          className="absolute w-[148px] h-[27px] top-[1043.08px] left-[100px] font-[Marion] font-bold text-[24px] leading-[100%] tracking-[1%] text-[#000000]"
        >
          Our Mission
        </div>
        <div
          className="absolute w-[1030px] h-[78px] top-[1100.8px] left-[100px] font-[Gothic_A1] font-normal text-[18px] leading-[27px] tracking-[2%] text-[#121212]"
        >
          To create a personalized, emotion-based digital reading experience that connects users with stories they'll love. We believe in making knowledge accessible, fun, and meaningful for everyone.
        </div>
        <div
          className="absolute w-[305px] h-[27px] top-[1298.08px] left-[100px] font-[Marion] font-bold text-[24px] leading-[100%] tracking-[1%] text-[#000000]"
        >
          Why Choose LibraDream?
        </div>
        <div
          className="absolute w-[1030px] h-[189px] top-[1355.08px] left-[100px] font-[Gothic_A1] font-normal text-[18px] leading-[27px] tracking-[2%] text-[#121212]"
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
        <div
          className="absolute flex justify-center gap-[31px] flex-wrap w-[1238px] h-[443.57px] top-[1600px] left-[101px]"
        >
          {/* Card 1: Thousands of Free eBooks */}
          <div
            className="bg-white hover:bg-[#E5E5E5] transition-colors duration-300 group max-w-[392px] h-[460px] p-5 rounded-[6px] shadow-[0_2px_10px_rgba(0,0,0,0.1)]"
          >
            <img
              src="/book.png"
              alt="Curated Content"
              className="w-full h-auto mb-[15px] transform group-hover:scale-90 transition-transform duration-300"
            />
            <h3
              className="font-[Gothic_A1] font-semibold text-[20px] text-[#121212] mb-[10px]"
            >
              Thousands of Free eBooks
            </h3>
            <p
              className="font-[Gothic_A1] font-normal text-[16px] text-[#121212CC] leading-[1.5]"
            >
              Access a vast collection of stories across every genre, completely free.
            </p>
          </div>
          {/* Card 2: Save & Organize */}
          <div
            className="bg-white hover:bg-[#E5E5E5] transition-colors duration-300 group max-w-[392px] h-[460px] p-5 rounded-[6px] shadow-[0_2px_10px_rgba(0,0,0,0.1)]"
          >
            <img
              src="/person.png"
              alt="Save & Organize"
              className="w-full h-auto mb-[15px] transform group-hover:scale-90 transition-transform duration-300"
            />
            <h3
              className="font-[Gothic_A1] font-semibold text-[20px] text-[#121212] mb-[10px]"
            >
              Ads Free, Clean Interface
            </h3>
            <p
              className="font-[Gothic_A1] font-normal text-[16px] text-[#121212CC] leading-[1.5] w-[274px]"
            >
              Enjoy a peaceful reading experience with zero distractions.
            </p>
          </div>
          {/* Card 3: Mood Discovery */}
          <div
            className="bg-white hover:bg-[#E5E5E5] transition-colors duration-300 group max-w-[392px] h-[460px] p-5 rounded-[6px] shadow-[0_2px_10px_rgba(0,0,0,0.1)]"
          >
            <img
              src="/family.png"
              alt="Mood Discovery"
              className="w-full h-auto mb-[15px] transform group-hover:scale-90 transition-transform duration-300"
            />
            <h3
              className="font-[Gothic_A1] font-semibold text-[20px] text-[#121212] mb-[10px]"
            >
              For All Types of Readers
            </h3>
            <p
              className="font-[Gothic_A1] font-normal text-[16px] text-[#121212CC] leading-[1.5]"
            >
              Designed for students, casual readers, and lifelong learners alike.
            </p>
          </div>
        </div>
        <div
          className="absolute w-[130px] h-[27px] top-[2127.65px] left-[100px] font-[Marion] font-bold text-[24px] leading-[100%] tracking-[1%] text-[#000000]"
        >
          Our Values
        </div>
        <div
          className="absolute w-[1030px] h-[54px] top-[2184.65px] left-[100px] font-[Gothic_A1] font-normal text-[18px] leading-[27px] tracking-[2%] text-[#121212]"
        >
          At LibraDream, we are committed to accessibility, quality, and innovation. We believe in providing a platform that is inclusive, reliable, and constantly evolving to meet the need of our users.
        </div>
        <div
          className="absolute w-[127px] h-[27px] top-[2358.65px] left-[100px] font-[Marion] font-bold text-[24px] leading-[100%] tracking-[1%] text-[#000000]"
        >
          Contact Us
        </div>
        <div
          className="absolute w-[1030px] h-[54px] top-[2415.65px] left-[100px] font-[Gothic_A1] font-normal text-[18px] leading-[27px] tracking-[2%] text-[#121212]"
        >
          We love hearing from our users. Whether it’s a book request, suggestion, or feedback and we’re always listening to our customers
        </div>
        <div
          className="absolute w-[1030px] h-[27px] top-[2489.65px] left-[100px] font-[Gothic_A1] font-normal text-[18px] leading-[27px] tracking-[2%] text-[#121212]"
        >
          Email:{' '}
          <span
            className="px-[6px] py-[2px] rounded-[4px] text-[#CB602B]"
          >
            LibraDreamtech@gmail.com
          </span>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default About;