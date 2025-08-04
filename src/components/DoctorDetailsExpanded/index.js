const DoctorDetailsExpanded = ({ doctor, onBookClick }) => {
  return (
    <div className="doctor-expanded">
      <div className="doctor-expanded-header">
        <h2>{doctor.name}</h2>
      </div>
      <p><strong>{doctor.specialization}</strong></p>
      <p>{doctor.details}</p>
      <p>Status: {doctor.available ? "Available" : "Not Available"}</p>
      {doctor.available && <button onClick={onBookClick}>Book Appointment</button>}
    </div>
  );
};

export default DoctorDetailsExpanded;
