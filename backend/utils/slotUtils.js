const generateSlots = () => {
    const slots = [];
    const start = 10;
    const end = 17;
    for (let h = start; h < end; h++) {
      if (h === 13) continue; // break from 1-2 PM
      slots.push(`${h}:00`);
      slots.push(`${h}:30`);
    }
    return slots;
  };
  
  module.exports = { generateSlots };
  