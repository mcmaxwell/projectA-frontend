import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
    const navigate = useNavigate()

    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
            <h1 className='text-4xl font-bold text-gray-900'>
                Welcome to Project A
            </h1>
            <p className='mt-4 text-lg text-gray-700'>
                Are you looking for help or can you offer help?
            </p>
            <div className='mt-6'>
                <button
                    onClick={() => navigate('/seeker')}
                    className='mx-2 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700'
                >
                    I need help
                </button>
                <button
                    onClick={() => navigate('/helper')}
                    className='mx-2 px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700'
                >
                    I can help
                </button>
            </div>
        </div>
    )
}

export default LandingPage
