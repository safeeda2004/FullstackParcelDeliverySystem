const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userROUTE = require("./routes/User");
const parcelRoute = require("./routes/parcel");

dotenv.config();
const app = express();

//MIDDLEWARES
app.use(cors());
app.use(express.json());

//ROUTES

app.use("/auth",authRoute);
app.use("/users",userROUTE);
app.use("/parcels",parcelRoute);

//DATABASE CONNECTION
const DB = process.env.DB;
mongoose.connect(DB).then(()=>{
    console.log("DB connection is successful");
}).catch((err)=>{
console.log(err)
})

//SERVER

const PORT = process.env.PORT;

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})