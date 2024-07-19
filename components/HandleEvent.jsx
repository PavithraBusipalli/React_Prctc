import React from 'react'
import AlertButton from './AlertButton'

function HandleEvent() {
  return (
    <div>
      <AlertButton msg="playing">Play Movie</AlertButton>
      <AlertButton msg="uploading">Upload Img</AlertButton>
    </div>
  )
}

export default HandleEvent
