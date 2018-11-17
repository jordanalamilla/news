import React, { Component } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ContainerPosts from "./components/ContainerPosts"
import Footer from './components/Footer'

class App extends Component {
  
  render() {

    // window.onscroll = () => {
    //   if( window.scrollY === document.body.scrollHeight ) {
    //     console.log('MATCH');
    //   }
    // }

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
