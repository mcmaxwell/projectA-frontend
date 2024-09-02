import React, { useState } from 'react'
import axios from 'axios'

const UpdateProfile = ({ userId }) => {
    const [skills, setSkills] = useState([])
    const [gallery, setGallery] = useState([])

    const handleSkillsChange = (e) => {
        setSkills(e.target.value.split(',').map((skill) => skill.trim()))
    }

    const handleGalleryUpload = async (e) => {
        const files = e.target.files
        const imageUrls = []

        for (let file of files) {
            // Assume you have an image upload endpoint, or use a third-party service like Cloudinary
            const formData = new FormData()
            formData.append('image', file)
            const response = await axios.post('/api/upload', formData) // Placeholder endpoint
            imageUrls.push(response.data.url) // Store the uploaded image URL
        }

        setGallery([...gallery, ...imageUrls])
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.put(`/api/users/${userId}`, {
                skills,
                gallery,
            })
            console.log('Profile updated:', response.data)
        } catch (error) {
            console.error('Error updating profile:', error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                onChange={handleSkillsChange}
                placeholder='Enter skills separated by commas'
            />
            <input
                type='file'
                multiple
                onChange={handleGalleryUpload}
            />
            <button type='submit'>Update Profile</button>
            <div>
                {gallery.map((url, index) => (
                    <img
                        key={index}
                        src={url}
                        alt='Gallery Image'
                    />
                ))}
            </div>
        </form>
    )
}

export default UpdateProfile
