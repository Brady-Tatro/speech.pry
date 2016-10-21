import React from 'react'
import Speech from './Speech'

const MediaList = props => {
  debugger;
  let speeches = props.speeches.map(speech => {
    const { id, title, media } = speech;

    return (
      <Speech
      key={id}
      id={id}
      title={title}
      media={media}
      />
    )
  })
  return (
    <div className="speech-list">
      <ul>
        {speeches}
      </ul>
    </div>
  )
}




export default MediaList;
