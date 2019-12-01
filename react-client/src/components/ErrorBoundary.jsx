import React from 'react';
import { Redirect } from 'react-router-dom';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('An error has occured, make sure you the file being uploaded is in the correct format.')
  }

  render() {
    if (this.state.hasError) {
      return <Redirect to="/" />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;