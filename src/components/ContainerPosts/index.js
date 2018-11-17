import React, { Component } from 'react'
import './style.css'
import Post from '../Post'

export class index extends Component {

    constructor( props ) {
        super( props )

        this.state = {
            posts : null,
            height : 0
        }
    }

    componentDidMount() {

        // GET ALL POSTS
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then( response => response.json() )
            .then( posts => this.setState({ posts }) );

        
    }

  render() {

    const loadFivePosts = () => {
        console.log(window.scrollY);
    }

    const { posts } = this.state;

    return (

      <div id="container-posts">
            {
                posts &&
                posts.map(post => {
                    return <Post key={ post.id } post={ post } />
                })
            }
      </div>
    )
  }
}

export default index
