import React from 'react'
import type { IMenuCategory, IMenuDish } from './MenuTypes'
import MenuCategory from './MenuCategory'



interface IMenuProps {
    categories: IMenuCategory[]
}

export default function Menu({ menu }: { menu: IMenuProps }) {
  return (
    <div>
        {
            menu.categories.map(c => <MenuCategory key={c.name} name={c.name} image={c.image} dishes={c.dishes} />)
        }
    </div>
  )
}
