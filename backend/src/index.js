import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import cookieParser from "cookie-parser"
dotenv.config();
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import { connectMongo } from "./lib/db.js";
const app = express();
const port = process.env.PORT;
//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
//routes

app.use("/api/auth", authRoutes)
app.use("/api/message", messageRoutes)


app.listen(port, () => {
    console.log("server is started at port :" + port);
    connectMongo()
});
