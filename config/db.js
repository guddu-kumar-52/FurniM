import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `connected To Mongodb Database ${conn.connection.host}`.magenta.white
    );
  } catch (error) {
    console.log(`Errro in mondodb ${error}`.bgRed.white);
  }
};

export default connectDB;
