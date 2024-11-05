import React from 'react'
import { Navigate } from 'react-router-dom'

function UserPrivateRoute({ children }) {
    const role = sessionStorage.getItem('role')

    let authenticated = false;
    if (role == 'user') {
        authenticated = true;
    }

    return authenticated ? children : <Navigate to="/" />
}

export default UserPrivateRoute