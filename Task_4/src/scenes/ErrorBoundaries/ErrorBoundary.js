import React, { Component } from 'react';
import { render } from "react-dom";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      console.error("has error!");
      // You can render any custom fallback UI
      return <h1>{this.props.text}</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;