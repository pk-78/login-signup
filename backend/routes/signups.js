const express = require("express");
const router = express.Router();

// import controller

const { createSignups } = require("../controllers/createSignups");
const {
  getLogin,
  getLoginbyId,
  getLoginbyUsername,
  getLoginbyEmail,
} = require("../controllers/getLogin");
// define api routes

router.post("/createSignups", createSignups);
router.get("/getLogin", getLogin);
router.get("/getLogin/:id", getLoginbyId);
router.get("/getLoginbyEmail/:email", getLoginbyEmail);
router.get("/getLoginbyUsername/:username", getLoginbyUsername);

module.exports = router;
