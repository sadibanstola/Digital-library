"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import backgroundImage from "/picart2.png"

const Login = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" })
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    await login({ username: credentials.username || "guest" })
    navigate("/mood", { replace: true })
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Mobile and Tablet Layout */}
      <div className="flex items-center justify-center min-h-screen p-4 lg:hidden">
        <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6">
          <div className="mb-6 text-center">
            <h1 className="font-[Marion] font-normal text-xl sm:text-2xl leading-6 sm:leading-7 text-[#121212] mb-4">
              Digital Library of Dreams
            </h1>
            <p className="font-[Gothic A1] font-light text-base sm:text-lg leading-5 text-[#121212]">
              Discover stories that match your <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>imagination.
            </p>
          </div>

          <div className="w-full bg-[#F1F4FE] rounded-2xl p-4 sm:p-6 text-center">
            <h2 className="font-[Marion] font-bold text-lg leading-[30px] text-[#121212] mb-4">
              LOGIN
              <br />
              <span className="text-sm text-[#949CA9] font-normal">Let's build something great</span>
            </h2>

            <form className="space-y-4" onSubmit={handleLogin}>
              <div>
                <label className="block mb-1 text-left font-[Marion] font-normal text-sm leading-5 text-[#121212]">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter here..."
                  value={credentials.username}
                  onChange={handleChange}
                  className="w-full p-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-[Gothic A1] font-normal text-base leading-6 text-[#707070]"
                />
              </div>

              <div>
                <label className="block mb-1 text-left font-[Marion] font-normal text-sm leading-5 text-[#121212]">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter password..."
                    value={credentials.password}
                    onChange={handleChange}
                    className="w-full p-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-[Gothic A1] font-normal text-base leading-6 text-[#707070]"
                  />
                  <button type="button" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full p-2 mt-2 text-white rounded-md transition duration-200 bg-[#CB602B] font-[Gothic A1] font-normal text-base leading-6 text-center"
              >
                Login
              </button>
            </form>

            <div className="mt-4 space-y-2">
              <button className="w-full p-2 bg-white rounded-md flex items-center justify-center hover:bg-gray-50 transition duration-200 font-[Gothic A1] font-normal text-sm sm:text-base leading-6 text-[#121212]">
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 mr-2" />
                Sign up with Google
              </button>
              <button className="w-full p-2 bg-white rounded-md flex items-center justify-center hover:bg-gray-50 transition duration-200 font-[Gothic A1] font-normal text-sm sm:text-base leading-6 text-[#121212]">
                <img src="https://www.facebook.com/favicon.ico" alt="Facebook" className="w-5 h-5 mr-2" />
                Sign up with Facebook
              </button>
            </div>

            <p className="mt-4 text-center font-[Gothic A1] font-normal text-sm leading-[22px] text-[#121212]">
              Don't have an account?{" "}
              <Link to="/signup" className="text-[#4242BE] hover:underline">
                Register now
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Preserved exactly as your original design but with better positioning */}
      <div className="hidden lg:block">
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-full max-w-7xl mx-auto px-8 flex justify-end items-center min-h-screen">
            <div className="relative w-[500px] h-[710px] rounded-xl p-6 bg-white shadow-md mr-8 xl:mr-16 2xl:mr-24">
              <div className="mb-5 text-center">
                <h1 className="font-[Marion] font-normal text-[28px] leading-7 text-[#121212] mb-5">
                  Digital Library of Dreams
                </h1>
                <p className="font-[Gothic A1] font-light text-[22px] leading-5 text-[#121212]">
                  Discover stories that match your <br /> <br /> imagination.
                </p>
              </div>

              <div className="absolute w-[450px] h-[500px] rounded-2xl p-6 bg-[#F1F4FE] text-center top-[150px] left-[24px]">
                <h2 className="font-[Marion] font-bold text-xl leading-[30px] text-[#121212]">
                  LOGIN
                  <br />
                  <span className="text-sm text-[#949CA9] font-normal">Let's build something great</span>
                </h2>

                <form className="mt-4" onSubmit={handleLogin}>
                  <div className="mb-4">
                    <label className="block mb-1 text-left font-[Marion] font-normal text-sm leading-5 text-[#121212]">
                      Username
                    </label>
                    <input
                      type="text"
                      name="username"
                      placeholder="Enter here..."
                      value={credentials.username}
                      onChange={handleChange}
                      className="w-full p-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-[Gothic A1] font-normal text-base leading-6 text-[#707070]"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block mb-1 text-left font-[Marion] font-normal text-sm leading-5 text-[#121212]">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        name="password"
                        placeholder="Enter password..."
                        value={credentials.password}
                        onChange={handleChange}
                        className="w-full p-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-[Gothic A1] font-normal text-base leading-6 text-[#707070]"
                      />
                      <button
                        type="button"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full p-2 mt-2 text-white rounded-md transition duration-200 bg-[#CB602B] font-[Gothic A1] font-normal text-base leading-6 text-center"
                  >
                    Login
                  </button>
                </form>

                <div className="mt-4 space-y-2">
                  <button className="w-full p-2 bg-white rounded-md flex items-center justify-center hover:bg-gray-50 transition duration-200 font-[Gothic A1] font-normal text-base leading-6 text-[#121212]">
                    <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 mr-2" />
                    Sign up with Google
                  </button>
                  <button className="w-full p-2 bg-white rounded-md flex items-center justify-center hover:bg-gray-50 transition duration-200 font-[Gothic A1] font-normal text-base leading-6 text-[#121212]">
                    <img src="https://www.facebook.com/favicon.ico" alt="Facebook" className="w-5 h-5 mr-2" />
                    Sign up with Facebook
                  </button>
                </div>

                <p className="mt-4 text-center font-[Gothic A1] font-normal text-sm leading-[22px] text-[#121212]">
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-[#4242BE] hover:underline">
                    Register now
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
