import React from 'react';
import './FileInput.css'

const FileInput = ({ handleFileUpload }) => (
  <input type="file" id="file-upload" onChange={event => handleFileUpload(event)} />
);
export default FileInput;
