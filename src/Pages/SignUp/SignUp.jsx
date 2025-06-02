import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '/public/onboarding5 1.png';

const SignUp = () => {
  return (
    <div className="flex min-h-screen">
      {/* Background Image Section */}
      <div
        className="flex-shrink-0"
        style={{
          width: '730px',
          height: '820px',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      {/* Form Section */}
      <div
        className="flex-1 bg-[#FFFFFF] flex items-center justify-center min-h-screen"
        style={{
          width: 'calc(100vw - 730px)',
        }}
      >
        <div
          className="bg-[#E8ECF9] p-4 rounded-md text-center"
          style={{
            width: '538px',
            height: '659px',
          }}
        >
          <div className="mb-6">
            <h1
              className="inline-block"
              style={{
                fontFamily: 'Marion',
                fontWeight: 400,
                fontSize: '28px',
                lineHeight: '28px',
                letterSpacing: '0',
                textAlign: 'right',
                color: '#121212',
              }}
            >
              Create Your Free Account
            </h1>
            <p
              className="mt-1"
              style={{
                fontFamily: 'Gothic A1',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '20px',
                letterSpacing: '0',
                textAlign: 'center',
                color: '#121212',
              }}
            >
              Start exploring your dream library in minutes
            </p>
          </div>
          <h2
            style={{
              fontFamily: 'Marion',
              fontWeight: 700,
              fontSize: '20px',
              lineHeight: '30px',
              letterSpacing: '0',
              textAlign: 'center',
              color: '#121212',
            }}
          >
            SIGN UP NOW
          </h2>
          <form className="mt-4">
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div>
                <label
                  className="block mb-1 text-left"
                  style={{
                    fontFamily: 'Marion',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '20px',
                    letterSpacing: '0',
                    color: '#121212',
                  }}
                >
                  First name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter here..."
                  className="w-full p-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{
                    fontFamily: 'Gothic A1',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '24px',
                    letterSpacing: '0',
                    color: '#707070',
                  }}
                />
              </div>
              <div>
                <label
                  className="block mb-1 text-left"
                  style={{
                    fontFamily: 'Marion',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '20px',
                    letterSpacing: '0',
                    color: '#121212',
                  }}
                >
                  Last name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter here..."
                  className="w-full p-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{
                    fontFamily: 'Gothic A1',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '24px',
                    letterSpacing: '0',
                    color: '#707070',
                  }}
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block mb-1 text-left"
                style={{
                  fontFamily: 'Marion',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '20px',
                  letterSpacing: '0',
                  color: '#121212',
                }}
              >
                Username
              </label>
              <input
                type="text"
                placeholder="Enter username..."
                className="w-full p-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{
                  fontFamily: 'Gothic A1',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '24px',
                  letterSpacing: '0',
                  color: '#707070',
                }}
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-1 text-left"
                style={{
                  fontFamily: 'Marion',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '20px',
                  letterSpacing: '0',
                  color: '#121212',
                }}
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter email here..."
                className="w-full p-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{
                  fontFamily: 'Gothic A1',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '24px',
                  letterSpacing: '0',
                  color: '#707070',
                }}
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-1 text-left"
                style={{
                  fontFamily: 'Marion',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '20px',
                  letterSpacing: '0',
                  color: '#121212',
                }}
              >
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                placeholder="Enter password..."
                className="w-full p-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{
                  fontFamily: 'Gothic A1',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '24px',
                  letterSpacing: '0',
                  color: '#707070',
                }}
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-1 text-left"
                style={{
                  fontFamily: 'Marion',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '20px',
                  letterSpacing: '0',
                  color: '#121212',
                }}
              >
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm password..."
                className="w-full p-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{
                  fontFamily: 'Gothic A1',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '24px',
                  letterSpacing: '0',
                  color: '#707070',
                }}
              />
            </div>
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                style={{
                  accentColor: '#121212',
                }}
              />
              <label
                style={{
                  fontFamily: 'Gothic A1',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '22px',
                  letterSpacing: '0',
                  color: '#121212',
                }}
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
              className="w-full p-2 mt-2 text-white rounded-md transition duration-200"
              style={{
                fontFamily: 'Gothic A1',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '24px',
                letterSpacing: '0',
                textAlign: 'center',
                background: '#CB602B',
              }}
            >
              SIGN UP
            </button>
            <p
              className="mt-4 text-center"
              style={{
                fontFamily: 'Gothic A1',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '22px',
                letterSpacing: '0',
                color: '#121212',
              }}
            >
              Already have an account?{' '}
              <Link
                to="/login"
                className="text-[#4242BE] hover:underline"
                style={{
                  fontFamily: 'Gothic A1',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '22px',
                  letterSpacing: '0',
                }}
              >
                LOGIN
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;