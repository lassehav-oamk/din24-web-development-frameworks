import React from 'react'
import { createBrowserRouter, Outlet, NavLink } from "react-router";
import { RouterProvider } from "react-router/dom";
import ViewA from './views/ViewA';
import ViewB from './views/ViewB';
import Layout from './Layout';




export default function RouterLayoutRouteDemo() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <ViewA />
        },
        {
          path: "/view-b",
          element: <ViewB />
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}
