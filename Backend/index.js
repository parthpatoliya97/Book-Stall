
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookroute from "./route/book.route.js";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 4000;
const URI = process.env.MONGODBURI;

mongoose.connect(URI, {
    // useNewUrlParser: true,    // Corrected typo here
    // useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.log("Error connecting to MongoDB:", error);
});

// Middleware to parse JSON (if needed)
app.use(express.json());

// Defining routes
app.use("/book", bookroute);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
