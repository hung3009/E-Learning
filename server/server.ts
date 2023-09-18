import { app } from "./app";
import connectDB from "./utils/db";
import User from "./models/user.model"
require("dotenv").config () ;

// create server
app.listen (process.env. PORT, () => {
    console.log(`Server is connected with port ${process.env.PORT}`);
    connectDB();
});