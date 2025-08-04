# Healthcare-Appointment-Booking-System

This is a simple, responsive healthcare appointment booking web application built using **React.js (JavaScript)**. It allows users to:

- View a list of doctors with their specialization and availability.
- See detailed information for each doctor via a modal popup.
- Book appointments through a structured form.
- Receive confirmation feedback within the interface.

---

## 📌 Objective

> Build a simple Healthcare Appointment Booking Interface that allows users to view doctors, check their availability, and book an appointment.

---

## 🖥️ Features Implemented

### ✅ Core Requirements

- **Landing Page**:
  - Displays a list of doctors with name, specialization, profile image, and availability.
  - Includes a search bar to filter doctors by name.
  
- **Doctor Profile Details**:
  - Accessible by clicking a doctor card.
  - Opens in a **modal popup** with expanded details.

- **Book Appointment**:
  - Booking is handled via a second modal.
  - Appointment form includes fields for: **Patient Name**, **Email**, **Date/Time**.
  - On form submission, a confirmation message is displayed.

### ⭐ Bonus Features

- ✅ **Responsive UI** (mobile-first design).
- ✅ **Form validation** (all fields are required).
- ✅ **Enhanced UI with clean CSS styling**.
- ✅ **React modal transitions and animations**.
- ✅ **Structured code with reusable components**.

---

## ⚙️ Tech Stack

| Layer      | Technology       |
|------------|------------------|
| Frontend   | React.js (JavaScript) |
| Styling    | Custom CSS (with transitions & media queries) |
| Routing    | React Router |
| State Management | React Local State + Hooks |
| Mock Backend | Static JSON (doctors.json) |

---

## 📁 Project Structure

```bash
├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ ├── Navbar.js
│ │ ├── DoctorsCard.js
│ │ ├── DoctorDetailsExpanded.js
│ │ ├── AppointmentForm.js
│ │ ├── Modal.js
│ ├── data/
│ │ └── doctors.json
│ ├── App.js
│ ├── Home.js
│ ├── App.css
│ └── index.js
```

---


---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/nirogyaan-appointment-app.git
cd nirogyaan-appointment-app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the app
```bash
npm start
```

### App will run at http://localhost:3000.

---

# ❗ Challenges Faced

- Dynamic Modal Logic:

- Solved by creating a shared Modal component with dynamic child rendering.

- Initially implemented inline-expansion; later replaced with a modal for a better UX.

- Card Layout vs. Expanded Content:

- Handled using z-index, flex/grid responsiveness, and centralized state for doctor selection.
