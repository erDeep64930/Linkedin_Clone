import mongoose, { Connection } from 'mongoose';
let isConnected:Connection |boolean = false;

const connectDB = async () => {
    if (isConnected) {
        console.log("mongodb is connected");
      return;
    }
    isConnected = true;
  try {
   const res =  await mongoose.connect(process.env.MONGO_URI!);
   isConnected = res.connection;
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection error:", error);
  }
};

export default connectDB;
