import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthRoutes from '../routes/auth.route'
import Navbar from '../components/ui/Navbar'

export default function AuthLayout() {
  return (
    <>
      <Navbar />
      <Routes>
        {AuthRoutes.map((route, i) => <Route key={i} path={route.path} element={route.component} ></Route>)}
      </Routes>
      {/* footer */}
    </>
  )
}
