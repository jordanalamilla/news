import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ContainerPosts from '../ContainerPosts'
import ContainerPost from '../ContainerPost'

export class index extends Component {
  render() {
    return (

        <Router>

          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
              </ul>
            </nav>

            <Route path="/" exact component={ ContainerPosts } />
            <Route path="/post/:id" component={ ContainerPost } />
            
          </div>
        </Router>
    )
  }
}

export default index
