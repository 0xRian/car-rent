import React, { useState } from 'react';

const ToggleDarkMode = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <><div className={`text-center mx-auto min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
    </div>
    <div className='text-right absolute p-5 top-20 right-0 mt-4 mr-4'><button
        className={`p-2 transition-all bg-${isDarkMode ? 'white' : 'black'} text-${isDarkMode ? 'black' : 'white'} rounded`}
        onClick={toggleDarkMode}
      >
        {isDarkMode ? '☀️' : '🌙'}
      </button></div>
      </>
    
  );
};

export default ToggleDarkMode;