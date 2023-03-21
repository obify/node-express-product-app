const express = require('express');
const cors = require("cors");
const app = express();

const mongoose = require('mongoose');
const { MONGO_DB } = require('./config');
mongoose.connect(MONGO_DB);

mongoose.connection.on('connected', () => {
    console.log("connected");
});
mongoose.connection.on('error', (error) => {
    console.log("Some error ", error);
});

const APP_PORT = 9000;

app.use(cors());
app.use(express.json());

require('./models/product_model');

app.use(require('./routes/product_route'));

app.listen(APP_PORT, () => {
    console.log("Server started on port: " + `${APP_PORT}`);
});

