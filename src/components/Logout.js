import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const Logout = () => {
    const navigate = useNavigate()
    const { logout } = useAuth()

    const handleLogout = () => {
        logout() // Update the auth context
        navigate('/login') // Redirect to the login page
    }

    return <button onClick={handleLogout}>Logout</button>
}

export default Logout
