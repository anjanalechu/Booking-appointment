# Appointment Booking System

This is a simple appointment booking system built with Node.js (backend) and plain JavaScript (frontend). Users can view available time slots and book appointments in 30-minute intervals.


##  Getting Started

Follow these steps to set up and run the system:

### 1. Navigate to the project root

bash
cd "Appointment Booking System"


### 2. Install dependencies

bash
npm install


### 3. Start the backend server

bash
cd backend
node server.js


The server will start at: http://localhost:3000

### 4. Start the frontend

- Open the frontend/index.html file in VS Code.
- Use the *Live Server* VS Code extension to run it on a local port.

### 5. Ready to use!

You can now book appointments via the UI.

## 🕒 Time Slot Logic

- Available slots: *10:00 AM to 5:00 PM* in 30-minute intervals.
- *Break Time*: 1:00 PM – 2:00 PM (not available for booking).
- Prevents double-booking for the same time slot on the same day.

## 📞 Fields Required

- Name
- Phone Number
- Date
- Time Slot

## 📦 Tech Stack

- *Backend*: Node.js, SQLite
- *Frontend*: Vanilla JS, HTML, CSS

---

Happy Booking!