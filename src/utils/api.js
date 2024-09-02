import axios from 'axios'

const API_URL = 'http://localhost:5001/api' // Adjust to your backend URL

// Existing service-related API calls
export const fetchServices = async () => {
    const response = await axios.get(`${API_URL}/services`)
    return response.data
}

export const fetchServiceDetail = async (id) => {
    const response = await axios.get(`${API_URL}/services/${id}`)
    return response.data
}

// New job-related API calls
export const fetchJobs = async () => {
    const response = await axios.get(`${API_URL}/jobs`)
    return response.data
}

export const fetchJobDetail = async (id) => {
    const response = await axios.get(`${API_URL}/jobs/${id}`)
    return response.data
}
