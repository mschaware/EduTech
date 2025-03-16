const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { username, leetcode, codechef, codeforces, password, mobile } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      leetcode,
      codechef,
      codeforces,
      password: hashedPassword,
      mobile,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, "secretKey", { expiresIn: "1d" });
    res.status(200).json({ token, user });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { register, login };
