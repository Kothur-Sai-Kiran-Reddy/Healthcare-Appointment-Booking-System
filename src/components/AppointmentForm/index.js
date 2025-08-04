import { useState } from 'react';

const AppointmentForm = (props) => {
    const [form, setForm] = useState({ name: '', email: '', datetime: '' });
    const [confirmed, setConfirmed] = useState(false);

    const {doctor, onCloseForm} = props

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setConfirmed(true);
        setTimeout(() => {
            onCloseForm(); 
        }, 2000);
    };

    return confirmed ? (
         <div style={{ textAlign: 'center' }}>
            <h3>Appointment Confirmed ✅</h3>
            <p>Your appointment with <strong>{doctor.name}</strong> is booked!</p>
        </div>
    ) : (
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Your Name" onChange={handleChange} required />
            <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
            <input name="datetime" type="datetime-local" onChange={handleChange} required />
            <button type="submit">Book Appointment</button>
        </form>
    );
}

export default AppointmentForm;
