import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchJobDetail } from '../utils/api'

const JobDetail = () => {
    const { id } = useParams()
    const [job, setJob] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const getJobDetail = async () => {
            try {
                const data = await fetchJobDetail(id)
                setJob(data)
                setLoading(false)
            } catch (err) {
                setError('Failed to fetch job details')
                setLoading(false)
            }
        }

        getJobDetail()
    }, [id])

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>{error}</p>
    }

    return (
        <div className='container mx-auto p-4'>
            {job ? (
                <div className='bg-white p-6 rounded-lg shadow-lg'>
                    <div className='flex items-center mb-4'>
                        {job.companyLogo && (
                            <img
                                src={job.companyLogo}
                                alt={`${job.company} logo`}
                                className='w-16 h-16 mr-4'
                            />
                        )}
                        <h1 className='text-3xl font-bold text-gray-900'>
                            {job.title}
                        </h1>
                    </div>
                    <p className='text-gray-700 text-lg mb-6'>
                        {job.description}
                    </p>
                    <div className='mb-4'>
                        <span className='text-gray-500'>
                            Location: {job.location}
                        </span>
                    </div>
                    <div className='mb-4'>
                        <span className='text-gray-500'>
                            Posted on:{' '}
                            {new Date(job.postedDate).toLocaleDateString()}
                        </span>
                    </div>
                    <div className='mb-4'>
                        <span className='text-gray-500'>
                            Company: {job.company}
                        </span>
                    </div>
                    <div className='mb-4'>
                        <span className='text-gray-500'>
                            Category: {job.category}
                        </span>
                    </div>
                    <div className='mb-4'>
                        {job.tags &&
                            job.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className='bg-gray-200 text-gray-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded'
                                >
                                    {tag}
                                </span>
                            ))}
                    </div>
                    <div className='mb-6'>
                        <span className='text-gray-500'>
                            Salary:{' '}
                            {job.salary ? `$${job.salary}` : 'Not specified'}
                        </span>
                    </div>
                    {job.applicationDeadline && (
                        <div className='mb-6'>
                            <span className='text-red-500'>
                                Apply by:{' '}
                                {new Date(
                                    job.applicationDeadline
                                ).toLocaleDateString()}
                            </span>
                        </div>
                    )}

                    {/* Display user info */}
                    {job.user && (
                        <div className='mt-8'>
                            <h2 className='text-2xl font-semibold text-gray-900'>
                                Service Provider
                            </h2>
                            <div className='flex items-center mt-4'>
                                <div>
                                    <p className='text-lg font-bold'>
                                        {job.user.name}
                                    </p>
                                    <p className='text-sm text-gray-500'>
                                        {job.user.license && 'Licensed'}
                                        {job.user.certificate &&
                                            job.user.license &&
                                            ', '}
                                        {job.user.certificate && 'Certified'}
                                    </p>
                                    <p className='text-sm text-yellow-500'>
                                        Rating:{' '}
                                        {job.user.rating
                                            ? job.user.rating.toFixed(1)
                                            : 'Not rated'}{' '}
                                        / 5
                                    </p>
                                </div>
                            </div>
                            <div className='mt-6'>
                                <h3 className='text-xl font-semibold'>
                                    Reviews
                                </h3>
                                {job.user.reviews.length > 0 ? (
                                    job.user.reviews.map((review, index) => (
                                        <div
                                            key={index}
                                            className='mt-4'
                                        >
                                            <p className='text-sm text-gray-600'>
                                                <strong>
                                                    {review.reviewer}
                                                </strong>{' '}
                                                on{' '}
                                                {new Date(
                                                    review.date
                                                ).toLocaleDateString()}
                                            </p>
                                            <p className='text-gray-700'>
                                                {review.reviewText}
                                            </p>
                                            <p className='text-yellow-500'>
                                                Rating: {review.rating} / 5
                                            </p>
                                        </div>
                                    ))
                                ) : (
                                    <p>No reviews yet.</p>
                                )}
                            </div>
                        </div>
                    )}

                    <button className='w-full px-6 py-3 bg-teal-500 text-white font-bold text-lg rounded-lg shadow-md hover:bg-teal-700 transition-colors duration-300 mt-8'>
                        Apply Now
                    </button>
                </div>
            ) : (
                <p>Job not found</p>
            )}
        </div>
    )
}

export default JobDetail
