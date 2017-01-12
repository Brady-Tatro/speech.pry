import React from 'react';
import { Chart } from 'react-google-charts';


const VoteGraph = props => {
  let x = props.comments.map((comment) => (comment.time))
  let y = props.comments.map((comment) => (comment.comment))
  let c = x.map(function (e, i) {
    return [e, y[i]];
});
  return (
    <div>
    {c}
    </div>
  );
};






export default VoteGraph;
