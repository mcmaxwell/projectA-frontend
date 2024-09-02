import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const { login } = useAuth()

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:5000/login', {
                email,
                password,
            })
            console.log('User logged in:', response.data)
            login() // Update the auth context
            navigate('/dashboard') // Redirect to the dashboard
        } catch (error) {
            console.error('Error logging in:', error)
        }
    }

    const handleGoogleLogin = () => {
        window.location.href = 'http://localhost:5000/auth/google'
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <input
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email'
                    required
                />
                <input
                    name='password'
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password'
                    required
                />
                <button type='submit'>Login</button>
            </form>
            <button onClick={handleGoogleLogin}>Login with Google</button>
        </div>
    )
}

export default Login
