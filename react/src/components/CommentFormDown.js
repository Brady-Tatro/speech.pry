import React from 'react'

const CommentFormDown = props => {
  return (
    <form onSubmit={props.handleFormSubmitdown}>
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
        <input onClick={props.handleClick} type="submit" defaultValue="downvote" />
      </div>
      </form>
  )
}

export default CommentFormDown;
