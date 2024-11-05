import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import DashboardRoutes from '../routes/dashboard.route'
import Sidebar from './Sidebar'
import Footer from '../components/ui/Footer'
import useAuth from '../features/authentication/hooks/userAuth'

export default function AuthLayout() {
  const isLogin = useAuth()
  if (!isLogin) return <Navigate to="/" />
  return (
    <>
      <div className="flex h-screen bg-slate-200">
        {/* Sidebar */}
        <Sidebar />

        {/* Content */}
        <Routes>
          {DashboardRoutes.map((route, i) => <Route key={i} path={route.path} element={route.component} ></Route>)}
        </Routes>
      </div>
      <Footer />
    </>
  )
}
