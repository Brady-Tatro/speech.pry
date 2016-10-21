import React from 'react';

const Speech = props => {

  return (
    <li className="speech">
      <a href= {"/api/v1/speeches/" + props.id} >{props.title}</a>
    </li>
  );
}

export default Speech;
