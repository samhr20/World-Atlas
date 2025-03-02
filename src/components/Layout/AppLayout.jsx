import React from 'react'
import Navbar from '../Ui/Navbar'
import Footer from '../Ui/Footer'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default AppLayout