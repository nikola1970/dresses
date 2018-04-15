const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const ROUTES = require("./routes/routes");


// env variables
require('dotenv').config();


const app = express();
app.disable('x-powered-by');

// connect to database
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_STRING);
mongoose.connection.on("connected", () => console.log("Connected to the database"));
mongoose.connection.on("error", (err) => console.log("Connection error: " + err));
mongoose.connection.on("disconnected", () => console.log("Disconnected from the databse"));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", ROUTES);



app.listen(4000, () => console.log("Server is running"));