import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import { NotFound } from './components/NotFound'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <div>
        <NavBar />
        <Home />
      </div>
    },
    {
      path: '/about',
      element: <div>
        <NavBar />
        <About />
      </div>
    },
    {
      path: '*',
      element: <NotFound />
    }
  ]
)

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App