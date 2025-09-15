import { createBrowserRouter } from 'react-router'
import { RouterProvider } from "react-router/dom";
import UserList from './/UserList';
import UserDetails from './UserDetails';

import { userData } from './userStore';


export default function RouterDynamicSegment() {

    /* This component demonstrates the use of dynamig segments in routing.
         The task is to create a router with two routes:
         1. /users - this route should render a component that displays a list of users (you can hardcode a few user names)   
         2. /users/:id - this route should render a component that displays the details of a user based on the id parameter in the URL.                        
    */

    const router = createBrowserRouter([
        {
            path: "/",            
            element: <UserList users={ userData }/>
        },
        {
            path: "/user/:id",
            element: <UserDetails />
        }
    ]);    


    return (
        <RouterProvider router={router} />
    )
}
