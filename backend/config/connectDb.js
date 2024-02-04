import mongoose from "mongoose";

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongodb connected successfully");
  } catch (error) {
    console.log(`error while connecting with mongodb${error.message}`);
    process.exit(1);
  }
};

export default connectToDb;
