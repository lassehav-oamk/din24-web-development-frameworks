import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import ViewA from './views/ViewA';

const router = createBrowserRouter([
  {
    path: "/",
    //element: <div>Hello Router World</div>,

  },
]);

export default function RouterDemo() {
  return (
    <RouterProvider router={router} />
  )
}
