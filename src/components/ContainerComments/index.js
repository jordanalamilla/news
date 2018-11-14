import React, { Component } from 'react'
import Comment from '../Comment'

export class index extends Component {

    constructor( props ) {
        super( props )
        this.state = {
            postID : props.post.id,
            comments : null,
            commentCount : 0,
            showComments : false
        }
    }

    componentDidMount() {

        const { postID } = this.state;

        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${ postID }`)
            .then(response => response.json())
            .then(comments => this.setState({ comments, commentCount : comments.length }) );
    }

  render() {

    const toggleComments = () => {
        
        const { showComments } = this.state;

        showComments ? 
            this.setState({ showComments : false })
            :
            this.setState({ showComments : true });
    }

    const { comments } = this.state;
    const { showComments } = this.state;
    const { commentCount } = this.state;

    return (

      <div>
            <h3>{ commentCount } comments</h3>

            <button onClick={ toggleComments }>
                { showComments ? 'Hide' : 'Show' } Comments
            </button>

            {
                comments &&
                showComments &&
                comments.map(comment => {
                    return <Comment key={ comment.id } comment={ comment } />
                })
            }
      </div>
    )
  }
}

export default index
