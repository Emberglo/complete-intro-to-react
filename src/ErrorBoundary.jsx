import { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false };

  // getDerivedStateFromError and componentDidCatch have no equivilents in function components, so we have to use a class component

  // static makes it so react has to call the method on the class rather than on an instance of the class - es6 class thing
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // this would be a great place to send the error to an external error tracking software - ex: trackJS, newRelic, etc
    console.error("ErrorBoundary component caught an error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.errorComponent;
    }

    // if there was no error we want our data to seemlessly flow through this component
    return this.props.children;
  }
}

export default ErrorBoundary;
