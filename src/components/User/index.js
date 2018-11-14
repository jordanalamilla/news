import React, { Component } from 'react'

export class User extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            userID : props.userID
        }
    }

    componentDidMount() {

        const { userID } = this.state;

        fetch(`https://jsonplaceholder.typicode.com/users/${ userID }`)
            .then(response => response.json())
            .then(json => console.log(json))
    }

  render() {
    return (
      <div>
        <h1>User</h1>
      </div>
    )
  }
}

export default User
