const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const app = express();
const Port = process.env.PORT || 9658;

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
const signRoutes = require("./routes/signups");
app.use("/api/v1", signRoutes);

// Database Connection
const dbConnect = require("./config/database");
dbConnect();

// Basic Route
app.get("/", (req, res) => {
  res.send("hello jee");
});

// Start the server
app.listen(Port, () => {
  console.log("App is listening at port no ", Port);
});
