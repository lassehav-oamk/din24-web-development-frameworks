import { createBrowserRouter, Router } from "react-router";
import { RouterProvider } from "react-router/dom";
import Ex64User from './Ex64Components/Ex64User'
import Ex64UserDetails from './Ex64Components/Ex64UserDetails'
import Ex64UserList from "./Ex64Components/Ex64UserList";


export default function Ex64DynamicRouteSegment() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Ex64UserList />
        },
        {
            path: "/user/:id",
            element: <Ex64UserDetails />
        }
    ]);

    return (
        <div>            
            <RouterProvider router={router} />
        </div>
    )
}
