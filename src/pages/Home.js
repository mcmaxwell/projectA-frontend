const Home = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
            <h1 className='text-4xl font-bold text-gray-900'>
                Welcome to Project A
            </h1>
            <p className='mt-4 text-lg text-gray-700'>
                Your one-stop solution for finding services!
            </p>
            <button className='mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700'>
                Get Started
            </button>
        </div>
    )
}

export default Home
