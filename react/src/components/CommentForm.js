import React from 'react'

const CommentForm = props => {
  return (
    <form onSubmit={props.handleFormSubmit}>
    <div className="field">
    <input
      type="hidden"
      value={props.time}
      name='time'
      onChange={props.handleChange}
      />
      </div>
      <div className="field">
      <input
        type="hidden"
        value={props.commentBody}
        name='comment'
        />
        </div>
      <div className="submit">
        <input onClick={props.handleClick} type="submit" value="stuff" />
      </div>
      </form>
  )
}

export default CommentForm;
