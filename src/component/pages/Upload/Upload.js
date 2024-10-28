// src/components/Upload.js
import React, { useState } from 'react';
import axios from 'axios';
import './Upload.css'; 

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setUploadStatus('');
  };

  // Handle file upload with POST request
  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        setUploadStatus('Upload successful!');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      setUploadStatus('Upload failed. Please try again.');
    }
  };

  // Handle file change (resetting the selection)
  const handleChangeFile = () => {
    setSelectedFile(null);
    setUploadStatus('');
    document.getElementById('fileInput').value = ''; // Reset file input
  };

  return (
    <div className="container">
      <h1>Upload Your Resume</h1>
      <div className='upload-resume-container'>
        <input
          type="file"
          id="fileInput"
          accept=".pdf, .doc, .docx"
          onChange={handleFileChange}
          className="file-input"
        />
       
        <button onClick={handleChangeFile} className='upload-change-btn'>
        Change
      </button>
      </div>

      {uploadStatus && <p className="status-message">{uploadStatus}</p>}

      <button onClick={handleUpload} className="upload-button">
          Continue
        </button>
    </div>
  );
};

export default Upload;
