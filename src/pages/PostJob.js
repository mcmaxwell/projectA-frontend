import React, { useState } from 'react'
import axios from 'axios'

const PostJob = ({ userId }) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')
    const [category, setCategory] = useState('')
    const [salary, setSalary] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('/api/jobs', {
                title,
                description,
                location,
                category,
                salary,
                userId,
            })
            console.log('Job posted:', response.data)
        } catch (error) {
            console.error('Error posting job:', error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='Job Title'
                required
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder='Job Description'
                required
            />
            <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder='Location'
                required
            />
            <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder='Category'
                required
            />
            <input
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                placeholder='Salary'
            />
            <button type='submit'>Post Job</button>
        </form>
    )
}

export default PostJob
