const parcel = require("../models/Parcel");

//Create a parcel

 const createParcel =async (req, res)=>{
    try {
        const newParcel =  parcel(req.body);
        const parcel = await newParcel.save();
        res.status(201).json(parcel)

    } catch (error) {
        res.status(500).json(error)
    }
}

// Get all parcels

 const getAllparcels =async (req,res)=>{
    
    try {
        const parcels = await parcel.find().sort({createdAt:-1});
        res.status(200).json(parcels);
    } catch (error) {
        res.status(500).json(error)
    }
}

// Update the parecl

 const UpdateParcel = async (req,res)=>{

    try {
        const parcel = await parcel.findByid(req.params.id);
        res.status(201).json(parcel)
    } catch (error) {
        res.status(500).json(error)
    }
}

  // Get one parcel

 const getOneParcel = async (req, res)=>{
    try {
        const parcel = await parcel.findByid(req.params.id)
        res.status(200).json(parcel)
    } catch (error) {
        res.status(500).json(error)
    }
  }

  // get User's Parcel

 const getUsersparcel = async(req, res)=>{
    try {
        const parcels = await parcel.find({senderemail:req.body.email}).sort({createdAt:-1});
        res.status(200).json(parcel)
    } catch (error) {
        res.status(500).json(error)
    }
  }

  //Delete a parcel

 const deleteParcel =async(req, res)=>{

    try {
        await parcel.findByIdAndDelete(req.params.id);
        res.status(201).json("parcel has benn deleted successfully")
    } catch (error) {
        res.status(500).json(error)
    }
  }
  
  module.exports ={
    deleteParcel,
    getUsersparcel,
    getOneParcel,
    UpdateParcel,
    createParcel
};