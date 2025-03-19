import { Task } from "../models/task.model.js";

// Create a new task
export const createTask = async (req, res) => {
  const { title, description, status, dueDate, assignedUser } = req.body;
  try {
    if (!title) {
      throw new Error("Title is required.");
    }

    const task = new Task({
      title,
      description,
      status,
      dueDate,
      assignedUser,
      createdBy: req.userId,
    });

    await task.save();
    res.status(201).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all tasks
export const getTasks = async (req, res) => {
  try {
    const query =
      req.userRole === "admin"
        ? {}
        : {
            $or: [{ createdBy: req.userId }, { assignedUser: req.userId }],
          };
    const tasks = await Task.find(query);
    res.status(200).send(tasks);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get a task by ID
export const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "Task Not Found" });
    }
    if (
      req.userRole !== "admin" &&
      task.createdBy.toString() !== req.userId &&
      task.assignedUser.toString() !== req.userId
    ) {
      return res.status(403).json({ message: "Access Denied" });
    }
    res.status(200).send(task);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update a task by ID
export const updateTask = async (req, res) => {
  const { title, description, status, dueDate, assignedUser } = req.body;
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).send();
    }
    if (
      req.userRole !== "admin" &&
      task.createdBy.toString() !== req.userId &&
      task.assignedUser.toString() !== req.userId
    ) {
      return res.status(403).json({ message: "Access Denied" });
    }
    task.title = title;
    task.description = description;
    task.status = status;
    task.dueDate = dueDate;
    task.assignedUser = assignedUser;
    await task.save();
    res.status(200).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete a task by ID
export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).send({ message: "Task Not Found!" });
    }
    if (
      req.userRole !== "admin" &&
      task.createdBy.toString() !== req.userId &&
      task.assignedUser.toString() !== req.userId
    ) {
      return res.status(403).json({ message: "Access Denied" });
    }
    await task.remove();
    res.status(200).send({ message: "Task deleted successfully!" });
  } catch (error) {
    res.status(500).send(error);
  }
};
