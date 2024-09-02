import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='bg-gray-800 text-white shadow-md'>
            <div className='container mx-auto flex justify-between items-center p-4'>
                {/* Logo */}
                <div className='text-2xl font-bold'>
                    <Link to='/'>MyApp</Link>
                </div>

                {/* Navigation Links */}
                <nav className='hidden md:flex space-x-4'>
                    <Link
                        to='/'
                        className='hover:text-teal-400 transition duration-300'
                    >
                        Home
                    </Link>
                    <Link
                        to='/jobs'
                        className='hover:text-teal-400 transition duration-300'
                    >
                        Jobs
                    </Link>
                    <Link
                        to='/about'
                        className='hover:text-teal-400 transition duration-300'
                    >
                        About
                    </Link>
                    <Link
                        to='/contact'
                        className='hover:text-teal-400 transition duration-300'
                    >
                        Contact
                    </Link>
                </nav>

                {/* User Profile / Login */}
                <div className='hidden md:flex items-center space-x-4'>
                    <Link
                        to='/login'
                        className='px-4 py-2 bg-teal-500 text-white rounded-lg shadow-md hover:bg-teal-700 transition duration-300'
                    >
                        Login
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className='md:hidden'>
                    <button className='text-white focus:outline-none'>
                        <svg
                            className='w-6 h-6'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M4 6h16M4 12h16m-7 6h7'
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
