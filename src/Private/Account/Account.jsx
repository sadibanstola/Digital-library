import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCamera } from 'react-icons/fa';

const Account = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: 'Sadi',
    lastName: 'Banstola',
    email: 'sadi12344@gmail.com',
    contactNumber: '+977983232*****',
    password: '********',
  });
  const [isEdited, setIsEdited] = useState({
  firstName: false,
  lastName: false,
  email: false,
  contactNumber: false,
  password: false,
});

  const [profileImage, setProfileImage] = useState('/sadi.png'); 
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
  const { name, value } = e.target;
  setUser(prev => ({ ...prev, [name]: value }));
  setIsEdited(prev => ({ ...prev, [name]: true }));
};

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImage(event.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-2 w-full">
      
      {/* Welcome Box */}

      <div className="bg-white rounded-lg shadow-md p-6 mb-4 w-full max-w-5xl mx-auto mt-0">
        <button 
        onClick={() => navigate('/')} 
        className=" rounded-full hover:bg-gray-100 transition-colors"
        aria-label="Back to home"
      >
        <FaArrowLeft className="text-gray-600 text-xl font-extralight " />
      </button>
        <div className="flex flex-col items-center">
          <div className='text-3xl text-center mb-2 p-1 font-medium'style={{
          fontFamily: '"Marion", serif',}}>ACCOUNT</div>

          {/* Profile Image */}
<div className="relative mb-4">
  <img 
    src={profileImage} 
    alt="Profile" 
    className="w-24 h-24 rounded-full object-cover border-2 border-gray-200"
  />
  <label className="absolute bottom-2 right-3 flex items-center justify-center  text-white rounded-full p-2 cursor-pointer">
    <FaCamera className="text-white text-sm" />
    <input
      type="file"
      id="profile-upload"
      accept="image/*"
      onChange={handleImageChange}
      className="hidden"
    />
  </label>
</div>
          <h2 className="text-[#121212] text-2xl font-medium">Welcome Back,</h2>
          <h1 className="text-xl font-light text-[#CB602B]">{user.firstName} {user.lastName}</h1>
          <p className="text-gray-500 font-extralight">@Sadi</p>
        </div>
      </div>

      {/* Account Details Box */}
      <div className="bg-white rounded-lg shadow-md p-3 px-20 w-full max-w-5xl mx-auto">
        <h2 className="text-2xl font-medium text-gray-800 mb-6 text-center"style={{
          fontFamily: 'Gothic A1',
        }}>Account Details</h2>

        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-[#CB602B] mb-4"style={{
          fontFamily: '"Marion", serif',}}>
          <div>
            <label className="block text-[#1C1C1C] text-lg font-light mb-1"s>First Name</label>
            <input
  type="text"
  name="firstName"
  value={user.firstName}
  onChange={handleChange}
  className={`w-full px-3 py-2 border border-[#CB602B] rounded-md focus:outline-none focus:ring-2 focus:ring-[#CB602B] ${
    isEdited.firstName ? 'text-black' : 'text-[#CB602BB2] font-extralight'
  }`}/>
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-[#1C1C1C] text-lg font-light mb-1">Last Name</label>
            <input
  type="text"
  name="lastName"
  value={user.lastName}
  onChange={handleChange}
  className={`w-full px-3 py-2 border border-[#CB602B] rounded-md focus:outline-none focus:ring-2 focus:ring-[#CB602B] ${
    isEdited.lastName ? 'text-black' : 'text-[#CB602BB2] font-extralight'
  }`}/>

          </div>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-[#1C1C1C] text-lg font-light mb-1"style={{
          fontFamily: '"Marion", serif',}}>Email</label>
          <input
  type="email"
  name="email"
  value={user.email}
  onChange={handleChange}
  className={`w-full px-3 py-2 border border-[#CB602B] rounded-md focus:outline-none focus:ring-2 focus:ring-[#CB602B] ${
    isEdited.email ? 'text-black' : 'text-[#CB602B] font-extralight'
  }`}
/>
        </div>

        {/* Contact Number */}
        <div className="mb-4">
          <label className="block text-[#1C1C1C] text-lg font-light mb-1"style={{
          fontFamily: '"Marion", serif',}}>Contact Number</label>
          <input
  type="tel"
  name="contactNumber"
  value={user.contactNumber}
  onChange={handleChange}
  className={`w-full px-3 py-2 border border-[#CB602B] rounded-md focus:outline-none focus:ring-2 focus:ring-[#CB602B] ${
    isEdited.contactNumber ? 'text-black' : 'text-[#CB602BB2] font-extralight'
  }`}
/>
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-[#1C1C1C] text-lg font-light mb-1"style={{
          fontFamily: '"Marion", serif',}}>Password</label>
          <input
  type="password"
  name="password"
  value={user.password}
  onChange={handleChange}
  className={`w-full px-3 py-2 border border-[#CB602B] rounded-md focus:outline-none focus:ring-2 focus:ring-[#CB602B] ${
    isEdited.password ? 'text-black' : 'text-[#CB602BB2] font-extralight'
  }`}
/>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="bg-green-100 border border-[#CB602B] text-green-700 px-4 py-3 rounded mb-4">
            Your information has been saved successfully!
          </div>
        )}

        {/* Buttons */}
        <div className="flex justify-evenly space-x-3">
          <button 
            className="px-6 py-2 bg-[white] border border-[#CB602B] text-[#CB602B] items-center rounded-md hover:bg-[#f4ceba] transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={handleSave}
            className="px-6 py-2 bg-[#CB602B] text-white rounded-md hover:bg-[#B75627] transition-colors"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;