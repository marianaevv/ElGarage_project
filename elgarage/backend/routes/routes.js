const express = require("express");
const router = express.Router();

const appointment = require("../controllers/Appointment");

router.get("/hello", (req, res) => {
  res.status(200).send("Hello World!");
});

router.get("/citas", async (req, res) => {
  await appointment.getAllAppointments(req, res);
});

router.post("/citas", async (req, res) => {
  await appointment.newAppointment(req, res);
});

//La ruta no existe
router.get("*", function (req, res) {
  res.status(404).send("La ruta no existe");
});

module.exports = router;