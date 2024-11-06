import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Closed.css';

const Closed = () => {
  const [closingText, setClosingText] = useState('');
  const navigate = useNavigate();

  const suggestions = [
    "Sincerely,\n[Your First Name] [Your Last Name]",
    "I look forward to speaking with you soon.\n\nBest regards,\n[Your First Name] [Your Last Name]",
    "I welcome the opportunity to contribute my skills to your team.\n\nWith regards,\n[Your First Name] [Your Last Name]"
  ];

  const handleSuggestionClick = (text) => {
    const customizedText = text.replace('[Your First Name]', 'XYZ').replace('[Your Last Name]', 'XYZ');
    setClosingText(customizedText);
  };

  const handleClear = () => {
    setClosingText('');
  };

  const handleSave = async () => {
    try {
      const response = await fetch('/api/saveClosingText', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ closingText }),
      });
      if (response.ok) {
        alert('Closing text saved successfully!');
      } else {
        alert('Failed to save closing text.');
      }
    } catch (error) {
      console.error('Error saving closing text:', error);
    }
  };

  const handleNext = () => {
    navigate('/tempmanager'); // Replace '/next-page' with the actual route you want to navigate to
  };

  return (
    <div className="closed-container">
      <div className="suggestions-container">
        <h3>Ready-to-use Suggestions</h3>
        <ul className="suggestions-list">
          {suggestions.map((suggestion, index) => (
            <li 
              key={index} 
              onClick={() => handleSuggestionClick(suggestion)} 
              className="suggestion-item"
            >
              {suggestion.split('\n')[0]}
            </li>
          ))}
        </ul>
      </div>

      <div className="selected-closing-text">
        <h2>Closing Text</h2>
        <textarea
          value={closingText}
          onChange={(e) => setClosingText(e.target.value)}
          placeholder="Write your closing text here..."
          rows="5"
        />
        <div className="button-container">
          <button onClick={handleClear} className="clear-button">Clear</button>
          <button onClick={handleSave} className="save-button-clo">Save</button>
          <button onClick={handleNext} className="next-button">Next</button>
        </div>
      </div>
    </div>
  );
}

export default Closed;
