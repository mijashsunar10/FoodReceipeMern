import React from 'react'

import './App.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import MainNavigation from './components/MainNavigation'

const router = createBrowserRouter([
  {path:"/",element:<MainNavigation/>,children:[

     {path:'/', element:<Home/>},
  ]}

 
])

// Add main navigation as navbar and footer and other page as the children of the main navigations
const App = () => {
  return (
    <div>
      <RouterProvider router={router}>
        </RouterProvider>
      
    </div>
  )
}

export default App
