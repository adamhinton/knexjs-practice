const express = require("express");
const PersonController = require("../controller/person");

const router = express.Router();

//Tutorial wants me to import this logic, I can also just do this the way I was taught at Lambda with req res etc
router.post("/person", PersonController.createPerson);

module.exports = router;
