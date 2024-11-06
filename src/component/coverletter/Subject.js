import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Subject.css';

const Subject = ({ onBack }) => {
  const [subjectName, setSubjectName] = useState('');
  const [title, setTitle] = useState('');
  const [lastName, setLastName] = useState('');
  const [openingText, setOpeningText] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleSubjectChange = (e) => setSubjectName(e.target.value);
  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleOpeningTextChange = (e) => setOpeningText(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const subjectData = {
      subjectName,
      title,
      lastName,
      openingText,
    };

    try {
      const response = await fetch('YOUR_API_URL_HERE', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(subjectData),
      });

      if (response.ok) {
        console.log('Subject information submitted successfully');
      } else {
        console.error('Failed to submit subject information');
      }
    } catch (error) {
      console.error('Error submitting subject information:', error);
    }
  };

  const handleNext = () => {
    navigate('/opening-page'); // Replace '/next-page' with your desired path
  };

  return (
    <div className="subject-container">
      <h2>Enter Subject Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="subjectName">Subject Name</label>
          <input
            type="text"
            id="subjectName"
            name="subjectName"
            value={subjectName}
            onChange={handleSubjectChange}
            placeholder="e.g., Mathematics"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="title">Title</label>
          <select
            id="title"
            name="title"
            value={title}
            onChange={handleTitleChange}
            required
          >
            <option value="">Select Title</option>
            <option value="Ms.">Ms.</option>
            <option value="Mr.">Mr.</option>
            <option value="Dr.">Dr.</option>
            <option value="Prof.">Prof.</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={handleLastNameChange}
            placeholder="Smith"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="openingText">Opening Text</label>
          <textarea
            id="openingText"
            name="openingText"
            value={openingText}
            onChange={handleOpeningTextChange}
            placeholder="I hope this message finds you well."
            required
          />
        </div>

        <div className="form-buttons">
          <button type="button" onClick={onBack} className="back-button">Clear</button>
          <button type="submit" className="submit-button">Submit</button>
          <button type="button" onClick={handleNext} className="next-button">Next</button>
        </div>
      </form>
    </div>
  );
};

export default Subject;
