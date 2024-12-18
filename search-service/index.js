require("dotenv").config();
const mongoose = require("mongoose");
const searchRoutes = require("./routes/searchRoute");
const DB_URI = process.env.MONGO_URI;

mongoose
  .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/", searchRoutes);

app.get("/", (req, res) => {
  res.send("Server 2!");
});

app.listen(PORT, () => {
  console.log(`search Server is running on http://localhost:${PORT}`);
});
