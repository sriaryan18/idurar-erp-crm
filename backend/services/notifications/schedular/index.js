require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('./models/Notifications')
require('./schedule');
const app = express();
app.use(express.json());

mongoose.connect(process.env.DATABASE);

const schedularRoutes = require('./routes/schedularRoutes');

app.use(
  cors({
    origin: true,
  })
);

app.use('/schedule', schedularRoutes);

app.listen(3001, () => console.log('Schedular Initialized at port 3001'));
