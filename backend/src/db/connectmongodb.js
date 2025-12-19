import mongoose from "mongoose";

const connectDB=async ()=>{
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("COnnect sucessfully");
  } catch (error) {
    console.error("Error in connecting",error);
    process.exit(1);
  }
}
export default connectDB