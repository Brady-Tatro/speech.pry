import React from 'react'



const VoteGraph = props => {

  return (
    <div>
      {props.comments.map((comment) => (
        <li>{comment.time},{comment.comment}</li>
      ))}
    </div>
  )
}






export default VoteGraph;
