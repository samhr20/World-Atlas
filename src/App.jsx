import React, { useEffect, useState } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import AppLayout from './components/Layout/AppLayout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Country from './pages/Country'
import ErrorPage from './pages/ErrorPage'
import CountryDetails from './pages/CountryDetails'
import { ThemeProvider } from './contexts/ThemeContext'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
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
        path: '/country/:countryName',
        element: <CountryDetails />
      }
    ]
  }

])

const App = ({ children }) => {

  const [themeMode, setThemeMode] = useState(localStorage.getItem('themeMode') || 'light');

  const darkMode = () => {
    setThemeMode('dark')
  }

  const lightMode = () => {
    setThemeMode('light')
  }

  useEffect(() => {
    let html = document.querySelector('html')
    html.classList.remove('light', 'dark')
    html.classList.add(themeMode)
    localStorage.setItem('themeMode', themeMode);
  }, [themeMode])


  return (

    <ThemeProvider value={{ themeMode, darkMode, lightMode }}>
      <RouterProvider router={router}>
        {children}
      </RouterProvider>
    </ThemeProvider>
  )
}

export default App