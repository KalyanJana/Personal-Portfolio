import mongoose from "mongoose";

export const connectDatabase = async () => {
  try {
    const mongoURL =
      process.env.MOD_ENV === "Devlopment"
        ? process.env.MONGO_TEST_URL
        : process.env.MONGO_PROD_URL;
    const dbName = process.env.MOD_ENV === "Devlopment" ? "myportfolio" : "myportfolio";

    //connection to MongoDB
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: dbName,
    });

    //connection established
    console.log("connected to MongoDB");

    //Event handlers for the database connection
    mongoose.connection.on("error", (error) => {
      console.log("MongoDB connection error :", error);
    });

    mongoose.connection.on("disconnected", () => {
      console.log("MongoDB disconnected");
    });

    //Gracefully handle process termination
    process.on("SIGNIT", async () => {
      try {
        await mongoose.connection.close();
        console.log("MongoDB connection closed");
        process.exit(0);
      } catch (error) {
        console.log("Error closing MongoDB connection :", error);
        process.exit(1);
      }
    });
  } catch (error) {
    console.log("Connection error in MongoDB data base :", error);
    process.exit(1);
  }
};
