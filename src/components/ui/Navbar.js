import React from 'react'
import { Link, Navigate } from 'react-router-dom'

export default function Navbar() {
  const loginUserRole = sessionStorage.getItem('role')

  const logoutHandler = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("role");
    return <Navigate to="/" />;
  };

  return (
    <nav className="bg-orange-400 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="space-x-4">
          <Link to="/" className="text-white text-base">Events</Link>
        </div>

        <div className="flex items-center space-x-4">
          {!loginUserRole && <Link to="/auth/login" className="text-white">Login</Link>}
          {!loginUserRole && <Link to="/auth/signup" className="text-white">Signup</Link>}


          {loginUserRole === 'admin' && <Link to="/admin-dashboard" className="text-white">Admin Dashboard</Link>}
          {loginUserRole === 'user' && <Link to="/user-profile" className="text-white">Profile</Link>}
          {loginUserRole && <Link to="/user-profile" className="text-white" onClick={logoutHandler}>Logout</Link>}
        </div>
      </div>
    </nav>
  )
}
