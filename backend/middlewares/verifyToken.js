import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const verifyToken = async (req, res, next) => {
  const token = req.header("Authorization").replace("Bearer ", "");
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized - no token provided" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);
    if (!user) {
      throw new Error();
    }

    req.userId = decoded.userId;
    req.userRole = user.role;
    next();
  } catch (error) {
    res
      .status(401)
      .json({ success: false, message: "Unauthorized - invalid token" });
  }
};
