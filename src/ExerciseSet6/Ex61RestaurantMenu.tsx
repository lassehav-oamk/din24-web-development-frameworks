import { createBrowserRouter, Outlet, NavLink } from 'react-router'
import { RouterProvider } from "react-router/dom";

import MainCourses from './Ex61Components/MainCourses'
import Drinks from './Ex61Components/Drinks'

export default function Ex61RestaurantMenu() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: (<div>

                    <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
                        <NavLink to="/menu">Main courses</NavLink>
                        <NavLink to="/drinks">Drinks</NavLink>
                    </div>

                    <Outlet />
                </div>),
            children: [
                {
                    path: "/menu",
                    element: <MainCourses />
                },
                {
                    path: "/drinks",
                    element: <Drinks />
                }
            ]
        },
        {
            path: '/info',
            element: <div>This is some info</div>
        }
    
        ]
    );



  return (
    <div>
        <div>
            <h1>Restaurant Menu exercise</h1>
            <p>In this exercise your goal is to create a menu structure, which allows the user
            to browse the foods offered by the restaurant. The restaurant owner wants to separate
            the menu into two categories. First should be main courses and second should be drinks.</p>
            <p>Each category should have at least 3 items. Each item should have a name, a description
            and a price. The user should be able to click on a category and see the items in that category.</p>
        </div>
        <RouterProvider router={router} />
    </div>
  )
}
