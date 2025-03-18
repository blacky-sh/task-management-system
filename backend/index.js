import express from "express";
import { connectDB } from "./database/connectDB.js";

import authRouter from "./routes/auth.route.js";
import taskRouter from "./routes/task.route.js";
import cookieParser from "cookie-parser";

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json()); // middleware that allows us to parse incoming requests with json data: req.body
app.use(cookieParser()); // middleware that allows us to parse incoming requests with cookies: req.cookies

app.use("/api/auth", authRouter);
app.use("/api/tasks", taskRouter);

app.listen(port, () => {
  connectDB();
  console.log(`Server is running on port ${port}`);
});
