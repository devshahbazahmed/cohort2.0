const { Router } = require("express");
const UserModel = require("../models/user.model.js");
const jwt = require("jsonwebtoken");

const router = Router();

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  const existingUser = await UserModel.findOne({ email });

  if (existingUser) {
    return res.status(400).json({
      message: "User with email already exists",
    });
  }

  const user = await UserModel.create({
    username,
    email,
    password,
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

module.exports = router;
