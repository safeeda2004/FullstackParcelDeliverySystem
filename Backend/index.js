const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const useRoute = require("./routes/User");
const parcelRoute = require("./routes/parcel");

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", useRoute);
app.use("/api/v1/parcels", parcelRoute);  // This mounts the parcelRoute

// Database connection
const DB = process.env.DB;
mongoose.connect(DB)
  .then(() => {
    console.log("DB connection is successful");
  })
  .catch((err) => {
    console.log(err);
  });

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
