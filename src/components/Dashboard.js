import React from 'react'
import { useAuth } from '../hooks/useAuth'

const Dashboard = () => {
    const { isAuthenticated } = useAuth()

    return (
        <div>
            {isAuthenticated ? (
                <h1>Welcome to your Dashboard</h1>
            ) : (
                <h1>You are not authorized to view this page</h1>
            )}
        </div>
    )
}

export default Dashboard
