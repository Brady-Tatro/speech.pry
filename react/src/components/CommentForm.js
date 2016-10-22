import React from 'react'

const CommentForm = props => {
  return (
    <form onSubmit={props.handleFormSubmit}>
    <div className="field">
    <input
      type="text"
      value={props.time}
      name='time'
      onChange={props.handleChange}
      />
      </div>
      <div className="field">
      <input
        type="text"
        value={props.comment}
        name='comment'
        onChange={props.handleChange}
        />
        </div>
      <div className="submit">
        <input onClick={props.handleClick} type="submit" value="Submit Comment" />
      </div>
      </form>
  )
}

export default CommentForm;
