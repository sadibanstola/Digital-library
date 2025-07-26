import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Mood = () => {
  const [selectedMoods, setSelectedMoods] = useState(['Mysterious']);
  const navigate = useNavigate();

  const moods = [
    'Fantasy', 'Hopeful', 'Thrilling', 'Calm',
    'Adventure', 'Romantic', 'Mysterious', 'Inspiration',
    'Emotional'
  ];

  const handleMoodChange = (mood) => {
    setSelectedMoods((prev) =>
      prev.includes(mood)
        ? prev.filter((m) => m !== mood)
        : [...prev, mood].slice(0, 3)
    );
  };

  const handleContinue = () => {
    navigate('/home');
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="text-center p-4 sm:p-8 w-full max-w-[800px]" style={{
          fontFamily: 'Gothic A1',
        }}>
        <img
          src="/Mood.png"
          alt="People with thought bubbles"
          className="mx-auto mb-6 w-[200px] sm:w-[300px]"
        />
        <h1 className="text-2xl sm:text-4xl font-medium mb-2 text-[#000000]">What kind of stories are you in the mood for?</h1>
        <p className="text-[#000000E5] mb-6 text-base sm:text-[20px]">Choose up to three emotions that describe how you want to feel while reading.</p>
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
          {moods.map((mood) => (
            <label
              key={mood}
              className="flex items-center p-2 rounded-md cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedMoods.includes(mood)}
                onChange={() => handleMoodChange(mood)}
                className="hidden"
              />
              <span
                className={`w-5 h-5 mr-2 flex-shrink-0 rounded border-2 flex items-center justify-center ${
                  selectedMoods.includes(mood) ? 'border-[#5352ED] bg-[#5352ED]' : 'border-[#5352ED]'
                }`}
              >
                {selectedMoods.includes(mood) && (
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                )}
              </span>
              <span className="text-lg sm:text-[22px] font-medium text-gray-700">{mood}</span>
            </label>
          ))}
        </div>
        <button
          onClick={handleContinue}
          className="px-6 py-3 bg-[#5352ED] text-white rounded-md hover:bg-[#4342D5] transition-colors duration-200 w-full sm:w-auto"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Mood;