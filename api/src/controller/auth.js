const User = require("../models/User");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  const { email, password, username } = req.body;

  try {
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

const login = async (req, res) => {
    const { email ,password} = req.body;
    try {
    const user = await User.findOne({ email });
    !user && res.status(400).json("Wrong credentials!");

    const pwdValidated = await bcrypt.compare(password, user.password);

    const { password: undefined, ...others } = user._doc;

    pwdValidated
      ? res.status(200).json(others)
      : res.status(400).json("Wrong credentials!");
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { register, login };
