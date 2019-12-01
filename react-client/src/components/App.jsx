import React from 'react';
import './App.css';
import Header from './Header';
import convertTextToJS from './utils.js';
import FileReaderContainer from './FileReaderContainer';
import FileUpload from './FileUpload';
import FileContent from './FileContent';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => (
  <div>
    <Header />
    <div className="app-container">
      <Router>
        <Route
          render={props => (
            <FileReaderContainer converter={convertTextToJS}>
              {(data, handleFileUpload, fileName, getLocalFile) => (
                <div className="fileReader">
                  <FileUpload
                    {...props}
                    handleFileUpload={handleFileUpload}
                    fileName={fileName}
                    getLocalFile={getLocalFile}
                  />
                  <FileContent data={data} />
                </div>
              )}
            </FileReaderContainer>
          )}
        ></Route>
      </Router>
    </div>
  </div>
);

export default App;
