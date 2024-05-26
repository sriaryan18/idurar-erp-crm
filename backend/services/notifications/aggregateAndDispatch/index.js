const express = require('express');
const cors = require('cors');
const serviceRoutes = require('./routes/serviceRoutes');
require('./libs/kafkaAdmin');
require('./libs/kafkaConsumer');
const app = express();
app.use(
  cors({
    origin: '*',
  })
);
app.use(express.json());

app.use('/aggregate', serviceRoutes);

app.listen(3002, () => console.log('aggregator and dispatcher service started at port 3002'));
