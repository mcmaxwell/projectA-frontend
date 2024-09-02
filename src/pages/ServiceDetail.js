import { useParams } from 'react-router-dom'

const ServiceDetail = () => {
    const { id } = useParams()

    return (
        <div>
            <h1>Service Detail for {id}</h1>
            {/* Fetch and display details for the specific service */}
        </div>
    )
}

export default ServiceDetail
