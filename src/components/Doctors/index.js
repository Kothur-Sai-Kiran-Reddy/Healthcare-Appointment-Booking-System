import { useState } from "react";
import DoctorsCard from "../DoctorsCard";
import DoctorDetailsExpanded from '../DoctorDetailsExpanded'
import AppointmentForm from '../AppointmentForm'
import Modal from "../Modal";
import Navbar from "../Navbar";

const doctorsDetails = require("../../data/doctors.json");

const Doctors = () => {
  const [searchInput, setSearchInput] = useState("");
  const [selectedDoctorId, setSelectedDoctorId] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const onChangeSearch = (event) => {
    setSearchInput(event.target.value);
  };

  const filteredDoctors = doctorsDetails.filter((doc) =>
    doc.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  const handleCardClick = (id) => {
    setSelectedDoctorId(id);
    setIsDetailsOpen(true);
  };

  const selectedDoctor = doctorsDetails.find((doc) => doc.id === selectedDoctorId);

  return (
    <>
      <Navbar />
      <h1>Doctors</h1>
      <input
        type="search"
        className="search-bar"
        onChange={onChangeSearch}
        value={searchInput}
      />
      <div className="doctors-list-container">
        {filteredDoctors.map((eachItem) => (
          <DoctorsCard
            doctorsDetail={eachItem}
            key={eachItem.id}
            onCardClick={() => handleCardClick(eachItem.id)}
            isSelected={selectedDoctorId === eachItem.id}
          />
        ))}
      </div>

      {isDetailsOpen && selectedDoctor && (
        <Modal onClose={() => setIsDetailsOpen(false)}>
          <DoctorDetailsExpanded
            doctor={selectedDoctor}
            onBookClick={() => {
              setIsDetailsOpen(false);
              setIsBookingOpen(true);
            }}
          />
        </Modal>
      )}

      {isBookingOpen && selectedDoctor && (
        <Modal onClose={() => setIsBookingOpen(false)}>
          <AppointmentForm
            doctor={selectedDoctor}
            onCloseForm={() => setIsBookingOpen(false)}
          />
        </Modal>
      )}
    </>
  );
};

export default Doctors;
