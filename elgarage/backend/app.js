const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const app = express();
const cors = require( './middleware/cors' );
require("./db/mongoose");
const bodyParser = require("body-parser");
const router = require("./routes/routes");

app.use(bodyParser.json());
app.use(cors);
app.use(router);
module.exports = app; 