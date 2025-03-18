import express from "express";
import {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} from "../controllers/task.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

// Create a new task
router.post("/create", verifyToken, createTask);

// Get all tasks
router.get("/", verifyToken, getTasks);

// Get a task by ID
router.get("/:id", verifyToken, getTaskById);

// Update a task by ID
router.put("/update/:id", verifyToken, updateTask);

// Delete a task by ID
router.delete("/delete/:id", verifyToken, deleteTask);

export default router;
