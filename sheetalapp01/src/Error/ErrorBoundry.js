import React, { Component } from 'react'

export default class ErrorBoundry extends Component {
    constructor(props) {  
        super(props);  
        this.state = { hasError: false };  
      }  
      static getDerivedStateFromError(error) {  
        return { hasError: true };  
      }  
      componentDidCatch(error, info) {  
        console.log(error, info);  
      }  
  render() {
    if (this.state.hasError) {  
        return (  
        <div>Something is wrong.</div>
    );  
    }  
    return this.props.children;   
  }  
}  
