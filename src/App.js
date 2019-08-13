import React, { Component } from 'react';
import fs from 'fs'

export default class App extends Component {
  render() {
    const exists = fs.existsSync('src/index.js')
    console.log('exists', exists)
    
    return (
      <h1>Hello, q world.</h1>
    );
  }
}
