import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '/onboarding5 1.png';

const SignUp = () => {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Background Image Section */}
      <div
        className="flex-shrink-0 bg-cover bg-center bg-no-repeat w-full md:w-[730px] h-[300px] md:h-[820px]"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>
      {/* Form Section */}
      <div
        className="flex-1 bg-white flex items-center justify-center min-h-screen w-full md:w-[calc(100vw-730px)]"
      >
        <div className="relative w-full max-w-[361px] h-auto mb-6 px-4 md:absolute md:w-[361px] md:h-[93px] md:top-[40px] md:left-[882px]">
          <h1
            className="inline-block font-[Marion] font-medium text-2xl md:text-[28px] leading-7 text-[#121212] text-center w-full md:w-[361px] h-auto md:h-[31px]"
          >
            Create Your Free Account
          </h1>
          <p
            className="mt-1 font-[Gothic A1] font-normal text-lg md:text-xl leading-5 text-[#121212] text-center w-full md:w-[361px] h-auto md:h-[50px]"
          >
            Start exploring your dream library in minutes
          </p>
        </div>

        <div
          className="relative w-full max-w-[538px] min-w-[328px] h-auto rounded-lg pt-8 pr-6 pb-8 pl-6 bg-[#E8ECF9] text-center px-4 md:absolute md:w-[538px] md:h-[610px] md:min-w-[328px] md:top-[150px] md:left-[804px]"
        >
          <h2
            className="font-[Marion] font-bold text-lg md:text-xl leading-7 md:leading-[30px] text-[#121212] text-center"
          >
            SIGN UP NOW
          </h2>
          <form className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
              <div>
                <label
                  className="block mb-1 text-left font-[Marion] font-normal text-sm leading-5 text-[#121212]"
                >
                  First name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter here..."
                  className="w-full p-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-[Gothic A1] font-normal text-base leading-6 text-[#707070]"
                />
              </div>
              <div>
                <label
                  className="block mb-1 text-left font-[Marion] font-normal text-sm leading-5 text-[#121212]"
                >
                  Last name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter here..."
                  className="w-full p-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-[Gothic A1] font-normal text-base leading-6 text-[#707070]"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block mb-1 text-left font-[Marion] font-normal text-sm leading-5 text-[#121212]"
              >
                Username
              </label>
              <input
                type="text"
                placeholder="Enter username..."
                className="w-full p-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-[Gothic A1] font-normal text-base leading-6 text-[#707070]"
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-1 text-left font-[Marion] font-normal text-sm leading-5 text-[#121212]"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter email here..."
                className="w-full p-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-[Gothic A1] font-normal text-base leading-6 text-[#707070]"
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-1 text-left font-[Marion] font-normal text-sm leading-5 text-[#121212]"
              >
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                placeholder="Enter password..."
                className="w-full p-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-[Gothic A1] font-normal text-base leading-6 text-[#707070]"
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-1 text-left font-[Marion] font-normal text-sm leading-5 text-[#121212]"
              >
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm password..."
                className="w-full p-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-[Gothic A1] font-normal text-base leading-6 text-[#707070]"
              />
            </div>
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                className="mr-2 accent-[#121212]"
              />
              <label
                className="font-[Gothic A1] font-normal text-sm leading-[22px] text-[#121212]"
              >
                I agree to the{' '}
                <Link to="/terms" className="text-[#4242BE] hover:underline">
                  Terms of use
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-[#4242BE] hover:underline">
                  Privacy Policy
                </Link>
              </label>
            </div>
            <button
              type="submit"
              className="w-full p-2 mt-2 text-white rounded-md transition duration-200 bg-[#CB602B] font-[Gothic A1] font-normal text-base leading-6 text-center"
            >
              SIGN UP
            </button>
          </form>
        </div>
        <div
          className="relative w-full max-w-[289px] h-auto mt-4 px-4 md:absolute md:w-[289px] md:h-[27px] md:top-[760px] md:left-[946px]"
        >
          <p
            className="mt-0.5 text-center font-[Gothic A1] font-normal text-[15px] leading-4 text-[#121212]"
          >
            Already have an account?{' '}
            <Link
              to="/login"
              className="text-[#4242BE] hover:underline font-[Gothic A1] font-normal text-[15px] leading-4"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;