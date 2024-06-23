import React, { useState } from 'react'
import {Outlet } from 'react-router-dom'
import Navbar from '../container/Navbar/Navbar'
import Category from '../container/CategoryPage/Category'
import Login from '../container/Login'
const RouterLayout = () => {
  const [state,setState] = useState(false)
  return (
    <>
      <header>
        <Navbar setState={setState} state={state}/>
        <Category/>
        {
          state ?  <Login setState={setState} />:null
        }
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default RouterLayout