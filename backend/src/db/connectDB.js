import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGO_URI_LOCAL || process.env.MONGO_URI,
      {
        dbName: process.env.MONGODB_NAME,
        autoCreate: true,
        autoIndex: true,
      },
    );
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("Error connection to MongoDB: ", error.message);
    process.exit(1); // 1 is failure, 0 status code is success
  }
};
