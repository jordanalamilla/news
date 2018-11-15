import React from 'react';
import './style.css'

const Comment = props => {

    return(
        <div className="comment">
            <p className="commenter">{ props.comment.email }:</p>
            <p className="comment-body">{ props.comment.body }</p>
        </div>
    )
}

export default Comment
