import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import documentRoutes from "./routes/document.js";
import connectDB from "./db.js";


dotenv.config();

connectDB();


const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/documents", documentRoutes);

app.get("/", (req, res) => {
  res.send("Server");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});
