"use client"
import { Link } from "react-router-dom"
import backgroundImage from "/onboarding5 1.png"

const SignUp = () => {
  return (
    <div className="min-h-screen">
      {/* Mobile and Tablet Layout */}
      <div className="lg:hidden">
        {/* Background Image Section - Mobile */}
        <div
          className="w-full h-48 sm:h-64 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>

        {/* Form Section - Mobile */}
        <div className="bg-white px-4 py-6">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-6">
              <h1 className="font-[Marion] font-medium text-xl sm:text-2xl leading-6 sm:leading-7 text-[#121212] mb-2">
                Create Your Free Account
              </h1>
              <p className="font-[Gothic A1] font-normal text-base sm:text-lg leading-5 text-[#121212]">
                Start exploring your dream library in minutes
              </p>
            </div>

            <div className="bg-[#E8ECF9] rounded-lg p-4 sm:p-6">
              <h2 className="font-[Marion] font-bold text-lg leading-7 text-[#121212] text-center mb-4">SIGN UP NOW</h2>

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1 text-left font-[Marion] font-normal text-sm leading-5 text-[#121212]">
                      First name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter here..."
                      className="w-full p-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-[Gothic A1] font-normal text-base leading-6 text-[#707070]"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-left font-[Marion] font-normal text-sm leading-5 text-[#121212]">
                      Last name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter here..."
                      className="w-full p-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-[Gothic A1] font-normal text-base leading-6 text-[#707070]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-1 text-left font-[Marion] font-normal text-sm leading-5 text-[#121212]">
                    Username
                  </label>
                  <input
                    type="text"
                    placeholder="Enter username..."
                    className="w-full p-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-[Gothic A1] font-normal text-base leading-6 text-[#707070]"
                  />
                </div>

                <div>
                  <label className="block mb-1 text-left font-[Marion] font-normal text-sm leading-5 text-[#121212]">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter email here..."
                    className="w-full p-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-[Gothic A1] font-normal text-base leading-6 text-[#707070]"
                  />
                </div>

                <div>
                  <label className="block mb-1 text-left font-[Marion] font-normal text-sm leading-5 text-[#121212]">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Enter password..."
                    className="w-full p-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-[Gothic A1] font-normal text-base leading-6 text-[#707070]"
                  />
                </div>

                <div>
                  <label className="block mb-1 text-left font-[Marion] font-normal text-sm leading-5 text-[#121212]">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm password..."
                    className="w-full p-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-[Gothic A1] font-normal text-base leading-6 text-[#707070]"
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <input type="checkbox" className="mt-1 accent-[#121212]" />
                  <label className="font-[Gothic A1] font-normal text-sm leading-[22px] text-[#121212]">
                    I agree to the{" "}
                    <Link to="/terms" className="text-[#4242BE] hover:underline">
                      Terms of use
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="text-[#4242BE] hover:underline">
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full p-2 mt-4 text-white rounded-md transition duration-200 bg-[#CB602B] font-[Gothic A1] font-normal text-base leading-6 text-center"
                >
                  SIGN UP
                </button>
              </form>
            </div>

            <div className="text-center mt-4">
              <p className="font-[Gothic A1] font-normal text-[15px] leading-4 text-[#121212]">
                Already have an account?{" "}
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
      </div>

      {/* Desktop Layout - Fixed positioning to match original design */}
      <div className="hidden lg:flex min-h-screen flex-col md:flex-row">
        {/* Background Image Section */}
        <div
          className="flex-shrink-0 bg-cover bg-center bg-no-repeat w-[730px] h-[820px]"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>

        {/* Form Section */}
        <div className="flex-1 bg-white flex items-center justify-center min-h-screen w-[calc(100vw-730px)] relative">
          <div className="relative w-full h-full">
            {/* Header */}
            <div className="absolute w-[361px] h-[93px] top-[40px] left-[152px]">
              <h1 className="font-[Marion] font-medium text-[28px] leading-7 text-[#121212] text-center w-[361px] h-[31px]">
                Create Your Free Account
              </h1>
              <p className="mt-1 font-[Gothic A1] font-normal text-xl leading-5 text-[#121212] text-center w-[361px] h-[50px]">
                Start exploring your dream library in minutes
              </p>
            </div>

            {/* Form Container */}
            <div className="absolute w-[538px] h-[610px] min-w-[328px] rounded-lg pt-8 pr-6 pb-8 pl-6 bg-[#E8ECF9] text-center top-[150px] left-[74px]">
              <h2 className="font-[Marion] font-bold text-xl leading-[30px] text-[#121212] text-center">SIGN UP NOW</h2>

              <form className="mt-4">
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div>
                    <label className="block mb-1 text-left font-[Marion] font-normal text-sm leading-5 text-[#121212]">
                      First name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter here..."
                      className="w-full p-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-[Gothic A1] font-normal text-base leading-6 text-[#707070]"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-left font-[Marion] font-normal text-sm leading-5 text-[#121212]">
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
                  <label className="block mb-1 text-left font-[Marion] font-normal text-sm leading-5 text-[#121212]">
                    Username
                  </label>
                  <input
                    type="text"
                    placeholder="Enter username..."
                    className="w-full p-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-[Gothic A1] font-normal text-base leading-6 text-[#707070]"
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-1 text-left font-[Marion] font-normal text-sm leading-5 text-[#121212]">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter email here..."
                    className="w-full p-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-[Gothic A1] font-normal text-base leading-6 text-[#707070]"
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-1 text-left font-[Marion] font-normal text-sm leading-5 text-[#121212]">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Enter password..."
                    className="w-full p-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-[Gothic A1] font-normal text-base leading-6 text-[#707070]"
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-1 text-left font-[Marion] font-normal text-sm leading-5 text-[#121212]">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm password..."
                    className="w-full p-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-[Gothic A1] font-normal text-base leading-6 text-[#707070]"
                  />
                </div>

                <div className="mb-4 flex items-center">
                  <input type="checkbox" className="mr-2 accent-[#121212]" />
                  <label className="font-[Gothic A1] font-normal text-sm leading-[22px] text-[#121212]">
                    I agree to the{" "}
                    <Link to="/terms" className="text-[#4242BE] hover:underline">
                      Terms of use
                    </Link>{" "}
                    and{" "}
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

            {/* Login Link */}
            <div className="absolute w-[289px] h-[27px] top-[760px] left-[216px]">
              <p className="text-center font-[Gothic A1] font-normal text-[15px] leading-4 text-[#121212]">
                Already have an account?{" "}
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
      </div>
    </div>
  )
}

export default SignUp
