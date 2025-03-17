import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!email) {
      throw new Error("Email is required.");
    }
    if (!name) {
      throw new Error("Name is required.");
    }
    if (!password) {
      throw new Error("Password is required.");
    }

    const userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists." });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    const user = new User({
      email,
      password: hashedPassword,
      name,
    });

    await user.save();

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const verifyEmail = async () => {};

export const login = async () => {};

export const logout = async () => {};

export const forgotPassword = async () => {};

export const resetPassword = async () => {};

export const checkAuth = async () => {};
