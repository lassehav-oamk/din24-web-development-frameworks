import React from 'react'

import burgerImage from '../assets/burger.jpg'
import pastaImage from '../assets/pasta.jpg'
import chickenImage from '../assets/chicken.jpg'
import Menu from './Menu'

export default function Ex72MenuExercise() {

    const menu = {
        categories: [
            {
                name: 'Hamburgers',
                image: burgerImage,
                dishes: [
                    {
                        name: 'Classic Hamburger',
                        price: 5.99,
                        description: 'A classic hamburger with lettuce, tomato, and cheese.'
                    },
                    {
                        name: 'Bacon Cheeseburger',
                        price: 7.99,
                        description: 'A juicy burger topped with crispy bacon and melted cheese.'
                    },
                    {
                        name: 'Veggie Burger',
                        price: 6.99,
                        description: 'A delicious veggie burger made with black beans and spices.'
                    },
                    {
                        name: 'Mushroom Swiss Burger',
                        price: 8.49,
                        description: 'A savory burger topped with sautéed mushrooms and Swiss cheese.'
                    }
                ]
            },
            {
                name: 'Pastas',
                image: pastaImage,
                dishes: [
                    {
                        name: 'Spaghetti Carbonara',
                        price: 8.99,
                        description: 'Spaghetti with creamy carbonara sauce, pancetta, and Parmesan cheese.'
                    },
                    {
                        name: 'Penne Arrabbiata',
                        price: 7.99,
                        description: 'Penne pasta in a spicy tomato sauce with garlic and red chili flakes.'
                    }
                ]
            },
            {
                name: 'Chicken Dishes',
                image: chickenImage,
                dishes: [
                    {
                        name: 'Grilled Chicken Breast',
                        price: 9.99,
                        description: 'Juicy grilled chicken breast served with steamed vegetables.'
                    },
                    {
                        name: 'Chicken Alfredo',
                        price: 10.99,
                        description: 'Fettuccine pasta in a creamy Alfredo sauce with grilled chicken.'
                    }
                ]
            }
        ]
    }

  return (
    <div>
        <h1>Ex72 Menu Exercise</h1>
        <Menu menu={menu} />
    </div>
  )
}
