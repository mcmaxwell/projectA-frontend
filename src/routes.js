import { Routes, Route } from 'react-router-dom'
import SeekerHome from './pages/SeekerHome'
import HelperHome from './pages/HelperHome'
import JobDetail from './pages/JobDetail'
import LandingPage from './pages/LandingPage'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import PrivateRoute from './components/PrivateRoute'

const AppRoutes = () => (
    <Routes>
        <Route
            path='/'
            element={<LandingPage />}
        />
        <Route
            path='/login'
            element={<Login />}
        />
        <Route
            path='/register'
            element={<Register />}
        />
        <Route
            path='/seeker'
            element={<SeekerHome />}
        />
        <Route
            path='/helper'
            element={<HelperHome />}
        />
        <Route
            path='/jobs/:id'
            element={<JobDetail />}
        />
        <Route
            path='/dashboard'
            element={<PrivateRoute component={Dashboard} />}
        />
    </Routes>
)

export default AppRoutes
