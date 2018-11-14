import React, { Component } from 'react'
import Post from '../Post'

export class index extends Component {

    constructor( props ) {
        super( props )
        this.state = {
            posts : null
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => this.setState({ posts }) )
    }

  render() {

    const { posts } = this.state;
    console.log(posts);

    return (

      <div>
            <h1>Posts</h1>
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
