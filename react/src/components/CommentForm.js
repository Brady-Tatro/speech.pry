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
        <div className ="field">
        <input
        type="hidden"
        defaultValue={props.speechId}

        />
        </div>
      <div className="submit">
        <input onClick={props.handleClick} type="submit" defaultValue="Upvote" />
      </div>
      </form>
  )
}

export default CommentForm;
