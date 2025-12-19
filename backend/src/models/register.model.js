import mongoose from "mongoose";

const RegisterUser=new mongoose.Schema({
  Username:{
    type:String,
    trim:true,
  },
  Email:{
    type:String,
    unique:true,
    owercase: true,
    trim:true
  },
  Password:{
    type:String
  }
},{timestamps:true})

export const User=mongoose.model("User",RegisterUser);