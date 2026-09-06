import express from "express";
import mongoose from "mongoose";
import studentRoutes from "./Routes/studentRoute.js";

const app = express();
app.use(express.json());
app.use("/api/students", studentRoutes);

const PORT = 3000;

//app.use(express.json());

mongoose.connect("mongodb+srv://6ixtyight:Ohermjae@cluster0.wh9xhr3.mongodb.net/Student-Portal-API=Cluster0")
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((err) => {
  console.error("Error connecting to MongoDB", err);
});

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Student Portal API"
  });
});

//app.use("/api/students", studentRoutes);

app.listen(PORT, () => {
  console.log(`Server in running on ${PORT}`)  
});