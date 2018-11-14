import React, { Component } from 'react';
import './App.css';
import ContainerPosts from "./components/ContainerPosts";

class App extends Component {
  
  render() {
    return (
      <div className="App">

        <ContainerPosts />

      </div>
    );
  }
}

export default App;
