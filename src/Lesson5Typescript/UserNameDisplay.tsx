import React from 'react'

export default function UserNameDisplay(
    { firstName, lastName, age } : { firstName: string, lastName: string, age: number }
) {
  return (
    <div>
        <div>First Name: { firstName }</div>
        <div>Last Name: { lastName }</div>
        <div>Age: { age }</div>
    </div>
  )
}
