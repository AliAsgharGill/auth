import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => console.log("MongoDB connected"));
    connection.on("error", (error) => {
      console.error.bind(console, "MongoDB connection error:", error),
        process.exit();
    });
    connection.on("disconnected", () => console.log("MongoDB disconnected"));
  } catch (error) {
    console.log("Getting error to connect with DB:", error);
  }
};
