const SeekerLayout = ({ children }) => {
    return (
        <div className='min-h-screen bg-gray-100'>
            <header className='bg-teal p-4 text-white'>
                Seeker Navigation
            </header>
            <main className='container mx-auto p-4'>{children}</main>
            <footer className='bg-teal p-4 text-white'>
                Footer for Seekers
            </footer>
        </div>
    )
}

export default SeekerLayout
