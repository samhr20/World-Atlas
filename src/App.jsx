import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import AppLayout from './components/Layout/AppLayout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Country from './pages/Country'
import ErrorPage from './pages/ErrorPage'
import CountryDetails from './pages/CountryDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/country',
        element: <Country />
      },
      {
        path:'/country/:countryName',
        element:<CountryDetails/>
      }
    ]
  }

])

const App = () => {
  return <RouterProvider router={router}></RouterProvider>
}

export default App