import React from 'react'
import { Navigate } from 'react-router-dom'

function AdminPrivateRoute({ children }) {
    const role = sessionStorage.getItem('role')

    let authenticated = false;
    if (role == 'admin') {
        authenticated = true;
    }

    return authenticated ? children : <Navigate to="/" />
}

export default AdminPrivateRoute