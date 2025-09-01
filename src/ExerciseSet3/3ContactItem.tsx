import React from 'react'

export default function ContactItem(props) {
  return (
    <div style={{ border: '1px solid black'}}>
        <div>{ props.name }</div>
        <div>{ props.address }</div>
    </div>
  )
}
