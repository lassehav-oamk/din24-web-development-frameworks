import React from 'react'
import E11User from './E11User'

export default function E11UserList(
    { users, onUserClick } : 
    { users: string[], onUserClick: (nameOfTheClickedUser: string) => void }) {
  return (
    <div>
        { users.map(user => <E11User name={user} onUserClick={onUserClick}/>) }
    </div>
  )
}
