import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router";
import './index.css'
import Root from './Layouts/Root';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Login2 from './Components/Login/Login2';



const router = createBrowserRouter([
  {
    path: "/",
    Component: Root ,
    children:[
      {
        index: true,
        Component: Home
      },
      {
        path:"login",
        Component:Login
      },
      {
        path:"register",
        Component:Register
      },
      {
        path:"login2",
        Component:Login2
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
