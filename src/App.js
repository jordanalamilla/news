import React, { Component } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ContainerPosts from "./components/ContainerPosts"

class App extends Component {
  
  render() {
    return (
      <div className="App">

        <NavBar />
        <ContainerPosts />

      </div>
    );
  }
}

export default App;
