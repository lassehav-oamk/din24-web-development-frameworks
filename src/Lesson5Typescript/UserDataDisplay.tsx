import React from 'react'

interface UserData {
    firstName: string,
    lastName: string,
    age: number
}

interface UserDataDisplayProps {
    userData : UserData
}

//export default function UserDataDisplay({ userData } : { userData : { firstName: string, lastName: string, age: number } }) {
export default function UserDataDisplay({ userData } : UserDataDisplayProps) {
  return (
    <div>
        <div>User age: { userData.age }</div>
    </div>
  )
}
