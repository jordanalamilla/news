import React from 'react';

const Comment = props => {

    return <p><strong>{ props.comment.email }:</strong> { props.comment.body }</p>
}

export default Comment
