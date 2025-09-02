import React from 'react'

//export default function ContactItem(props) {
export default function ContactItem({ name, address }) {

  return (
    <div style={{ border: '1px solid black'}}>
        <div>{ name }</div>
        <div>{ address }</div>
    </div>
  )
}
