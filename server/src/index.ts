import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import subscribeRoutes from "./routes/subscribe";
import contactRoutes from "./routes/contact";
import mongoose from "mongoose";
import path from "path";


dotenv.config();
const app = express();

app.use(express.json());
app.use(cors({origin: true}));
app.use(express.urlencoded({ extended: true }))
app.use("/api/subscribe", subscribeRoutes);
app.use("/api/contact", contactRoutes)
app.use(express.static(path.join(__dirname, "../../client/dist")));

// Catch-all route handler to serve index.html for any other route
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../../client/dist", "index.html"));
  });

const connectionString = process.env.MONGODB_URL as string
mongoose.connect(connectionString);
const db = mongoose.connection;

db.on('error', () => {
    console.log("Mongoose connection error");
})
db.once("open", () => {
    console.log("Connected to mongoDB");
})


app.listen(process.env.PORT, () => {
    console.log(`app listening on port ${process.env.PORT}`)
})