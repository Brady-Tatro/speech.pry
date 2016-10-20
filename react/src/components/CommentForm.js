import React from 'react'

const CommentForm = props => {
  return (
    <form onSubmit={props.handleFormSubmit}>
    <div className="field">
    <input
      type="text"
      value={props.time}
      name='time'
      />
      </div>
      <div className="field">
      <input
        type="text"
        value={props.commentBody}
        name='comment'
        />
        </div>
  )
}

export default CommentForm;
