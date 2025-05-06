const db = require('../models/db');
const { generateSlots } = require('../utils/slotUtils');

exports.getAvailableSlots = (req, res) => {
  const date = req.query.date;
  const allSlots = generateSlots();
  db.all("SELECT timeSlot FROM appointments WHERE date = ?", [date], (err, rows) => {
    const bookedSlots = rows.map(r => r.timeSlot);
    const available = allSlots.filter(slot => !bookedSlots.includes(slot));
    res.json({ availableSlots: available });
  });
};

exports.bookAppointment = (req, res) => {
  const { name, phone, date, timeSlot } = req.body;
  db.get("SELECT * FROM appointments WHERE date = ? AND timeSlot = ?", [date, timeSlot], (err, row) => {
    if (row) {
      return res.status(400).json({ message: "Slot already booked." });
    }
    db.run("INSERT INTO appointments (name, phone, date, timeSlot) VALUES (?, ?, ?, ?)", 
      [name, phone, date, timeSlot], 
      () => res.json({ message: "Appointment booked successfully." }));
  });
};
