import { useState } from "react"

import AppointmentForm from '../AppointmentForm'

const doctorsDetails = require("../../data/doctors.json")

const DoctorPage = (props) => {
    const [showForm, setShowForm] = useState(false)
    
    const { match } = props
    const { params } = match
    const { id } = params
    
    const doctor = doctorsDetails.find(d => d.id === parseInt(id))

    const onClickBook = () => {
        setShowForm(true)
    }
    
    return (
    <div>
        <h2>{doctor.name}</h2>
        <img src={doctor.profileImg} alt={doctor.name} />
        <p>{doctor.specialization}</p>
        <p>{doctor.details}</p>
        <p>Status: {doctor.available ? 'Available' : 'Unavailable'}</p>
        {doctor.available && (<button type="button" onClick={onClickBook}>Book Appointent</button>)}
            {showForm && <AppointmentForm doctor={ doctor } />}
    </div>
    )
}

export default DoctorPage