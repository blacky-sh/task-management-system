import express from "express";
import { connectDB } from "./database/connectDB.js";

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json()); // middleware that allows us to parse incoming requests with json data: req.body
app.use(cookieParser()); // middleware that allows us to parse incoming requests with cookies: req.cookies

app.use("/api/auth", authRouter);

app.listen(port, () => {
  connectDB();
  console.log(`Server is running on port ${port}`);
});
