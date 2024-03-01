import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import subscribeRoutes from "./routes/subscribe";


dotenv.config();
const app = express();


app.use(express.json());
app.use(cors());
app.use("/api/subscribe", subscribeRoutes)


app.listen(process.env.PORT, () => {
    console.log('app listening on port 5000')
})