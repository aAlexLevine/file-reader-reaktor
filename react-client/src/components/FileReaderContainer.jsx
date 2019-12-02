import React from 'react';

class FileReaderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileData: [],
      fileName: ''
    };
    this.handleFileUpload = this.handleFileUpload.bind(this);
    this.getLocalFile = this.getLocalFile.bind(this);
  }

  handleFileUpload(event, mockDataBlob) {
    let file, fileName;
    if (!event) {
      file = mockDataBlob;
      fileName = 'status.real';
    } else {
      file = event.target.files[0];
      fileName = file.name;
    }

    const { converter } = this.props;
    const reader = new FileReader();
    reader.readAsText(file, 'UTF-8');
    reader.onload = evt => {
      const list = converter(evt.target.result);
      this.setState({
        fileData: list,
        fileName: fileName
      });
    };
    reader.onerror = evt => {
      console.log('error reading file');
    };
  }

  getLocalFile() {
    fetch('/status.real')
      .then(mockData => mockData.blob())
      .then(blob => this.handleFileUpload(null, blob));
  }

  render() {
    const { fileData, fileName } = this.state;
    return this.props.children(
      fileData,
      this.handleFileUpload,
      fileName,
      this.getLocalFile
    );
  }
}

export default FileReaderContainer;
