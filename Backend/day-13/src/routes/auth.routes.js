const { Router } = require("express");
const UserModel = require("../models/user.model.js");
const jwt = require("jsonwebtoken");
const { crypto } = require("node:crypto");

const router = Router();

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  const existingUser = await UserModel.findOne({ email });

  if (existingUser) {
    return res.status(409).json({
      message: "User with email already exists",
    });
  }

  const hash = crypto.createHash("md5").update(password).digest("hex");

  const user = await UserModel.create({
    username,
    email,
    password: hash,
  });

  const token = jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );

  res.cookie("jwt_token", token);

  res.status(201).json({
    message: "User created successfully",
    id: user._id,
    token,
  });
});

router.post("/protected", (req, res) => {
  console.log(res.cookie);

  return res.status(200).json({
    message: "This is a protected route",
  });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });

  if (!user) {
    return res.status(404).json({
      message: "User not found with this email",
    });
  }

  const isPasswordMatched =
    user.password === crypto.createHash("md5").update(password).digest("hex");

  if (!isPasswordMatched) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.cookie("jwt_token", token);

  return res.status(200).json({
    message: "User logged in",
    id: user._id,
    token,
  });
});

module.exports = router;
