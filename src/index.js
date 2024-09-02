import React from 'react'
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import './index.css'

import App from './App'
import { AuthProvider } from './context/AuthContext'

const container = document.getElementById('root');
const root = createRoot(container); // Create a root using createRoot

root.render(
    <AuthProvider>
        <App />
    </AuthProvider>
)
