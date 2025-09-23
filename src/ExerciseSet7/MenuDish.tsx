import React from 'react'

export default function MenuDish({ name, price, description } : { name: string, price: number, description: string }) {
  return (
    <div style={{ border: '1px solid black', margin: '5px', padding: '5px' }}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div>{name}</div>
            <div>{price}</div>
        </div>
        <div>
            <i>{description}</i>
        </div>
    </div>
  )
}
