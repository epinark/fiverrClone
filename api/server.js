import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js"
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();
mongoose.set("strictQuery", true);


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB!");
    } catch (error) {
        console.log(error);
    }
};

app.use(express.json());
app.use(cookieParser());



app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);

app.listen(8800, () => {
    connect();
    console.log("BAckend server is running!");
})