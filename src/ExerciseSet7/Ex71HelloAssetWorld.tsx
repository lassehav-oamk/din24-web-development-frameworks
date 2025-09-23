import React from 'react'
import image71 from '../assets/image71.png'
import rsvg from '../assets/react.svg'

export default function Ex71HelloAssetWorld() {

    

  return (
    <div>
        <h1>Hello Asset World</h1>
        <img src={ image71 } alt="World map"/>
        <img src={ rsvg } alt="React logo"/>
    </div>
  )
}
