const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const app = express();
require("./db/mongoose");
const bodyParser = require("body-parser");
const router = require("./routes/routes");

app.use(bodyParser.json());
app.use(router);

module.exports = app; 