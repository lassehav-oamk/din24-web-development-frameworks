import { useState } from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import ViewA from './views/ViewA';
import ViewB from './views/ViewB';
import ViewC from './views/ViewC';


export default function RouterDemoWCommonState() {

  const [clickCount, setClickCount] = useState(0);

  const router = createBrowserRouter([
    {
      path: "/",
      //element: <div>Hello Router World</div>,
      element: <ViewA clickCount={clickCount} />,
    },
    {
      path: "/view-b",
      element: <ViewB />
    },
    {
      path: "/view-c",
      element: <ViewC clickCount={clickCount} increaseClickCount={() => setClickCount(c => c + 1)} />
    }
  ]);


  return (
    <RouterProvider router={router} />
  )
}


