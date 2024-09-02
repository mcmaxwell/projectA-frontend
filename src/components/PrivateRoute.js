import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth' // Assume useAuth is a custom hook for auth state

const PrivateRoute = ({ component: Component }) => {
    const { isAuthenticated } = useAuth() // Use a custom hook or context to check if the user is authenticated

    return isAuthenticated ? <Component /> : <Navigate to='/login' />
}

export default PrivateRoute
