import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";  
import adminRoutes from "./routes/adminRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";

//server setup
const app = express();
app.use(cors());
app.use(bodyParser.json());

//monogoDB conncet
connectDB(); 

//routes
app.get("/", (req, res) => {
  res.send("🚀 Admin API is running...");
});

//admin routes & students
app.use("/api/admins", adminRoutes);
app.use("/api/students",studentRoutes);

const PORT = 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);