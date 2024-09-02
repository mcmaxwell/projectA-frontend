import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fetchJobs } from '../utils/api'

const JobListings = () => {
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        const fetchAllJobs = async () => {
            try {
                const data = await fetchJobs()
                setJobs(data)
            } catch (error) {
                console.error('Error fetching job listings:', error)
            }
        }

        fetchAllJobs()
    }, [])

    return (
        <div className='container mx-auto p-4'>
            <h1 className='text-3xl font-bold text-gray-900 mb-6'>
                Available Jobs
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {jobs.map((job) => (
                    <div
                        key={job._id}
                        className='border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300'
                    >
                        <h2 className='text-xl font-semibold mb-2'>
                            {job.title}
                        </h2>
                        <p className='text-gray-700 mb-4'>
                            {job.description.slice(0, 100)}...
                        </p>
                        <div className='flex justify-between items-center'>
                            <span className='text-sm text-gray-500'>
                                Location: {job.location}
                            </span>
                            <Link to={`/jobs/${job._id}`}>
                                <button className='px-4 py-2 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition-colors duration-300'>
                                    View Details
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default JobListings
