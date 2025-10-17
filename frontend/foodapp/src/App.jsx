import React from 'react'

import './App.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import MainNavigation from './components/MainNavigation'

import axios from 'axios'


// fetch data from the database

const getAllReceipe = async()=>{
  let allReceipes = []
  await axios.get('http://localhost:5000/receipe/').then(res=>{
    allReceipes=res.data
  })
  return allReceipes
}


const router = createBrowserRouter([
  {path:"/",element:<MainNavigation/>,children:[

     {path:'/', element:<Home/>,loader:getAllReceipe},
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
