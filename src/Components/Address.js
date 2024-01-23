import React, { useState, useEffect } from 'react';

export default function App() {
 
  const [backgroundColor, setBackgroundColor] = useState('#ffcc00'); // Initial color

  useEffect(() => {
    // Change background color every 2 seconds
    const intervalId = setInterval(() => {
      setBackgroundColor(generateRandomColor());
    }, 2000);

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  const generateRandomColor = () => {
    // Simple function to generate a random hex color
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center', backgroundColor, padding: '10px' }}>
        1st Branch Delhi Road Opp Power House,Rohtak
        
      </h2>
      <h2 style={{ textAlign: 'center', backgroundColor, padding: '10px' }}>
        
        2nd Branch Delhi Bye Pass,Rohtak
      </h2>
      
      
    </div>
  );
}


