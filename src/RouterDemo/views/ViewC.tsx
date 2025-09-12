import React from 'react'
import { useNavigate } from 'react-router'

export default function ViewC() {
  const navigate = useNavigate();

  return (
    <div>
        <h1>ViewC</h1>
        <button onClick={() => navigate("/")}>Go to ViewA</button>
    </div>
  )
}
