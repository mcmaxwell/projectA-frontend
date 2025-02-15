import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routes'
import Header from './components/Header' // Assuming you have a Header component

function App() {
    return (
        <Router>
            <div className='App'>
                <Header />
                <AppRoutes />
            </div>
        </Router>
    )
}

export default App
