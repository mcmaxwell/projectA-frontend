import React, { useState } from 'react'
import axios from 'axios'

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        userType: 'jobPoster', // Default user type, change as needed
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(
                'http://localhost:5000/register',
                formData
            )
            console.log('User registered:', response.data)
            // Redirect to dashboard or login
        } catch (error) {
            console.error('Error registering:', error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Name'
                required
            />
            <input
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Email'
                required
            />
            <input
                name='password'
                type='password'
                value={formData.password}
                onChange={handleChange}
                placeholder='Password'
                required
            />
            <select
                name='userType'
                value={formData.userType}
                onChange={handleChange}
            >
                <option value='jobPoster'>Job Poster</option>
                <option value='serviceProvider'>Service Provider</option>
            </select>
            <button type='submit'>Register</button>
        </form>
    )
}

export default Register
