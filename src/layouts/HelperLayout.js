const HelperLayout = ({ children }) => {
    return (
        <div className='min-h-screen bg-gray-100'>
            <header className='bg-maroon p-4 text-white'>
                Helper Navigation
            </header>
            <main className='container mx-auto p-4'>{children}</main>
            <footer className='bg-maroon p-4 text-white'>
                Footer for Helpers
            </footer>
        </div>
    )
}

export default HelperLayout
