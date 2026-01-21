import Footer from '@/Pages/Shared/Footer/Footer'
import Navbar from '@/Pages/Shared/Navbar/Navbar'
import TopNavbar from '@/Pages/Shared/TopNav/TopNavbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div>
      <TopNavbar></TopNavbar>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}
