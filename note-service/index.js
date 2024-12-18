require("dotenv").config();
const mongoose = require("mongoose");
const noteRoutes = require("./routes/noteRoute");
const DB_URI = process.env.MONGO_URI;

mongoose
  .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/", noteRoutes);

app.get("/", (req, res) => {
  res.send("Server 3!");
});

app.listen(PORT, () => {
  console.log(`note Server is running on http://localhost:${PORT}`);
});
