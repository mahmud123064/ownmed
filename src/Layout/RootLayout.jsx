import Navbar from '@/Pages/Shared/Navbar/Navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
    </div>
  )
}
