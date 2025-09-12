import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import ViewA from './views/ViewA';
import ViewB from './views/ViewB';
import ViewC from './views/ViewC';


const router = createBrowserRouter([
  {
    path: "/",
    //element: <div>Hello Router World</div>,
    Component: ViewA,
  },
  {
    path: "/view-b",
    Component: ViewB
  },
  {
    path: "/view-c",
    Component: ViewC
  }
]);

export default function RouterDemo() {
  return (
    <RouterProvider router={router} />
  )
}
