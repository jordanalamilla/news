import React, { Component } from 'react'
import Post from '../Post'
import ContainerComments from '../ContainerComments'

export class index extends Component {

    constructor( props ) {
        super( props );

        this.state = {
            postID : props.match.params.id,
            post : null
        }
    }

    componentDidMount() {

      // USE THE POST ID TO GET POST
      const {postID} = this.state;

      fetch(`https://jsonplaceholder.typicode.com/posts/${ postID }`)
        .then(response => response.json())
        .then(post => this.setState({ post : post }) );
    }

  render() {

    const { post } = this.state;

    return (
      <div>
        <Post post={ post } />
        <ContainerComments post={ post } />
      </div>
    )
  }
}

export default index
