import React, { Component } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ContainerPosts from "./components/ContainerPosts"
import Footer from './components/Footer'

class App extends Component {
  
  render() {

    return (
      <div className="App">

        <NavBar />
        <ContainerPosts />
        <Footer />

      </div>
    );
  }
}

export default App;
