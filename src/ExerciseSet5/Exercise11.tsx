import React, { useState } from 'react'
import E11UserList from './components/E11UserList';


export default function Exercise11() {

  const users = [
    'John Doe',
    'Jane Smith',
    'Alice Johnson',
    'Bob Brown',
    'Charlie Davis',
    'Diana Evans',
    'Frank Green',
    'Grace Harris',
    'Henry Irving'
  ]

  const [team, setTeam] = useState<string[]>([])

  function clickOnUserList(nameOfTheClickedUser: string) {
    //team.push(nameOfTheClickedUser);
    if( team.includes(nameOfTheClickedUser) == false ) {
      const newTeam = team.map(n => n) // creates a copy of the array
      newTeam.push(nameOfTheClickedUser)
      setTeam(newTeam)
    }
  }

  function clickOnUserInTeamToRemoveUser(nameOfTheClickedUser: string) {
    const newTeam = team.filter( n => n !== nameOfTheClickedUser )
    setTeam(newTeam)
  }

  return (
    <div>
      <h2>Exercise 11 - Team list</h2>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
        <div style={{ border: '1px solid black', padding: '10px' }}>
          <h3>User List</h3>
          <E11UserList users={ users } onUserClick={ clickOnUserList }/>
        </div>
        <div style={{ border: '1px solid black', padding: '10px' }}>
          <h3>Team List</h3>
          <E11UserList users={ team } onUserClick={ clickOnUserInTeamToRemoveUser }/>
        </div>
      </div>
    </div>
  )
}
