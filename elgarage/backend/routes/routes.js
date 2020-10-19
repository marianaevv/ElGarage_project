const express = require("express");
const router = express.Router();

const appointment = require("../controllers/Appointment");
const quote = require("../controllers/Quotes");

router.get("/hello", (req, res) => {
  res.status(200).send("Hello World!");
});

router.get("/citas", async (req, res) => {
  await appointment.getAllAppointments(req, res);
});

router.post("/cita", async (req, res) => {
  await appointment.newAppointment(req, res);
});
router.get("/cotizaciones", async (req, res) => {
  await quote.getAllQuotes(req, res);
});

router.post("/cotizacion", async (req, res) => {
  await quote.newQuote(req, res);
});
//La ruta no existe
router.get("*", function (req, res) {
  res.status(404).send("La ruta no existe");
});

module.exports = router;