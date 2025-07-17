import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import backgroundImage from '/picart2.png';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Dummy login: no validation, just log in
    await login({ username: credentials.username || 'guest' }); 
    navigate('/mood', { replace: true });
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="absolute w-[525px] h-[710px] rounded-[12px] p-6 bg-[#FFFFFF] shadow-md"
        style={{ top: '70px', left: '815px' }}
      >
        <div className="mb-6 text-center">
          <h1
            style={{
              fontFamily: 'Marion',
              fontWeight: 400,
              fontSize: '28px',
              lineHeight: '28px',
              letterSpacing: '0',
              color: '#121212',
              top: '20px',
            }}
          >
            Digital Library of Dreams
          </h1>
          <p
            style={{
              fontFamily: 'Gothic A1',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '100%',
              letterSpacing: '0',
              top: '30px',
              width: '361px',
              left: '30px',
            }}
          >
            Discover stories that match your imagination.
          </p>
        </div>

        <div
          className="bg-[#F1F4FE] w-[477px] h-[500px] rounded-[16px] p-[24px] text-center"
          style={{ top: '150px', left: '24px', gap: '15px', position: 'absolute' }}
        >
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
            LOGIN
          </h2>
          <form className="mt-4" onSubmit={handleLogin}>
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
                name="username"
                placeholder="Enter here..."
                value={credentials.username}
                onChange={handleChange}
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
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password..."
                  value={credentials.password}
                  onChange={handleChange}
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
                <button
                  type="button"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" // Fixed 'OCR' typo
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
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
              Login
            </button>
          </form>

          <div className="mt-4 space-y-2">
            <button
              className="w-full p-2 bg-white border-[#707070] rounded-md flex items-center justify-center hover:bg-gray-50 transition duration-200"
              style={{
                fontFamily: 'Gothic A1',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '24px',
                letterSpacing: '0',
                color: '#121212',
                background: '#FFFFFF',
              }}
            >
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 mr-2" />
              Sign up with Google
            </button>
            <button
              className="w-full p-2 bg-white border-[#707070] rounded-md flex items-center justify-center hover:bg-gray-50 transition duration-200"
              style={{
                fontFamily: 'Gothic A1',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '24px',
                letterSpacing: '0',
                color: '#121212',
                background: '#FFFFFF',
              }}
            >
              <img src="https://www.facebook.com/favicon.ico" alt="Facebook" className="w-5 h-5 mr-2" />
              Sign up with Facebook
            </button>
          </div>
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
            Don't have an account?{' '}
            <Link to="/signup" className="text-[#4242BE] hover:underline">
              Register now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;