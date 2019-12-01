import React from 'react';
import FileInput from './FileInput';

const FileUpload = ({
  handleFileUpload,
  fileName,
  location: { pathname },
  getLocalFile
}) => (
  <div className="fileReader-selectContainer">
    <div className="fileReader-selectTitle">
      {fileName.length ? fileName : 'Select File'}
    </div>
    {pathname === '/' ? (
      <div className="upload-buttons-container">
        <label htmlFor="file-upload" className="custom-file-upload">
          Browse Files
        </label>
        <FileInput handleFileUpload={handleFileUpload} />
        <label className="custom-file-upload" onClick={getLocalFile}>
          Use Mock Data
        </label>
      </div>
    ) : null}
  </div>
);

export default FileUpload;
