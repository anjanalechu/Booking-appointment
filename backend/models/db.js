const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/appointments.sqlite');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS appointments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    phone TEXT,
    date TEXT,
    timeSlot TEXT
  )`);
});

module.exports = db;
