import React from 'react'

export default function E11User(
  { name, onUserClick }:
  { name: string, onUserClick: (nameOfTheClickedUser: string) => void }) {
  return (
    <div 
      onClick={ () => onUserClick(name) }
      style={{ border: '1px solid gray', margin: '5px', padding: '5px'  }}>
      { name }
    </div>
  )
}
