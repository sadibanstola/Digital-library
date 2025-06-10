import React from 'react';

const Footer = () => {
  return (
    <div className="absolute w-full bg-[#121212] text-white p-[50px_100px] font-['Gothic_A1'] flex flex-col justify-between h-[400px] top-[2636.65px] left-0">
      {/* Footer Content */}
      <div className="flex justify-between w-full">
        {/* LibraDream Description */}
        <div className="w-[400px]">
          <div className="flex items-center mb-5">
            <img
              src="/logo.png"
              alt="LibraDream Logo"
              className="w-10 h-10 mr-[10px] rounded-[5px]"
            />
            <h3 className="font-['Marion'] font-bold text-2xl text-white">
              LibraDream
            </h3>
          </div>
          <p className="font-normal text-base leading-6 tracking-[2%] text-white w-[505px]">
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
        <div className="flex flex-col gap-5 font-['Gothic_A1']">
          <h4 className="font-medium text-2xl text-white mb-[10px]">
            QUICK LINKS
          </h4>
          <a href="#" className="font-normal text-base text-[#B0B0B0] no-underline">
            Home
          </a>
          <a href="#" className="font-normal text-base text-[#B0B0B0] no-underline">
            About Us
          </a>
          <a href="#" className="font-normal text-base text-[#B0B0B0] no-underline">
            Discovery
          </a>
          <a href="#" className="font-normal text-base text-[#B0B0B0] no-underline">
            MyLibrary
          </a>
          <a href="#" className="font-normal text-base text-[#B0B0B0] no-underline">
            Help
          </a>
        </div>

        {/* Social Media */}
        <div className="flex flex-col gap-5">
          <h4 className="font-bold text-[26px] text-white mb-[10px] font-['Gothic_A1']">
            Social Media
          </h4>
          <div className="flex flex-col gap-[10px]">
            <a href="#">
              <img
                src="/facboo1.png"
                alt="Facebook"
                className="w-[35px] h-[35px]"
              />
            </a>
            <a href="#">
              <img
                src="/Logo_of_Twitter.svg.png"
                alt="Twitter"
                className="w-[33px] h-[33px]"
              />
            </a>
            <a href="#">
              <img
                src="/Instagram_logo_2022.svg.png"
                alt="Instagram"
                className="w-[33px] h-[33px]"
              />
            </a>
            <a href="#">
              <img
                src="/flat-icon-unread-message-blue-600nw-1909756030.jpg.webp"
                alt="Email"
                className="w-[33px] h-[33px]"
              />
            </a>
          </div>
        </div>
      </div>

      
    {/* Copyright */}
      <div className="border-b-2 border-[#5D38DE] pt-5 text-center font-normal text-sm text-[#B0B0B0] font-['Gothic_A1']">
        © LibraDream Inc. ALL RIGHTS RESERVED.
      </div>
    </div>
  );
};

export default Footer;