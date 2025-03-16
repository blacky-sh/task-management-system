import express from "express";
import { connectDB } from "./database/connectDB.js";

const port = process.env.PORT || 3000;
const app = express();

app.listen(port, () => {
  connectDB();
  console.log(`Server is running on port ${port}`);
});
