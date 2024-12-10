
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Cars from './Components/Cars'

import Home from './Components/Home/Home'
import Details from './Components/Details';

function App() {
 
  
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    index: true,
  },
  {
    path: "cars",
    element: <Cars />,
  },
  {
    path: "details",
    element: <Details/>,
  },
]);
  return (
    <>
    <RouterProvider router={routes}></RouterProvider>
  
    </>
  )
}

export default App
