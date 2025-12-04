import mongoose from "mongoose";

const dbConnection = () => {
    mongoose
        .connect(process.env.MONGO_URI, {
            dbName: "Project0",
        })
        .then(() => {
            console.log("Database connected successfully");
        })
        .catch((err) => {
            console.log(`Database connection failed! ${err}`);
        });
};

export default dbConnection;
