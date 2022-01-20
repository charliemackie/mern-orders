const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Database
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// Routes
const orderRouter = require('./routes/order');
const labelRouter = require('./routes/shippingLabel');

app.use('/order', orderRouter);
app.use('/label', labelRouter);

// Create Server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});