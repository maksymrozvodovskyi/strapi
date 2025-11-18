import {
  registerUser,
  loginUser,
  getAuthUser,
} from "../services/authService.js";

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const data = await registerUser(username, email, password);

    res.json({
      success: true,
      jwt: data.jwt,
      user: data.user,
    });
  } catch {
    res.status(400).json({ message: "Registration failed" });
  }
};

export const login = async (req, res) => {
  try {
    const { identifier, password } = req.body;
    const data = await loginUser(identifier, password);

    res.json({
      success: true,
      jwt: data.jwt,
      user: data.user,
    });
  } catch {
    res.status(401).json({ message: "Invalid email or password" });
  }
};

export const me = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "No token provided" });

    const user = await getAuthUser(token);

    res.json({ success: true, user });
  } catch {
    res.status(401).json({ message: "Unauthorized" });
  }
};
