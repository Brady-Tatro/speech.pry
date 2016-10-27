import React from 'react'

const CommentForm = props => {
  return (
    <form onSubmit={props.handleFormSubmit}>
    <div className="hidden">
    <input
      type="hidden"
      value={props.time}
      />
      </div>
      <div className="field">
      <input
        type="hidden"
        value={props.comment}
        />
      </div>
      <div className="submit">
        <input onClick={props.handleClick} type="submit" className="button success" id="buttons" defaultValue="Upvote" />
      </div>
      </form>
  )
}

export default CommentForm;
