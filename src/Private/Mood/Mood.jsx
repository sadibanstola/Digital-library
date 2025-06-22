import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Mood = () => {
  const [selectedMoods, setSelectedMoods] = useState(['Mysterious']); // Default to 'Mysterious' as in image
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
        : [...prev, mood].slice(0, 3) // Limit to 3 selections
    );
  };

  const handleContinue = () => {
    // TODO: Use selectedMoods for recommendation logic
    navigate('/my-library'); // Redirect to library after selection
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-6 bg-white rounded-lg shadow-md">
        <img
          src="https://via.placeholder.com/200" // Replace with your image URL
          alt="People with thought bubbles"
          className="mx-auto mb-6"
          style={{ width: '200px' }}
        />
        <h1 className="text-2xl font-semibold mb-2">What kind of stories are you in the mood for?</h1>
        <p className="text-gray-600 mb-6">Choose a few emotions that describe how you want to feel while reading.</p>
        <div className="grid grid-cols-3 gap-4 mb-6">
          {moods.map((mood) => (
            <label key={mood} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedMoods.includes(mood)}
                onChange={() => handleMoodChange(mood)}
                className="mr-2"
              />
              <span className="text-gray-700">{mood}</span>
            </label>
          ))}
        </div>
        <button
          onClick={handleContinue}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Mood;