import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import RouterLayout from './layout/RouterLayout'
import {UserContext} from "./context/Context"
// css 
import "./App.css"
// data  
import {navbar} from "../data/navbar"
import { product } from '../data/product'
import { popular_product } from '../data/popular_product'
import { See } from '../data/saw'
import Home from './page/Home/Home'
import Like from './page/like/Like'
import Cart from './page/cart/Cart'
const router = createBrowserRouter([
  {
    path:"/",
    element:<RouterLayout/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:"/like",
        element:<Like/>
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ]
  }
])
const App = () => {

  return (
    <UserContext.Provider value={{navbar, product, popular_product,See }}>
    <RouterProvider router={router}/>
    </UserContext.Provider>
  )
}

export default App