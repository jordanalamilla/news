import React, { Component } from 'react'
import './style.css'
import ContainerComments from '../ContainerComments'

export class index extends Component {

    constructor( props ) {
        super( props )

        this.state = {
            post : props.post,
            author : 'Unknown',
            comments : null
        }
    }

    componentDidMount() {

        // USER THE USER ID TO GET AUTHOR NAME
        const userID = this.state.post.userId;

        fetch(`https://jsonplaceholder.typicode.com/users/${ userID }`)
            .then(response => response.json())
            .then(author => this.setState({ author : author.name }) );
    }

  render() {

    const { post }      = this.state;
    const { author }    = this.state;

    return (
        <div className="post shadow">
            <h2>{ post.title }</h2>
            <p className="author">By { author }</p>
            <p className="body">{ post.body }</p>
            <ContainerComments post={ post } />
        </div>
    )
  }
}

export default index