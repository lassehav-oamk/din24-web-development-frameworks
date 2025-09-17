import { createBrowserRouter, Outlet, NavLink } from "react-router";
import { RouterProvider } from "react-router/dom";
import MenuListing from './MenuListing'
import type { MenuCategoryDataType } from './MenuCategoryDataType';


export default function LessonE61() {

    const mainCourseData : MenuCategoryDataType[] = [
        { name: 'Pasta Carbonara', price: 13 },
        { name: 'Hamburger meal with fries', price: 14 },
        { name: 'Chicken Nuggets', price: 12 }
    ];

    const drinksData : MenuCategoryDataType[] = [
        { name: 'Coca Cola', price: 3 },
        { name: 'Orange Juice', price: 4 },
        { name: 'Water', price: 2 }
    ];

    const dessertsData : MenuCategoryDataType[] = [
        { name: 'Ice Cream', price: 5 },
        { name: 'Cheesecake', price: 6 },
        { name: 'Fruit Salad', price: 4 }
    ];

    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                <div>
                    <h1>Restaurant Menu</h1>
                    <p>Restaurant offers nice food to eat and refreshing drinks to enjoy. </p>
                    <p>Choose a menu category below</p>
                    <div style={{display: 'flex', justifyContent: 'space-around', fontWeight: 'bold', marginTop: 20}}>
                        <NavLink to='/'><div>Drinks</div></NavLink>
                        <NavLink to='/main-courses'><div>Main Courses</div></NavLink>
                        <NavLink to='/desserts'><div>Desserts</div></NavLink>
                    </div>
                    <Outlet />
                </div>
            ),
            children: [
                {
                    path: '/',
                    element: <MenuListing menuCategoryData={ drinksData } />
                },
                {
                    path: '/main-courses',
                    element: <MenuListing menuCategoryData={ mainCourseData }/>
                },
                {
                    path: '/desserts',
                    element: <MenuListing menuCategoryData={ dessertsData }/>
                }
            ]
        },
       
    ]);

    return (
        <div>            
            <RouterProvider router={router} />            
        </div>
    )
}
