// YourComponent.js

import React, { useState, useEffect } from 'react';
import './styles.css'; // Import the CSS file

function YourComponent() {
  // Set initial state for your credentials and line height
  const [credentials, setCredentials] = useState('');
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    // Simulate a typing animation by updating the state over time
    const name = "Karolczaq";
    let index = 0;

    const intervalId = setInterval(() => {
      setCredentials((prevCredentials) => {
        if (index < name.length) {
          const currentCredentials = "\u00A9 " + name.substring(0, index + 1);

          // Dynamically calculate line height based on text font size
          const fontSize = 16; // Adjust the font size as needed
          setLineHeight(((index + 1) / name.length) * fontSize * 1.5); // Adjust the multiplier for proper scaling

          return currentCredentials;
        } else {
          clearInterval(intervalId);
          return prevCredentials;
        }
      });

      index++;
    }, 100); // Adjust the interval for the typing speed

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="island">
      <div className="island-content">
        {/* Your island content goes here */}
        <h1>Hawajska</h1>
        
        {/* Thin gray belt */}
        <div className="thin-belt"></div>

        {/* Footer */}
        <div className="footer">
          <p>
            {credentials}
            <span className="flicker-line" style={{ height: `${lineHeight}px` }}></span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default YourComponent;
