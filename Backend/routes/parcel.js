const express = require("express");
const router = express.Router();
const { createParcel, getAllparcels, UpdateParcel, getOneParcel, getUserparcel, deleteParcel } = require("../controllers/parcel");

// ADD PARCEL
router.post("/", createParcel);

// GET ALL PARCELS
router.get("/", getAllparcels);

// UPDATE PARCEL
router.put("/:id", UpdateParcel);  

// GET ONE PARCEL
router.get("/find/:id", getOneParcel);

// GET USER'S PARCELS
router.post("/me", getUserparcel);

// DELETE PARCEL
router.delete("/:id", deleteParcel);  

module.exports = router;
