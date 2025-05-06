(function () {
  const container = document.getElementById('booking-widget-container');

  // Load CSS
  const style = document.createElement('link');
  style.rel = 'stylesheet';
  style.href = './plugin/booking-style.css';
  document.head.appendChild(style);

  container.innerHTML = `
    <form class="booking-form" id="booking-form">
      <input type="text" id="name" placeholder="Name" required />
      <input type="text" id="phone" placeholder="Phone Number" required />
      <input type="date" id="date" required />
      <select id="time-slot" required><option>Select a slot</option></select>
      <button type="submit" id="book-btn">Book Appointment</button>
      <p id="status-msg"></p>
    </form>
  `;

  const apiUrl = 'http://localhost:3000/api';
  const dateInput = document.getElementById('date');
  const slotSelect = document.getElementById('time-slot');
  const statusMsg = document.getElementById('status-msg');

  dateInput.addEventListener('change', async () => {
    const date = dateInput.value;
    const res = await fetch(`${apiUrl}/slots?date=${date}`);
    const slots = await res.json();

    slotSelect.innerHTML = '';
    if (slots.availableSlots.length === 0) {
      const opt = document.createElement('option');
      opt.textContent = 'No slots available';
      slotSelect.appendChild(opt);
    } else {
      slots.availableSlots.forEach(slot => {
        const opt = document.createElement('option');
        opt.value = slot;
        opt.textContent = slot;
        slotSelect.appendChild(opt);
      });
    }
  });

  document.getElementById('booking-form').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent form from reloading the page

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const date = dateInput.value;
    const timeSlot = slotSelect.value;

    if (!name || !phone || !date || !timeSlot || timeSlot === 'Select a slot') {
      statusMsg.textContent = '⚠️ All fields are required.';
      return;
    }

    const response = await fetch(`${apiUrl}/book`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone, date, timeSlot })
    });

    if (response.ok) {
      alert('✅ Appointment booked successfully!');
    } else {
      const err = await response.json();
     alert('Failed to book appointment.');
    }
  });
})();
