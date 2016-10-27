import React from 'react'
import Vis, { DataSet } from 'vis'

const VoteGraph = props => {

let x = props.comments.map((comment) => (comment.time))
let y = props.comments.map((comment) => (comment.comment))

  return (
    <div>
    {x}
    </div>
  )
}






export default VoteGraph;
