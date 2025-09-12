import React from 'react'
import { NavLink } from 'react-router'

export default function ViewB() {
  return (
    <div>
        <h1>ViewB</h1>
        <NavLink to="/">Back to ViewA</NavLink>
    </div>
  )
}
