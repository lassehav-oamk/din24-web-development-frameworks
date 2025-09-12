import React from 'react'
import { useNavigate } from 'react-router'

export default function ViewC({ clickCount , increaseClickCount }: { clickCount: number, increaseClickCount: () => void }) {
  const navigate = useNavigate();

  return (
    <div>
        <h1>ViewC</h1>
        <p>Click count: {clickCount}</p>
        <button onClick={increaseClickCount}>Increase Click Count</button>  
        <button onClick={() => navigate("/")}>Go to ViewA</button>
    </div>
  )
}
