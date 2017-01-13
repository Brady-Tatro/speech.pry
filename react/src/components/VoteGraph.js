import React from 'react';
import { Chart } from 'react-google-charts';


const VoteGraph = props => {
  let c = props.comments.map((comment)=> [comment.time, comment.comment]);
  return (
    <div>
    {c}
    </div>
  );
};






export default VoteGraph;
