import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="w-full bg-[#121212] text-white p-6 lg:p-[50px_100px] font-['Gothic_A1'] flex flex-col justify-between h-auto lg:h-[400px] mb-0 left-0">
      {/* Footer Content */}
      <div className="flex flex-col lg:flex-row justify-between w-full gap-8 lg:gap-0">
        {/* LibraDream Description */}
        <div className="w-full lg:w-[400px]">
          <div className="flex items-center mb-5">
            <img
              src="/logo.png"
              alt="LibraDream Logo"
              className="w-8 lg:w-10 h-8 lg:h-10 mr-[10px] rounded-[5px]"
            />
            <h3 className="font-['Marion'] font-bold text-xl lg:text-2xl text-white">
              LibraDream
            </h3>
          </div>
          <p className="font-normal text-sm lg:text-base leading-6 tracking-[2%] text-white w-full lg:w-[505px]">
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
        <div className="flex flex-col gap-4 lg:gap-5 font-['Gothic_A1']">
          <h4 className="font-medium text-xl lg:text-2xl text-white mb-[10px]">
            QUICK LINKS
          </h4>
          <Link to="/home" className="font-normal text-sm lg:text-base text-[#B0B0B0] no-underline">
            Home
          </Link>
          <Link to="/about" className="font-normal text-sm lg:text-base text-[#B0B0B0] no-underline">
            About Us
          </Link>
          <Link to="/cards" className="font-normal text-sm lg:text-base text-[#B0B0B0] no-underline">
            Discovery
          </Link>
          <Link to="/mylibrary" className="font-normal text-sm lg:text-base text-[#B0B0B0] no-underline">
            MyLibrary
          </Link>
          <Link to="/privacy" className="font-normal text-sm lg:text-base text-[#B0B0B0] no-underline">
            Help
          </Link>
        </div>

        {/* Social Media */}
        <div className="flex flex-col gap-4 lg:gap-5">
          <h4 className="font-bold text-xl lg:text-[26px] text-white mb-[10px] font-['Gothic_A1']">
            Social Media
          </h4>
          <div className="flex flex-col gap-[10px]">
            <a href="#">
              <img
                src="/Facebook.png"
                alt="Facebook"
                className="w-6 lg:w-[35px] h-6 lg:h-[35px]"
              />
            </a>
            <a href="#">
              <img
                src="/Logo_of_Twitter.svg.png"
                alt="Twitter"
                className="w-6 lg:w-[33px] h-6 lg:h-[33px]"
              />
            </a>
            <a href="#">
              <img
                src="/Instagram_logo_2022.svg.png"
                alt="Instagram"
                className="w-6 lg:w-[33px] h-6 lg:h-[33px]"
              />
            </a>
            <a href="#">
              <img
                src="/flat-icon-unread-message-blue-600nw-1909756030.jpg.webp"
                alt="Email"
                className="w-6 lg:w-[33px] h-6 lg:h-[33px]"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-b-2 border-[#5D38DE] pt-6 text-center font-normal text-xs lg:text-sm text-[#B0B0B0] font-['Gothic_A1']">
        © LibraDream Inc. ALL RIGHTS RESERVED.
      </div>
    </div>
  );
};

export default Footer;