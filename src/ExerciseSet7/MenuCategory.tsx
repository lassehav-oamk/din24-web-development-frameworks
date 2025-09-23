import React from 'react'
import type { IMenuDish } from './MenuTypes'
import MenuDish from './MenuDish'

export default function MenuCategory(
    { name, image, dishes } : { name: string, image: string, dishes: IMenuDish[] }
) {
  return (
    <div>
        <h2>{ name }</h2>
        <img src={ image } alt={ name } style={{ width: '200px', height: 'auto' }} />
        <div>
            {
                dishes.map(d => <MenuDish key={d.name} name={d.name} price={d.price} description={d.description} />)
            }
        </div>
    </div>
  )
}
