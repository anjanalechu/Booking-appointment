const express = require('express');
const cors = require('cors');
const appointmentRoutes = require('./routes/appointmentRoutes');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', appointmentRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
